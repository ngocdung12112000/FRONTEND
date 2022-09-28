<template>
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1000; color: #fff;">
        <div id="liveToast" class="toast d-flex align-items-center justify-content-between"
            style="background-color: #00b894;" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
            <button type="button" class="btn-close me-3" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>