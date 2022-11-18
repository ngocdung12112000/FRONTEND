<!-- eslint-disable prettier/prettier -->
<template>
    <div class="my-modal">
        <div class="popup">
            <div class="popup-header d-flex align-items-center justify-content-between">
                <h3>{{ mode == 'add' ? 'Thêm mới người dùng' : 'Sửa thông tin người dùng' }} </h3>
                <i class="fas fa-times fs-3 icon-close" @click="cancelClick"></i>
            </div>
            <div class="popup-body mt-3">
                <form class="d-flex form-info align-items-center justify-content-between flex-wrap">
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên đăng nhập</label>
                        <input type="text" class="form-control" id="name" placeholder="Nhập tên" 
                        :value="user_name"  @input="$emit('update:user_name', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Tên</label>
                        <input type="text" class="form-control" id="name" placeholder="Nhập tên" 
                        :value="full_name"  @input="$emit('update:full_name', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Số điện thoại</label>
                        <input type="text" class="form-control" id="phone" placeholder="Nhập SĐT"
                        :value="phone_number"  @input="$emit('update:phone_number', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập email"
                        :value="email"  @input="$emit('update:email', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="date" class="form-label">Ngày đăng kí</label>
                        <input type="date" class="form-control" id="date"
                        :value="created_date"  @input="$emit('update:created_date', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="point" class="form-label">Số KN</label>
                        <input type="point" class="form-control" id="point" placeholder="Nhập số KN"
                        :value="point"  @input="$emit('update:point', $event.target.value)">
                    </div>
                    <div class="mb-3">
                        <label for="target" class="form-label">Mục tiêu</label>
                        <input type="target" class="form-control" id="target" placeholder="Nhập mục tiêu"
                        :value="target"  @input="$emit('update:target', $event.target.value)">
                    </div>
                </form>
            </div>
            <div class="popup-footer text-end">
                <button type="button" class="btn btn-secondary px-4 me-2" @click="cancelClick">Hủy</button>
                <button type="button" class="btn btn-primary px-4" @click="saveClick">Lưu</button>
            </div>
        </div>
        <ToastMessage :isShow="isShowToast" :message="toastContent" @closeToast="isShowToast = false"/>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ToastMessage from "../Components/ToastMessage.vue";
import baseURL from '../../../assets/enum';
export default {
    components: {
        ToastMessage
    },
    data() {
        return {
            isShowToast: false,
            toastContent: ""
        }
    },
    props: {
        user_id: { 
            type: String,
            default: '' 
        },
        full_name: { 
            type: String,
            default: '' 
        },
        user_name: { 
            type: String,
            default: '' 
        },
        email: { 
            type: String,
            default: '' 
        },
        phone_number: { 
            type: String,
            default: '' 
        },
        point: { 
            type: Number,
            default: 0 
        },
        target: { 
            type: Number,
            default: 0 
        },
        created_date: { 
            type: Date,
            default: null
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
        saveClick() {
            let me = this,
                saveUser = {
                    user_id: me.user_id,
                    full_name: me.full_name,
                    user_name: me.user_name,
                    email: me.email,
                    phone_number: me.phone_number,
                    point: me.point,
                    target: me.target
                }

            if (me.mode == 'edit') {
                this.axios
                    .put(`${baseURL}api/Users/Update`, saveUser)
                    .then((response) => {
                        if(response && response.status == 200) {
                            me.isShowToast = true
                            me.toastContent = "Lưu thành công";
                            setTimeout(() => {
                                me.cancelClick();
                                me.isShowToast = false;
                            }, 2000);
                        }
                    });
            }
            
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