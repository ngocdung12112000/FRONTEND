<!-- eslint-disable prettier/prettier -->
<template>
    <div class="course-list-container py-3 px-4">
        <h3 class="fw-bolder mb-4">Danh sách khóa học</h3>
        <div class="course-control d-flex justify-content-between">
            <div>
                <div class="course-search-input me-3">
                    <input type="text" placeholder="Tìm kiếm khóa học" @change="onSearchCourse">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div class="course-search-btn me-5">
                <button @click="addClick" style="background-color: #01a3a4; border: none" class="btn btn-primary">Thêm
                    mới</button>
            </div>
        </div>
        <div class="course-list d-flex flex-wrap justify-content-center pt-3">
            <div class="d-flex flex-wrap mb-3">
                <div v-for="item in courseDisplay" :key="item.id" class="course-item"
                    @click="() =>courseClick(item)">
                    <div class="course-item-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="course-item-content">
                        <div class="course-item-title">
                            {{ item.name }}
                        </div>
                        <div class="course-item-teacher d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666; font-size: 15px;">Giáo viên:</span>  
                            <span style="font-size: 16px;" class="fw-bold">{{ item.teacher_name }}</span>
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666;font-size: 15px;">Giá gốc:</span> 
                            <span style="font-size: 16px;" class="fw-bold">{{ formatPrice(item.price) }} đ</span> 
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666;font-size: 15px;">Giá khuyến mãi:</span> 
                            <span style="font-size: 16px;" class="fw-bold">{{ formatPrice(item.price - (item.price*item.discount/100))  }} đ</span> 
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666;font-size: 15px;">Thời lượng:</span> 
                            <span style="font-size: 16px;" class="fw-bold">{{ formatTime(item.total_time) }}</span> 
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2">
                            <span style="color: #666666;font-size: 15px;">Đã bán:</span> 
                            <span style="font-size: 16px;" class="fw-bold">{{ item.sold_quantity }}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <CourseDetail v-show="isShowDetail" 
                @cancel-click="isShowDetail = false"
                v-model:id="courseSelected.id"
                v-model:name="courseSelected.name"
                v-model:teacher_name="courseSelected.teacher_name"
                v-model:image="courseSelected.image"
                v-model:price="courseSelected.price"
                v-model:discount="courseSelected.discount"
                v-model:time="courseSelected.total_time"
                v-model:description="courseSelected.description"
                v-model:mode="formMode" 
            />
        </div>
        
        <ToastMessage :isShow="isShowToast" :message="toastContent" />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import CourseDetail from './CourseDetail.vue';
import ToastMessage from '../Components/ToastMessage.vue';
import baseURL from '../../../assets/enum';
// import Paginate from "vuejs-paginate-next";
// import dataCourses from '../../../assets/js/courses.js';
// import $ from "jquery";
export default {
    name: "CourseList",
    components: {
        CourseDetail,
        // Paginate,
        ToastMessage
    },
    beforeMount() {
        this.getCourseList();
    },
    mounted() {

    },
    data() {
        return {
            page: 1,
            isShowDetail: false,
            courses: [],
            courseDisplay: [],
            isShowToast: false,
            toastContent: '',
            formMode: 'add',
            courseSelected: {}
        };
    },
    methods: {
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatTime(value) {
            return new Date(value * 1000).toISOString().substring(11,19)
        },
        addClick() {
            this.isShowDetail = true;
            this.formMode = 'add';
            this.courseSelected = {};
        },
        clickCallback(pageNum) {
            console.log(pageNum)
        },
        onSearchCourse(e) {
            let me = this;
            if(e.target.value == ''){
                me.courseDisplay = me.courses;
            }
            else{
                me.courseDisplay = me.courses.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase()));
            }
        },
        courseClick(course) {
            this.isShowDetail = true;
            this.formMode = 'edit';
            this.courseSelected = course;
        },
        deleteClick(id) {
            console.log(id)
        },
        getCourseList() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Course/All`)
                .then((response) => {
                    me.courses = response.data;
                    me.courseDisplay = me.courses;
                });
        }
    },
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.course-list-container {
    overflow: scroll;
}

.course-list {
    height: 700px;
}

.course-control {
    width: 100%;
}

.course-search-input {
    position: relative;
}

.course-search-input input {
    outline: none;
    border: 1px solid rgb(155, 155, 155);
    border-radius: 5px;
    padding: 5px 40px 5px 10px;
}

.course-search-input i {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
}

.course-item {
    position: relative;
    width: 22%;
    min-width: 310px;
    /* width: 320px; */
    box-shadow: 0px 0px 15px rgb(84 84 84 / 20%);
    min-height: 300px;
    overflow: hidden;
    margin-bottom: 20px;
    margin-right: 30px;
    cursor: pointer;
}

.course-item-img {
    position: relative;
    width: 100%;
    height: 150px;
    margin-bottom: 5px;
    overflow: hidden;
}

.course-item-img img{
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    filter: none;
    background-size: cover;
    background-image: none;
    background-position: 0% 0%;
    transition: all 0.4s ease-in-out;
}

.course-item-img:hover img{
    transform: scale(1.3);
}

.course-item-content {
    padding: 15px;
}

.course-item-title {
    color: #082346;
    height: 56px;
    display: -webkit-box;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 4px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}



</style>