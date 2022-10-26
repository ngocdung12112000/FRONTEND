<!-- eslint-disable prettier/prettier -->
<template>
    <div class="shop container d-flex justify-content-between">
        <div class="col-8" style="padding: 0 30px">
            <div class="shop-title">
                Tăng sức mạnh
            </div>
            <div class="shop-list-items">
                <div class="freeze-streak">
                    <div class="img-freeze"></div>
                    <div class="item-content">
                        <div class="item-title">Streak Freeze</div>
                        <div class="item-description">
                            Streak Freeze cho phép bạn giữ nguyên streak trong một ngày bạn không có hoạt động nào.
                        </div>
                    </div>
                    <div class="item-price">
                        Giá: 10 <div class="gem-img ms-2"></div> 
                    </div>
                </div>
                <div class="betting">
                    <div class="img-flaming-calendar"></div>
                    <div class="item-content">
                        <div class="item-title">Gấp đôi hoặc Mất hết</div>
                        <div class="item-description">
                            Cược 5 Gem và nhận về gấp đôi nếu bạn duy trì được 7 ngày streak.
                        </div>
                    </div>
                    <div class="item-price">
                        Giá: 5 <div class="gem-img ms-2"></div> 
                    </div>
                </div>
            </div>
        </div>
        <Personal :listUser="listUser" :currentUser="currentUser" />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Personal from "../components/Personal.vue";
export default {
    components: {
        Personal,
    },
    data() {
        return {
            toggleTab: true,
            currentPageUser: 3,
            currentLessonUser: 3,
            currentUser: {},
            listUser: []
        };
    },
    beforeMount() {
        this.getList();
        this.getCurrentUser();
    },
    methods: {
        getList() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/Users/All")
                .then((response) => {
                    if(response && response.data) {
                        me.listUser = response.data;
                        // me.currentUser = response.data[0];
                        me.listUser.forEach((user) => {
                            user.avatar = require(`../assets/images/${user.image}`);
                        });
                    }
                    
                });
        },
        getCurrentUser() {
            let me = this;
            this.axios
                .get("https://localhost:44366/api/Users/Id?id=4760d71f-6e2f-5b32-19cb-66948daf6128")
                .then((response) => {
                    if(response && response.data) {
                        me.currentUser = response.data;
                        me.currentTopicUser = me.currentUser.current_topic ? me.currentUser.current_topic.id : 1;
                        me.currentLessonUser = me.currentUser.current_topic ? parseInt(me.currentUser.current_topic.list_lesson[0].name) : 1;
                        console.log(me.currentTopicUser);
                        console.log(me.currentLessonUser);
                    }
                });
        },
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