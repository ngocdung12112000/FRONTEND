<!-- eslint-disable prettier/prettier -->
<template>
    <div class="shop container d-flex justify-content-between">
        <div class="col-12" style="padding: 0 30px">
            <div class="shop-title">
                Hình ảnh nhân vật
            </div>
            <div class="shop-list-items">
                <div class="shop-item" v-for="item in listItems" :key="item.id">
                    <div class="shop-item-image">
                        <img :src="require(`../assets/images/AVAS/${item.image}`)" alt="">
                    </div>
                    <div class="shop-item-content d-flex align-items-center justify-content-center px-3 mt-3">
                        <div class="shop-item-price fs-5 fw-bold" :id="`text${item.id}`" @click="setAvarClick">
                            Mở khóa ở topic {{item.price}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import $ from "jquery";
export default {
    components: {
    },
    beforeMount() {
        this.currentLessonId = this.$store.getters['AUTH/currentLessonId'];
        this.userImg = this.$store.getters['AUTH/userImg'];
    },
    mounted() {
        this.changeItemsTitle();
    },
    updated() {
        this.currentLessonId = this.$store.getters['AUTH/currentLessonId'];
        this.userImg = this.$store.getters['AUTH/userImg'];
    },
    data() {
        return {
            toggleTab: true,
            currentLessonId: 1,
            userImg: '',
            listUser: [],
            listItems: [
                {
                    id:1,
                    name: 'Hình ảnh 1',
                    image: 'ava1.png',
                    price: 2
                },
                {
                    id:2,
                    name: 'Hình ảnh 2',
                    image: 'ava2.png',
                    price: 3
                },
                {
                    id:3,
                    name: 'Hình ảnh 3',
                    image: 'ava3.png',
                    price: 4
                },
                {
                    id:4,
                    name: 'Hình ảnh 4',
                    image: 'ava4.png',
                    price: 5
                },
                {
                    id:5,
                    name: 'Hình ảnh 5',
                    image: 'ava5.png',
                    price: 6
                },
                {
                    id:6,
                    name: 'Hình ảnh 6',
                    image: 'ava6.png',
                    price: 7
                },
                {
                    id:7,
                    name: 'Hình ảnh 7',
                    image: 'ava7.png',
                    price: 8
                },
                {
                    id:8,
                    name: 'Hình ảnh 8',
                    image: 'ava8.png',
                    price: 9
                }
            ]
        };
    },
    methods: {
        changeItemsTitle() {
            let me = this,
                topic = Math.floor(me.currentLessonId / 5) + 1,
                tempItem = [];

            tempItem = me.listItems.filter(item => item.id < topic);
            tempItem.forEach(item => {
                if(me.userImg == item.image) {
                    $(`#text${item.id}`).text(`Đã đặt làm avatar`);
                    $(`#text${item.id}`).css("color", "#1dd1a1");
                }
                else {
                    $(`#text${item.id}`).css("color", "#54a0ff");
                    $(`#text${item.id}`).text(`Đặt làm avatar`);
                }
            });
        },
        setAvarClick(e) {
            let me = this;
            if(e.currentTarget.innerText == 'Đặt làm avatar') {
                let img = me.listItems.filter(item => item.id == e.currentTarget.id.replace('text', ''))[0].image;
                this.$store.dispatch('AUTH/setavatar', img);
                this.changeItemsTitle();
                window.location.reload();
            }
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

.shop-list-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 70px;
}

.shop-item {
    position: relative;
    width: 90%;
    border-radius: 20px;
    box-shadow: 0px 0px 15px rgb(84 84 84 / 20%);
    overflow: hidden;
    cursor: pointer;
    padding: 0 0 20px 0;
}

.shop-item-image {
    text-align: center;
}

.shop-item-price {
    color: #b3b3b3;
}

@media screen and (max-width: 1200px) {
    .shop-list-items {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 900px) {
    .shop-list-items {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 768px) {
    .shop-list-items {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>