<!-- eslint-disable prettier/prettier -->
<template>
    <div class="header-container">
        <div class="header-content d-flex align-items-center">
            <div class="header-logo d-flex align-items-center justify-content-center" :class="{collapsed: isCollapse}">
                <img src="../../assets/images/logo-white-3.png" alt="logo" />
                <span>BNZ ENGLISH</span>
            </div>
            <div class="d-flex justify-content-between header-main">
                <div class="d-flex align-items-center">
                    <i class="fas fa-bars me-3 fs-4" style="cursor: pointer;" @click="onCollapse"></i>
                    <!-- <div class="search d-flex align-items-center">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search">
                    </div> -->
                </div>
                <div class="user-admin d-flex align-items-center">
                    <div class="icon-notify me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" style="stroke-dasharray: 57, 77; stroke-dashoffset: 0;"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" style="stroke-dasharray: 5, 25; stroke-dashoffset: 0;"></path>
                        </svg>
                    </div>
                    <div class="admin-img">
                        <img @click="isShowDropdow = !isShowDropdow" style="width: 35px; height: 35px; border-radius: 50%; cursor: pointer;" src="../../assets/images/admin.png" alt="">
                        <div class="dropdown-menu dropdown-menu-right" :class="{ show: isShowDropdow}">
                            <div class="dropdown-item d-flex align-items-center border-bottom pt-0">
                                <img class="me-2" style="width: 35px; height: 35px; border-radius: 50%;" src="../../assets/images/admin.png" alt="">
                                <div>
                                    <p class="mb-0 fw-bold">John Doe</p>
                                    <p class="mb-0 text-black-50" style="font-size: 14px;">Admin</p>
                                </div>
                            </div>
                            <div href="#" class="dropdown-item ai-icon">
                                <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" style="stroke-dasharray: 25, 45; stroke-dashoffset: 0;"></path><path d="M8,7A4,4 0,1,1 16,7A4,4 0,1,1 8,7" style="stroke-dasharray: 26, 46; stroke-dashoffset: 0;"></path></svg>
                                <span class="ms-2">Profile</span>
                            </div>
                            <div href="#" class="dropdown-item ai-icon">
                                <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" style="stroke-dasharray: 69, 89; stroke-dashoffset: 0;"></path><path d="M22,6L12,13L2,6" style="stroke-dasharray: 25, 45; stroke-dashoffset: 0;"></path></svg>
                                <span class="ms-2">Inbox</span>
                            </div>
                            <div href="#" class="dropdown-item ai-icon">
                                <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" style="stroke-dasharray: 29, 49; stroke-dashoffset: 0;"></path><path d="M16,17L21,12L16,7" style="stroke-dasharray: 15, 35; stroke-dashoffset: 0;"></path><path d="M21,12L9,12" style="stroke-dasharray: 12, 32; stroke-dashoffset: 0;"></path></svg>
                                <span class="ms-2">Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    data() {
        return {
            isShowDropdow : false,
            isCollapse: false
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.user-admin')) {
                return;
            }
            this.isShowDropdow = false;
        })
    },
    methods: {
        onCollapse() {
            this.isCollapse = !this.isCollapse;
            this.$emit('onCollapse', this.isCollapse);
        }
    }
    
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.header-container {
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 99;
    background-color: #fff;
}
.header-content {
    width: 100%;
    height: 80px;
    /* padding: 0 20px; */
}

.header-logo {
    width: 275px;
    background: #2e86de;
    color: #fff;
    text-align: center;
    font-size: 25px;
    font-weight: bolder;
    height: 100%;
}

.header-logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.header-logo.collapsed {
    width: 70px;
}

.header-logo.collapsed img{
    margin-right: 0 !important;
}

.header-logo.collapsed span {
    display: none;
}

.header-main {
    flex: 1;
    padding: 0 60px 0 20px;
}
.search {
    position: relative;
}

.search i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #2e86de;
}

.search input {
    border: none;
    outline: none;
    padding: 10px 20px 10px 40px;
    border-radius: 25px;
    font-size: 16px;
    color: #000;
    border: 1px solid #ccc;
}

.admin-img {
    position: relative;
}

.dropdown-menu {
    right: 0px;
    top: calc(100% + 10px);
    padding: 8px 0;
    min-width: 12.5rem;
}

.dropdown-item {
    padding: 8px 24px;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .header-logo {
        width: 70px !important;
    }

    .header-logo img{
        margin-right: 0 !important;
    }
    .header-logo span {
        display: none !important;
    }

    .header-main {
        padding: 0 15px;
    }

    .search  input{
        width: 150px;
    }
}
</style>