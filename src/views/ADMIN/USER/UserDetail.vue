<!-- eslint-disable prettier/prettier -->
<template>
    <div class="my-modal">
        <div class="popup">
            <div class="popup-header d-flex align-items-center justify-content-between">
                <h3>Thêm mới người dùng</h3>
                <i class="fas fa-times fs-3 icon-close" @click="cancelClick"></i>
            </div>
            <div class="popup-body">
                <form class="d-flex form-info align-items-center justify-content-between flex-wrap">
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên</label>
                        <input type="text" class="form-control" id="name" placeholder="Nhập tên">
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Tuổi</label>
                        <input type="number" class="form-control" id="age" placeholder="Nhập tuổi">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">SĐT</label>
                        <input type="text" class="form-control" id="phone" placeholder="Nhập SĐT">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập email">
                    </div>
                    <div class="mb-3">
                        <label for="date" class="form-label">Ngày đăng kí</label>
                        <input type="date" class="form-control" id="date">
                    </div>
                    <div class="mb-3">
                        <label for="avatar" class="form-label">Ảnh đại diện</label>
                        <input type="file" class="form-control" id="avatar">
                    </div>
                </form>
            </div>
            <div class="popup-footer text-end">
                <button type="button" class="btn btn-secondary px-4 me-2" @click="cancelClick">Hủy</button>
                <button type="button" class="btn btn-primary px-4">Lưu</button>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        cancelClick() {
            this.$emit('cancel-click')
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>

.my-modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 999;
    color: #000;
}

.my-modal .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    min-width: 700px;
    height: 600px;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
}

.form-info > div{
    width: 49%;
}

.icon-close {
    cursor: pointer;
}

.popup-body {
    height: 460px;
    overflow: auto;
}

.popup-body::-webkit-scrollbar {
  display: none;
}

.popup-body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.popup-footer {
    position: absolute;
    bottom: 20px;
    right: 20px;
}
</style>