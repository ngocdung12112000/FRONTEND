<!-- eslint-disable prettier/prettier -->
<template>
    <div class="background-course ">
        <div class="course-header"></div>
        <div class="course">
            <div class="course-category">
                <div class="course-category-title fw-bold fs-3">
                    Chủ đề
                </div>
                <div class="course-category-list">
                    <div v-for="item in category" :key="item.id" class="course-category-item" 
                        :data="item.id" @click="categoryClick">
                        {{ item.name }} ({{ item.quantity }})
                    </div>
                </div>
            </div>
            <div class="course-main">
                <div class="d-flex flex-wrap mb-3">
                    <div v-for="item in coursesDisplay" :key="item.id" class="course-item" @click="() =>courseClick(item.id, item.name)">
                        <div class="course-item-img">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="course-item-content">
                            <div class="course-item-title">
                                {{ item.name }}
                            </div>
                            <p class="course-item-description text-black-50">
                                {{ item.description }}
                            </p>
                            <div class="course-item-teacher">
                                {{ item.teacher_name }}
                            </div>
                            <div class="course-item-price">
                                <div class="me-1">{{ formatPrice(item.price*(1 - (item.discount/100))) }}đ</div>
                                <div class="lineThrough">{{ formatPrice(item.price) }}đ</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <paginate
                    v-model="page"
                    :page-count="pageCount"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="clickCallback"
                    :prev-text="'<'"
                    :next-text="'>'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                />
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import dataCourses from '../assets/js/courses.js';
import Paginate from "vuejs-paginate-next";
export default {
    components: {
      paginate: Paginate,
    },
    beforeMount() {
        this.getAllDataCourse();
        this.getAllDataCategory();
    },
    data() {
        return {
            courses: dataCourses,
            coursesDisplay: [],
            category: [],
            page: 1,
            // pageCount: 1,
        }
    },
    methods: {
        clickCallback(page) {
            console.log(page);
            this.page = page;
            this.coursesDisplay = this.courses.slice((page - 1) * 10, page * 10);
        },
        courseClick(courseId, courseName){
            this.$router.push({ name: 'CourseDetail', params: { slug: courseName, id: courseId } });
        },
        categoryClick(event){
            let me = this;
            let categoryId = parseInt(event.target.getAttribute('data'));
            this.axios
                .get(`https://localhost:44366/api/Course/CategoryId?categoryId=${categoryId}`)
                .then((response) => {
                    me.courses = response.data;
                    me.coursesDisplay = me.courses.slice(0, 10);
                });
            console.log(categoryId);
        },
        getAllDataCourse() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/Course/All")
                .then((response) => {
                    me.courses = response.data;
                    me.coursesDisplay = me.courses.slice(0, 10);
                });
        },
        getAllDataCategory() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/Course/Categories")
                .then((response) => {
                    me.category = response.data;
                });
        },
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.courses.length / 10);
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.background-course {
    width: 100%;
    background: linear-gradient(191.1deg, rgba(255, 192, 67, 0) 14.17%, rgba(255, 242, 67, 0.28) 105.12%);
}

.course-header {
    position: relative;
    width: 100%;
    height: 500px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 50%), url(../assets/images/background/b5.png);
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    background-repeat: no-repeat;
}

.course {
    display: flex;
    width: 95%;
    margin: 0px auto;
    background: #fff;
    box-shadow: 0px 0px 16px rgb(0 0 0 / 10%);
    padding: 40px 20px;
}

.course-category {
    width: 18%;
    margin-right: 20px;
}

.course-category-item {
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
    font-size: 15px;
    cursor: pointer;
    font-weight: 400;
    line-height: 20px;
    text-transform: none;
}

.course-category-item:hover{
    color: rgb(172, 161, 7);
}

.course-main {
    width: 82%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.course-item {
    position: relative;
    width: 24%;
    width: 320px;
    border-radius: 20px;
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


.course-item-teacher {
    color: black;
    height: 24px;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
    margin-bottom: 4px;
    text-overflow: ellipsis;
}

.course-item-description {
    color: #757575;
    height: 40px;
    display: -webkit-box;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.course-item-price {
    gap: 4px;
    height: 24px;
    display: flex;
}

.course-item-price div:first-child {
    color: #E11800;
    width: fit-content;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.course-item-price div:last-child {
    color: #757575;
    width: fit-content;
    overflow: hidden;
    font-size: 14px;
    align-self: center;
    line-height: 17px;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* text-decoration-line: line-through; */
}

.lineThrough {
    text-decoration-line: line-through;
}

@media screen and (max-width: 950px) {
    .course-category {
        width: 40%;
    }

    .course-item {
        width: 100%;
        margin-right: 0px;
    }
} 

@media screen and (max-width: 426px) {
    .course-category {
        display: none;
    }

    .course-main {
        width: 100%;
    }

    .course-header {
        height: 200px;
    }
} 


    
</style>