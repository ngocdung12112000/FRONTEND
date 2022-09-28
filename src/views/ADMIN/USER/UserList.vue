<template>
    <div class="user-list-container py-3 px-4">
        <h1 class="text-dark">Danh sách người dùng</h1>
        <div class="user-list-control d-flex align-items-center justify-content-between">
            <div class="user-search">
                <div class="search d-flex align-items-center">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search">
                </div>
            </div>
            <button type="button" class="btn btn-primary me-3" @click="addClick">
                <i class="fas fa-plus me-2"></i>
                Thêm mới
            </button>
        </div>
        <div class="user-list-table bg-white mt-3">
            <div class="table-wrapper">
                <table class="table table-hover">
                    <thead style="position: sticky;top: 0">
                        <tr>
                            <th scope="row" class="text-center" style="width: 60px;">
                                <input type="checkbox" id="checkAll">
                            </th>
                            <th scope="col" class="text-center" style="width: 60px;">STT</th>
                            <th scope="col" style="width: 200px;">Tên</th>
                            <th scope="col" class="text-center" style="width: 60px;">Tuổi</th>
                            <th scope="col" style="width: 200px;">SĐT</th>
                            <th scope="col" style="width: 300px;">Email</th>
                            <th scope="col" style="width: 250px;">Ngày tham gia</th>
                            <th scope="col" class="text-center" style="width: 200px;">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in userList" :key="user.id">
                            <td class="text-center">
                                <input type="checkbox" class="check-item">
                            </td>
                            <th scope="row" class="text-center">{{index+1}}</th>
                            <td>{{ user.name }}</td>
                            <td class="text-center">{{ user.age }}</td>
                            <td>{{ user.phone }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.date }}</td>
                            <td class="text-center">
                                <button type="button" class="btn btn-primary me-2" @click="() => editClick(user.id)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" @click="() => deleteClick(user.id)">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-summary d-flex align-items-center justify-content-between">
                <div>
                    Tổng số: <span class="text-dark fw-bold">100</span> bản ghi
                </div>
                <div class="d-flex align-items-center">
                    <div class="page-size d-flex align-items-center me-2">
                        Số bản ghi trên trang:
                        <div class="page-dropdown me-2 ms-2">
                            <select name="" id="">
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                    </div>
                    <div class="paging d-flex align-items-center">
                        <paginate v-model="page" :page-count="5" :page-range="3" :margin-pages="2"
                            :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"
                            :container-class="'pagination'" :page-class="'page-item'" />
                    </div>
                </div>
            </div>
        </div>
        <UserDetail v-show="isShowDetail" @cancel-click="isShowDetail = false" />
        <ToastMessage />
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import ToastMessage from '../Components/ToastMessage.vue';
import Paginate from "vuejs-paginate-next";
import $ from "jquery";
export default {
    name: "UserList",
    components: {
        UserDetail,
        Paginate,
        ToastMessage
    },
    mounted() {
        $('.table-wrapper').height($('.user-list-table').height() - 60);
    },
    data() {
        return {
            page: 1,
            isShowDetail: false,
            userList: [
                {
                    id: 1,
                    name: "Mark",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark@gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 2,
                    name: "Airi Satou",
                    age: 20,
                    phone: "09876543210",
                    email: "Airi@gmail.com",
                    date: "02/01/2022",
                },
                {
                    id: 3,
                    name: "Ashton Cox",
                    age: 10,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },
                {
                    id: 4,
                    name: "Colleen Hurst",
                    age: 18,
                    phone: "0985432135",
                    email: "Mark#gmail.com",
                    date: "01/01/2022",
                },

            ]
        };
    },
    methods: {
        addClick() {
            this.isShowDetail = true;
        },
        clickCallback(pageNum) {
            console.log(pageNum)
        },
        editClick(id) {
            this.isShowDetail = true;
            console.log(id)
        },
        deleteClick(id) {
            console.log(id)
        }
    },
}
</script>

<style scoped>
.user-list-container {
    color: rgb(109, 109, 109);
    overflow: hidden;
}

thead {
    background-color: rgb(224, 224, 224);
}

.user-list-table {
    position: absolute;
    top: 110px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.table-wrapper {
    width: 100%;
    height: 600px;
    overflow: auto;
}

table {
    border-spacing: 0;
    width: 100%;
    min-width: 1100px;
}

.search {
    position: relative;
}

.search i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #2e86de;
}

.search input {
    border: none;
    outline: none;
    padding: 8px 20px 8px 40px;
    border-radius: 25px;
    font-size: 16px;
    color: #000;
    border: 1px solid #ccc;
}

.table-summary {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: #fff;
    height: 60px;
    padding: 0 10px;
}

ul.pagination {
    margin-bottom: 0px !important;
}

</style>