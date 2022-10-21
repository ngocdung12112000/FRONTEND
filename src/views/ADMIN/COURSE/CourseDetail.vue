<!-- eslint-disable prettier/prettier -->
<template>
    <div class="my-modal">
        <div class="popup">
            <div class="popup-header d-flex align-items-center justify-content-between">
                <h3>Thêm mới khóa học</h3>
                <i class="fas fa-times fs-3 icon-close" @click="cancelClick"></i>
            </div>
            <div class="popup-body">
                <form class="d-flex form-info align-items-center justify-content-between flex-wrap">
                    <div style="width: 100%" class="mb-3">
                        <label for="avatar" class="form-label">Ảnh đại diện</label>
                        <input @change="onChangeAvar" type="file" class="form-control mb-1" id="avatar">
                        <div class="preview d-none">
                            <img src="../../../assets/images/COURSES/c1.png" alt="">
                        </div>
                    </div>
                    <div class="mb-2">
                        <label for="name" class="form-label">Tên khóa học</label>
                        <input type="text" class="form-control" id="name" placeholder="Nhập tên">
                    </div>
                    <div class="mb-2">
                        <label for="age" class="form-label">Mã khóa học</label>
                        <input type="number" class="form-control" id="age" placeholder="Nhập mã khóa học">
                    </div>
                    <div style="width: 100%" class="mb-3 mt-1">
                        <label for="description" class="form-label">Mô tả</label>
                        <textarea name="" id="description" style="width: 100%"  rows="5"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Thời lượng</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập thời lượng">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Giá</label>
                        <input type="text" class="form-control" id="price">
                    </div>
                    <div class="mb-3">
                        <label for="teacher" class="form-label">Tên giáo viên</label>
                        <input type="text" class="form-control" id="teacher">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">SĐT liên hệ</label>
                        <input type="text" class="form-control" id="phone" placeholder="Nhập SĐT">
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
        },
        onChangeAvar() {
            let file = document.getElementById('avatar').files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let preview = document.querySelector('.preview');
                preview.classList.remove('d-none');
                let img = document.querySelector('.preview img');
                img.src = reader.result;
            }
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>

.my-modal {
    position: absolute;
    top: -80px;
    left: -400px;
    right: -100px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 999;
    color: #000;
}

.my-modal .popup {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    min-width: 700px;
    max-width: 1000px;
    height: calc(100vh - 100px);
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
    height: 660px;
    overflow: auto;
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