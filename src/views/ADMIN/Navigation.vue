<template>
    <div class="nav-container" :class="{collapsed : isCollapse}">
        <router-link to="/admin">
            <div class="nav-item d-flex align-items-center active mt-3">
                <i class="fas fa-home me-2"></i>
                <span>Tổng quan</span>
            </div>
        </router-link>
        <router-link to="/admin/user-management">
            <div class="nav-item">
                <i class="fas fa-users me-2"></i>
                <span>Quản lý người dùng</span>
            </div>
        </router-link>
        <router-link to="/admin/course-management">
            <div class="nav-item">
                <i class="fas fa-graduation-cap me-2"></i>
                <span>Quản lý khóa học</span>
            </div>
        </router-link>
        <div class="nav-item">
            <i class="fas fa-chart-pie me-2"></i>
            <span>Thống kê</span>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    mounted() {
        $(".nav-item").click(function() {
            $(".nav-item").removeClass("active");
            $(this).addClass("active");
        })
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style>
.nav-container {
    width: 275px;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    overflow: hidden;
}

.nav-item {
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #3a3541de;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;
}

.nav-item.active{
    box-shadow: 0px 4px 8px -4px rgb(58 53 65 / 42%);
    background-image: linear-gradient(98deg, #5da5ec, #1a7fe4 94%);
    color: #fff;
}

.nav-container.collapsed {
    width: 65px
}

.nav-container.collapsed .nav-item span {
    display: none ;
}

@media screen and (max-width: 768px) {
    .nav-container {
        width: 65px !important;
    }

    .nav-container .nav-item span {
        display: none !important;
    }
}

</style>