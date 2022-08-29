<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container profile">
        <div class="profile-info">
            <div class="info-section">
                <div class="profile-avatar">
                    Z
                    <div class="icon-edit d-flex align-items-center justify-content-center">
                        <div class="img-icon-edit"></div>
                    </div>
                </div>
                <div class="profile-detail">
                    <div class="profile-name fw-bold fs-2 text-dark">Zaxua</div>
                    <div class="profile-username text-black-50 my-2">Zaxua</div>
                    <div class="joined-date text-black-50 my-2">
                        <div class="icon"></div>
                        Đã tham gia Tháng Bảy 2018
                    </div>
                    <div class="follow-section text-black-50">
                        <div class="icon"></div>
                        Đang theo dõi 0 / 0 Người theo dõi
                    </div>
                    <div class="img-country"></div>
                </div>
            </div>
            <div class="edit-wrapper">
                <div class="edit-section d-flex align-items-center justify-content-center text-white fs-5">
                    <div class="img-icon-edit me-2"></div>
                    Sửa hồ sơ
                </div>
            </div>
        </div>
        <div class="profile-content">
            <div class="col-8">
                <div class="statistic-section">

                </div>
                <div class="achievement-section">

                </div>
            </div>
            <div class="col-4 friend-section">

            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {

}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.profile-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    border-bottom: 2px solid #e6e6e6;
}

.info-section {
    display: flex;
    align-items: center;
}

.profile-info .profile-avatar {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 20px;
    border: 3px dashed #afafaf;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 82px;
    font-weight: bolder;
    color: #afafaf;
}

.profile-info .profile-detail {
    margin-left: 20px;
}

.profile-info .profile-avatar .icon-edit {
    position: absolute;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    background-color: #1CB0F6;
    right: 0;
    top: 20px;
}

.edit-wrapper {
    position: relative;
    width: 145px;
    height: 46px;
    border-radius: 15px;
    background-color: #0f6b96;
}

.edit-section {
    position: absolute;
    top: -5px;
    width: 145px;
    height: 46px;
    border-radius: 15px;
    background-color: #1CB0F6;
    cursor: pointer;
}

.edit-section:hover {
    background-color: #31b8f7;
}
</style>