<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container px-4">
        <h1 class="fw-bolder mt-5 ps-5">Giỏ hàng</h1>
        <div class="cart-wrapper mt-3 d-flex justify-content-between">
            <div class="course-section ps-5">
                <p v-if="listCourse" >Bạn đang có {{listCourse.length}} sản phẩm trong giỏ hàng</p>
                <div class="">
                    <div class="check-all d-flex align-items-center my-3">
                        <input type="checkbox" id="checkAll" class="me-3" v-model="isCheckAll" @change="clickCheckAll">
                        <label for="check-all">Chọn tất cả</label>
                    </div>
                    <div class="course-list">
                        <div v-for="course in listCourse" :key="course.id" class="course-item d-flex align-items-center mb-4">
                            <input type="checkbox" @change="() => clickSelectCourse(course)">
                            <div class="course-item-img mx-3">
                                <img :src="course.image" alt="">
                            </div>
                            <div class="course-item-detail flex-grow-1">
                                <div class="d-flex align-items-center justify-content-between">
                                    <h4 class="fw-bolder">{{ course.name }}</h4>
                                    <div style="width: 24px; text-align: center; cursor: pointer;" @click="() => removeCourse(course)">
                                        <i class="fas fa-times"></i>
                                    </div>
                                </div>
                                <div class="text-black-50">{{ course.teacher }}</div>
                                <div style="font-size: 13px;"
                                    class="sell-price text-end mt-3 text-decoration-line-through text-black-50">{{ course.price }}đ
                                </div>
                                <div style="color:#74b9ff; font-size: 24px;" class="sale-price text-end fw-bold">{{course.price*(1 - course.discount/100) }}đ
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="bill-wrapper">
                <div class="bill">
                    <h2 class="fw-bold">Hóa đơn</h2>
                    <div class="d-flex align-item-center justify-content-between px-1 py-3">
                        <div>Giá chưa giảm</div>
                        <div> {{  formatCurrency(totalPrice) }} đ</div>
                    </div>
                    <div class="d-flex align-item-center justify-content-between px-1 py-3">
                        <div>Giảm giá</div>
                        <div> {{ formatCurrency(totalSalePrice) }} đ</div>
                    </div>
                    <div class="d-flex align-item-center justify-content-between px-1 py-3">
                        <div>Mã giảm giá</div>
                        <div>Không áp dụng</div>
                    </div>
                    <div class="d-flex align-item-center justify-content-between px-1 py-3">
                        <div>Tổng cộng</div>
                        <div class="fw-bold">{{ formatCurrency(totalSalePrice) }} đ</div>
                    </div>
                    <div class="purchase disabled">
                        <div ref="paypal"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
// import dataCourses from '../assets/js/courses.js';
export default {
    data(){
        return {
            isCheckAll: false,
            listCourse: [],
            totalPrice: 0,
            totalSalePrice: 0,
            loaded: false,
            paidFor: false,
            product: {
                price: 10,
                description: ""
            }
        }
    },
    beforeMount(){
        this.getListCourse();
    },
    mounted(){
        this.renderPaypal();
    },
    methods:{
        renderPaypal() {
            const script = document.createElement("script");
            script.src =
                "https://www.paypal.com/sdk/js?client-id=AT1kTrZeE44q5J5CrQQ13ku15MF_b-i26O1GLupVMSlScz6SzE777BLaX1cW-QotXV-ui7OW4EsL3jvf";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        setLoaded: function () {
            this.loaded = true;
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: this.product.description,
                                    amount: {
                                        currency_code: "USD",
                                        value: this.product.price
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        this.paidFor = true;
                        if(order.status === "COMPLETED"){
                            this.purchaseSuccess();
                        }
                    },
                    onError: err => {
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        },
        getListCourse() {
            let me = this,
                userId = this.$store.getters['AUTH/userId'];

            if(userId) {
                this.axios
                .get(`https://localhost:44366/api/Users/Cart?UserId=${userId}`)
                .then((response) => {
                    if(response && response.data) {
                        me.listCourse = response.data;
                    }
                });
            }
        },
        purchaseSuccess() {
            let userId = this.$store.getters['AUTH/userId'],
                param = {
                    userId: userId,
                    listCourseId: this.listCourse.map(course => course.id)
                };
            console.log("purchase success");
            this.listCourse = [];
            this.totalPrice = 0;
            this.totalSalePrice = 0;

            this.axios
                .post(`https://localhost:44366/api/Users/AddBoughtCourse`,param)
                .then((response) => {
                    if(response && response.data) {
                        console.log(response.data);
                    }
                });
        },
        clickCheckAll() {
            if(this.isCheckAll) {
                $(".course-item input[type='checkbox']").prop("checked", true);
                this.totalPrice = this.listCourse.reduce((total, course) => {
                    return total + course.price;
                }, 0);
                this.totalSalePrice = this.listCourse.reduce((total, course) => {
                    return total + (course.price*(1 - course.discount/100));
                }, 0);
                this.product.price = Math.round(this.totalSalePrice / 24000);
            }
            else {
                $('.course-item input[type="checkbox"]').prop('checked', false);
                this.totalPrice = 0;
                this.totalSalePrice = 0;
                this.product.price = Math.round(this.totalSalePrice / 24000);
            }
        },
        clickSelectCourse(course) {
            if(event.target.checked) {
                this.totalPrice += course.price;
                this.totalSalePrice += (course.price*(1 - course.discount/100));
                this.product.price = Math.round(this.totalSalePrice / 24000);
            }
            else {
                this.totalPrice -= course.price;
                this.totalSalePrice -= (course.price*(1 - course.discount/100));
                this.product.price = Math.round(this.totalSalePrice / 24000);
            }
            this.totalPrice = this.totalPrice > 0 ? this.totalPrice : 0;
            this.totalSalePrice = this.totalSalePrice > 0 ? this.totalSalePrice : 0;
            this.product.price = Math.round(this.totalSalePrice / 24000);
        },
        removeCourse(course) {
            let userId = this.$store.getters['AUTH/userId'];
            this.listCourse = this.listCourse.filter(item => item.id !== course.id);
            this.clickSelectCourse(course);
            this.axios
                .delete(`https://localhost:44366/api/Course/RemoveFromCart?userId=${userId}&courseId=${course.id}`)
                .then((response) => {
                    if(response && response.data) {
                        // console.log(response.data);
                    }
                });
        },
        formatCurrency(value) {
            return new Intl.NumberFormat("vi-VN").format(value);
        }
    },
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.course-section {
    width: 70%;
}

.course-list {
    width: 100%;
    height: 65vh;
    overflow-y: scroll;
    padding-right: 10px;
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.course-item-img img {
    width: 170px;
    height: 120px;
}

.bill-wrapper {
    width: 27%;
}

.bill {
    width: 100%;
    padding: 20px;
    background-color: rgba(116, 185, 255, 0.3);
    border-radius: 20px;
}

.bill>div {
    border-bottom: 1px solid #b9b9b9;
}

.purchase {
    width: 100%;
    height: 35px;
    background-color: #0080ff;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
    overflow: hidden;
}

.purchase:hover {
    background-color: #0060c0;
}

.purchase.disabled {
    background-color: #b9b9b9;
    cursor: context-menu;
}

.paypal-powered-by {
    display: none !important;
}
</style>