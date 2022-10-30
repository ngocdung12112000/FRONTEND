<!-- eslint-disable prettier/prettier -->
<template>
    <div class="toast-container position-fixed end-0 p-3" style="z-index: 1000; color: #fff;">
        <div id="liveToast" class="toast d-flex align-items-center justify-content-between"
            :class="{'show': isShow}"
            style="background-color: #00b894;" role="alert" aria-live="assertive" aria-atomic="true">
            <div style="font-size: 18px;" class="toast-body">
                {{message}}
            </div>
            <button @click="closeToast" type="button" class="btn-close me-3"  data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    name: "ToastMessage",
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: ''
        }
    },
    methods: {
        closeToast() {
            this.$emit('closeToast');
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.toast-container {
    top: 55px !important;
}
</style>