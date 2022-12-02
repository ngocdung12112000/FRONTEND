<!-- eslint-disable prettier/prettier -->
<template>
    <div class="my-modal">
        <div class="popup">
            <div class="popup-header d-flex align-items-center justify-content-between mb-3">
                <h3 style="color:#2e86de; font-weight: bolder;">{{ mode == 'add' ? 'Thêm' : 'Sửa' }} khóa học</h3>
            </div>
            <div class="popup-body">
                <div class="d-flex form-info align-items-center justify-content-between flex-wrap">
                    <div style="width: 100%" class="mb-3">
                        <label for="avatar" class="form-label">Ảnh khóa học</label>
                        <input @input="$emit('update:image', $event.target.value)" type="text" class="form-control mb-1" id="avatar"
                            placeholder="Nhập link ảnh" :value="image">
                        <div v-if="image" class="preview d-flex justify-content-center">
                            <img style="width: 600px; height: 300px;" :src="image" alt="">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="course_code" class="form-label">Mã khóa học</label>
                        <input type="text" class="form-control" id="course_code" placeholder="Nhập mã khóa học"
                            :value="course_code" @input="$emit('update:course_code', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên khóa học</label>
                        <input type="text" class="form-control" id="name" placeholder="Nhập tên" :value="name"
                            @input="$emit('update:name', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Giá khóa học</label>
                        <input type="text" class="form-control" id="price" placeholder="Nhập giá"
                            :value="formatPrice(price)" @input="$emit('update:price', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="discount" class="form-label">Khuyến mãi</label>
                        <input type="text" class="form-control" id="discount" placeholder="Nhập khuyến mãi"
                            :value="discount" @input="$emit('update:discount', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="cbxTeacher" class="form-label">Giáo viên</label>
                        <select v-if="listTeacher" class="form-select" aria-label=".form-select-lg example" id="cbxTeacher" 
                        v-model="selectedTeacher">
                            <option v-for="item in listTeacher" :key="item.id" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="cbxCategory" class="form-label">Chủ đề</label>
                        <select v-if="listCategory" class="form-select" aria-label=".form-select-lg example" id="cbxCategory" 
                        v-model="selectedCategory">
                            <option v-for="item in listCategory" :key="item.id" :value="item.id">
                                {{item.name}}
                            </option>
                        </select>
                    </div>

                    <div style="width: 100%" class="mb-3 mt-1 list-video-wrapper">
                        <label for="videos" class="form-label">Danh sách video</label>
                        <div class="video-item d-flex align-items-center mt-1 mb-1">
                            <div class="video-item-title me-3">Tiêu đề</div>
                            <div class="video-item-link me-3">Link video</div>
                            <div class="video-item-duration">Thời lượng</div>
                        </div>
                        <div class="list-video" id="listVideo">
                            <div v-for="item, index in listVideos" :key="item.id"
                                class="video-item d-flex align-items-center mt-1 mb-3">
                                <input  type="text" class="form-control video-item-title me-3" v-model="item.title"
                                    placeholder="Nhập tiêu đề video">
                                <input  type="text" class="form-control video-item-link me-3" v-model="item.link"
                                    placeholder="Nhập link video">
                                <input type="text" class="form-control video-item-duration me-3" :value="formatTime(item.time)"
                                    placeholder="hh:mm:ss">
                                <div class="add-btn me-3" @click="() => addVideo(index)">
                                    <i style="color:#0984e3" class="fas fa-plus"></i>
                                </div>
                                <div v-if="(listVideos.length > 1 && index >= 1)" class="delete-btn" @click="() => deleteVideo(index)">
                                    <i style="color: #d63031" class="fas fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="width: 100%" class="mb-3 mt-1 list-document">

                    </div>
                    <div style="width: 100%" class="mb-3 mt-1">
                        <label for="description" class="form-label">Mô tả</label>
                        <textarea name="" id="description" style="width: 100%" rows="5" :value="description"
                            @input="$emit('update:description', $event.target.value)"></textarea>
                    </div>
                </div>
            </div>
            <div class="popup-footer text-end">
                <button type="button" class="btn btn-secondary px-4 me-2" @click="cancelClick">Hủy</button>
                <button type="button" class="btn btn-primary px-4" @click="saveClick">Lưu</button>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import baseURL from '../../../assets/enum';
