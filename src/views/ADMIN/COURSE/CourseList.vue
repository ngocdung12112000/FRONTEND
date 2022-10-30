<!-- eslint-disable prettier/prettier -->
<template>
    <div class="course-list-container py-3 px-4">
        <h3 class="fw-bolder mb-4">Danh sách khóa học</h3>
        <div class="course-control d-flex justify-content-between">
            <div>
                <div class="course-search-input me-3">
                    <input type="text" placeholder="Tìm kiếm khóa học">
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
                <div v-for="item in courses" :key="item.id" class="course-item"
                    @click="() =>courseClick(item.id)">
                    <div class="course-item-img">
                        <img :src="require(`../../../assets/images/COURSES/${item.image}`)" alt="">
                    </div>
                    <div class="course-item-content">
                        <div class="course-item-title">
                            {{ item.name }}
                        </div>
                        <div class="course-item-teacher d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666; font-size: 15px;">Giáo viên:</span>  
                            <span style="font-size: 16px;" class="fw-bold">{{ item.teacher }}</span>
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666;font-size: 15px;">Giá gốc:</span> 
                            <span style="font-size: 16px;" class="fw-bold">{{ item.price }} đ</span> 
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666;font-size: 15px;">Giá khuyến mãi:</span> 
                            <span style="font-size: 16px;" class="fw-bold">{{ item.salePrice }} đ</span> 
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2 border-bottom">
                            <span style="color: #666666;font-size: 15px;">Thời lượng:</span> 
                            <span style="font-size: 16px;" class="fw-bold">02:45:00</span> 
                        </div>
                        <div class="course-item-price d-flex justify-content-between py-2">
                            <span style="color: #666666;font-size: 15px;">Đã bán:</span> 
                            <span style="font-size: 16px;" class="fw-bold">100</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CourseDetail v-show="isShowDetail" @cancel-click="isShowDetail = false" />
        <ToastMessage :isShow="isShowToast" :message="toastContent" />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import CourseDetail from './CourseDetail.vue';
import ToastMessage from '../Components/ToastMessage.vue';
// import Paginate from "vuejs-paginate-next";
import dataCourses from '../../../assets/js/courses.js';
// import $ from "jquery";
export default {
    name: "UserList",
    components: {
        CourseDetail,
        // Paginate,
        ToastMessage
    },
    mounted() {

    },
    data() {
        return {
            page: 1,
            isShowDetail: false,
            userList: [],
            courses: dataCourses,
            isShowToast: false,
            toastContent: ''
        };
    },
    methods: {
        addClick() {
            this.isShowDetail = true;
        },
        clickCallback(pageNum) {
            console.log(pageNum)
        },
        courseClick(id) {
            this.isShowDetail = true;
            console.log(id)
        },
        deleteClick(id) {
            console.log(id)
        }
    },
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
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