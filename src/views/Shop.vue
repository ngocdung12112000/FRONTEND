<!-- eslint-disable prettier/prettier -->
<template>
    <div class="shop container d-flex justify-content-between">
        <div class="col-12" style="padding: 0 30px">
            <div class="shop-title">
                Hình ảnh nhân vật
            </div>
            <div class="shop-list-items">
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    components: {
    },
    data() {
        return {
            toggleTab: true,
            currentPageUser: 3,
            currentLessonUser: 3,
            currentUser: {},
            listUser: [],
            loaded: false,
            paidFor: false,
            product: {
                price: 777.77,
                description: "leg lamp from that one movie",
                img: "../assets/images/book-cartoon.png"
            }
        };
    },
    mounted: function () {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AT1kTrZeE44q5J5CrQQ13ku15MF_b-i26O1GLupVMSlScz6SzE777BLaX1cW-QotXV-ui7OW4EsL3jvf";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },
    methods: {
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
                        console.log(order);
                    },
                    onError: err => {
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        }
    }

}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.shop {
    height: 100vh;
    margin-top: 20px;
}

.shop-title {
    /* height: 60px; */
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    padding: 20px 0px;
}

.freeze-streak {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: 2px solid #ebebeb;
    border-top: 2px solid #ebebeb;
}

.item-content {
    padding: 0 20px;
    width: 530px;
}

.item-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.item-price {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    border: 2px solid #c4c4c4;
    border-radius: 10px;
    font-size: 20px;
    color: #1dd1a1;
    font-weight: bold;
    padding: 8px 10px;
    cursor: pointer;
}

.item-price:hover {
    background-color: #ebebeb;
}

.betting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: 2px solid #ebebeb;
}
</style>