import $ from 'jquery';
export default {
    data() {
        return {
            listVideos: [
                {
                    id: 0,
                    title: "",
                    time: 0,
                    link: "",
                    sort_order: 0,
                }
            ],
            listTeacher: [],
            listCategory: [],
            selectedTeacher: null,
            selectedCategory: null,
        }
    },
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number,
            default: 0
        },
        course_code: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        teacher_name: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        },
        discount: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        time: {
            type: Number,
            default: 0
        },
        mode: {
            type: String,
            default: 'add'
        }
    },
    methods: {
        cancelClick() {
            this.$emit('cancel-click')
        },
        formatTime(value) {
            return new Date(value * 1000).toISOString().substring(11, 19)
        },
        formatPrice(value) {
            value = value.toString().replace(/\./g, '');
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        onChangeAvar() {
            let link = $('#avatar').val();
            $('.preview img').attr('src', link);
        },
        getListData() {
            let me = this;
            me.listTeacher = [];
            me.listCategory = [];
            // Lấy danh sách giáo viên
            this.axios
                .get(`${baseURL}api/Course/Teachers`)
                .then((response) => {
                    if(response.data != null && response.data.length > 0) {
                        me.listTeacher = response.data;
                    }
                });
            // Lấy danh sách chủ đề
            this.axios
                .get(`${baseURL}api/Course/Categories`)
                .then((response) => {
                    if(response.data != null && response.data.length > 0) {
                        me.listCategory = response.data;
                    }
                });
        },
        getCourseDetail(courseId){
            let me = this;
            me.listVideos = [];
            
            // Lấy danh sách video
            this.axios
                .get(`${baseURL}api/Course/Id?courseId=${courseId}&userId=00000000-0000-0000-0000-000000000000`)
                .then((response) => {
                    if(response.data != null) {
                        me.listVideos = response.data.list_video;
                        me.selectedTeacher = response.data.teacher.id;
                        me.selectedCategory = response.data.category_id;

                        if(me.listVideos.length == 0) {
                            me.listVideos = [
                                {
                                    id: 0,
                                    title: "",
                                    time: 0,
                                    link: "",
                                    sort_order: 0,
                                }
                            ]
                        }
                    }
                });
        },
        addVideo(index) {
            let newVideo = {
                id: 0,
                title: "",
                time: 0,
                link: "",
                sort_order: 0
            }
            this.listVideos.splice(index + 1, 0, newVideo);
        },
        deleteVideo(index) {
            this.listVideos.splice(index, 1);
        },
        saveClick() {
            let me = this, type = 1,
                listDuration = document.querySelectorAll('.list-video .video-item-duration'),
                paramSave = {
                    id: this.id,
                    course_code: this.course_code,
                    name: this.name,
                    teacher_name: this.teacher_name,
                    price: parseInt(this.price.toString().replace(/\./g, '')),
                    discount: parseInt(this.discount),
                    description: this.description,
                    image: this.image,
                    time: this.time,
                    list_video: this.listVideos,
                    teacher_id: this.selectedTeacher,
                    category_id: this.selectedCategory
                };

            for (let i = 0; i < listDuration.length; i++) {
                let time = listDuration[i].value.split(':');
                let duration = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
                me.listVideos[i].time = duration;
            }

            me.listVideos.forEach((item, index) => {
                item.sort_order = index+1;
                item.time = parseInt(item.time);
            });

            if(this.mode == 'add') {
                type = 1;
            } else {
                type = 2;
            }

            this.axios
                .post(`${baseURL}api/Course/Save?type=${type}`, paramSave)
                .then((response) => {
                    if(response.data != null) {
                        this.selectedTeacher = null;
                        this.selectedCategory = null;
                        me.$emit('save-click');
                    }
                });
        },
    },
    watch: {
        isShow: function (val) {
            if(val == false) {
                this.selectedTeacher = null;
                this.selectedCategory = null;
            }
            else {
                if(this.mode == 'add') {
                    this.listVideos = [
                        {
                            id: 0,
                            title: "",
                            time: 0,
                            link: "",
                            sort_order: 0,
                        }
                    ];
                    this.selectedTeacher = null;
                    this.selectedCategory = null;
                }
                this.getListData();
                this.getCourseDetail(this.id);
            }
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.my-modal {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 999;
    color: #000;
}

.my-modal .popup {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #f5f5f5;
    padding: 20px;
    overflow: auto;
}

.form-info>div {
    width: 49%;
}

.icon-close {
    cursor: pointer;
}

.popup-body {
    position: absolute;
    top: 65px;
    left: 20px;
    right: 20px;
    bottom: 75px;
    overflow: auto;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.preview {
    width: 100%;
    height: 300px;
}

.preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

textarea {
    resize: none;
    outline: none;
    border: 1px solid #ced4da;
    border-radius: 5px;
}

.list-video {
    width: 100%;
    height: 250px;
    overflow: auto;
    display: flex;
    flex-direction: column;
}

.video-item {
    width: 100%;
    height: 34px;
}

.video-item .video-item-link {
    width: 35%;
}

.video-item .video-item-duration {
    width: 15%;
}

.video-item .video-item-title {
    width: 35%;
}

.video-item .add-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #0984e3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.video-item .delete-btn {
    width: 28px;
    height: 28px;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


.popup-body::-webkit-scrollbar {
    /* display: none; */
    width: 8px;
}


.popup-footer {
    position: absolute;
    bottom: 20px;
    right: 20px;
}
</style>