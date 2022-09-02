<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container">
        <div class="achievement-wrapper d-flex flex-column align-items-center pb-3">
            <div class="my-5 fs-3 fw-bolder">Tất cả thành tích</div>
            <div class="achievement-list">
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-wildfire.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Lửa rừng</div>
                            <div class="text-black-50">3/7</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(3/7) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Đạt chuỗi 7 ngày streak
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-sage.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Cao nhân</div>
                            <div class="text-black-50">561/1000</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(561/1000) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Đạt được 1000 KN
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-scholar.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Học giả</div>
                            <div class="text-black-50">213/250</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(213 / 250) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Học 250 từ mới
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-sharpshooter.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Thiện xạ</div>
                            <div class="text-black-50">14/20</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(14/20) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Hoàn thành 20 bài học mà không mắc lỗi sai nào
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-winner.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Người chiến thắng</div>
                            <div class="text-black-50">213/250</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(213 / 250) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Đạt #1 trong bảng xếp hạng của bạn
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-friendly.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Thân thiện</div>
                            <div class="text-black-50">2/3</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(2/3) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Theo dõi 3 người bạn
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-overtime.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 4
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Dũng sĩ cuối tuần</div>
                            <div class="text-black-50">1/2</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(1/2) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Hoàn thành một bài học vào Thứ Bảy và Chủ Nhật
                        </div>
                    </div>
                </div>
                <div class="achievement-item d-flex border border-0">
                    <div class="achievement-item-img mx-4 position-relative">
                        <img src="../assets/images/achievement-photogenic.svg" alt="">
                        <div class="achievement-item-level">
                            Cấp 1
                        </div>
                    </div>
                    <div class="achievement-item-content flex-grow-1 me-4">
                        <div class="achievement-item-text d-flex align-items-center justify-content-between">
                            <div class="fw-bold fs-5">Ăn ảnh</div>
                            <div class="text-black-50">0/1</div>
                        </div>
                        <div class="achievement-item-process my-3">
                            <div class="achievement-item-process-done" :style="{ width: `${(0/1) * 100}%` }">
                            </div>
                        </div>
                        <div class="achievement-item-description text-black-50">
                            Thêm ảnh hồ sơ
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

}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.achievement-wrapper {
    width: 100%;
}
.achievement-list {
    width: 60%;
    border: 2px solid #e6e6e6;
    border-radius: 20px;
}
.achievement-item {
    border-bottom: 2px solid #e6e6e6;
    padding: 15px 0;
}

.achievement-item-process {
    width: 100%;
    height: 14px;
    border-radius: 7px;
    background-color: #e5e5e5;
}

.achievement-item-process-done {
    position: relative;
    width: 80%;
    height: 14px;
    border-radius: 7px;
    background-color: #FFC800;
}

.achievement-item-process-done::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 10px;
    right: 10px;
    height: 4px;
    border-radius: 3px;
    background-color: #FFFFFF;
    opacity: 0.3;
}

.achievement-item-level {
    width: 100%;
    position: absolute;
    font-size: 12px;
    left: 50%;
    bottom: 17px;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}
</style>