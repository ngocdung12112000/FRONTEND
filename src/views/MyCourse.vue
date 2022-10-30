<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container">
        <h1 class="fw-bolder mt-5">Khóa học của tôi</h1>
        <div class="course-wrapper">
            <div class="d-flex flex-wrap my-3 mt-5">
                <div v-for="item in courses" :key="item.id" class="course-item" @click="() =>courseClick(item.id, item.slug)">
                    <div class="course-item-img">
                        <img :src="require(`../assets/images/COURSES/${item.image}`)" alt="">
                    </div>
                    <div class="course-item-content">
                        <div class="course-item-title">
                            {{ item.name }}
                        </div>
                        <p class="course-item-description text-black-50">
                            {{ item.description }}
                        </p>
                        <div class="course-item-teacher">
                            {{ item.teacher }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import dataCourses from '../assets/js/courses.js';
export default {
    data() {
        return {
            courses: dataCourses
        }
    },
    methods: {
        courseClick(courseId, courseName){
            this.$router.push({ name: 'CourseDetail', params: { slug: courseName, id: courseId } });
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.course-item {
    position: relative;
    width: 24%;
    width: 290px;
    border-radius: 20px;
    box-shadow: 0px 0px 15px rgb(84 84 84 / 20%);
    min-height: 300px;
    overflow: hidden;
    margin-bottom: 20px;
    margin-right: 20px;
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
    text-decoration-line: line-through;
}

@media screen and (max-width: 997px) {
    .course-item {
        width: 46%;
    }
}

@media screen and (max-width: 768px) {
    .course-item {
        width: 100%;
        margin-right: 0;
    }
}
</style>