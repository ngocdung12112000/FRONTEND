<!-- eslint-disable prettier/prettier -->
<template>
    <div class="user-list-container py-3 px-4">
        <h1 class="text-dark">Danh sách người dùng</h1>
        <div class="user-list-control d-flex align-items-center justify-content-between">
            <div class="user-search">
                <div class="search d-flex align-items-center">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search" @change="onSearchUser">
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
                            <th scope="col" style="width: 150px;">SĐT</th>
                            <th scope="col" style="width: 250px;">Email</th>
                            <th scope="col" class="text-center" style="width: 120px;">Số KN</th>
                            <th scope="col" class="text-center" style="width: 120px;">Mục tiêu</th>
                            <th scope="col" class="text-center" style="width: 200px;">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in userListDisplay" :key="user.user_id">
                            <td class="text-center">
                                <input type="checkbox" class="check-item">
                            </td>
                            <th scope="row" class="text-center">{{index+1 + (pageSize*(page-1))}}</th>
                            <td>{{ user.full_name }}</td>
                            <td>{{ user.phone_number }}</td>
                            <td>{{ user.email }}</td>
                            <td class="text-center">{{ user.point }}</td>
                            <td class="text-center">{{ user.target }}</td>
                            <td class="text-center">
                                <button type="button" class="btn btn-primary me-2" @click="() => editClick(user.user_id)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-danger" @click="() => deleteClick(user.user_id)">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-summary d-flex align-items-center justify-content-between">
                <div>
                    Tổng số: <span class="text-dark fw-bold">{{ totalRecord }}</span> bản ghi
                </div>
                <div class="d-flex align-items-center">
                    <div class="page-size d-flex align-items-center me-2">
                        Số bản ghi trên trang:
                        <div class="page-dropdown me-2 ms-2">
                            <select style="width: 70px; height: 35px;" v-model="pageSize"
                            class="form-select " aria-label=".form-select-lg example">
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    <div class="paging d-flex align-items-center">
                        <paginate v-model="page" :page-count="pageCount" :page-range="3" :margin-pages="2"
                            :click-handler="clickCallback" :prev-text="'<'" :next-text="'>'"
                            :container-class="'pagination'" :page-class="'page-item'" />
                    </div>
                </div>
            </div>
        </div>
        <UserDetail 
            v-show="isShowDetail" 
            @cancel-click="isShowDetail = false" 
            v-model:user_id="userSelected.user_id"
            v-model:full_name="userSelected.full_name"
            v-model:user_name="userSelected.user_name"
            v-model:phone_number="userSelected.phone_number"
            v-model:email="userSelected.email"
            v-model:point="userSelected.point"
            v-model:target="userSelected.target"
            v-model:created_date="userSelected.created_date"
            v-model:mode="formMode"
        />
        <ToastMessage />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import UserDetail from './UserDetail.vue';
import ToastMessage from '../Components/ToastMessage.vue';
import Paginate from "vuejs-paginate-next";
import $ from "jquery";
import baseURL from '../../../assets/enum';
export default {
    name: "UserList",
    components: {
        UserDetail,
        Paginate,
        ToastMessage
    },
    beforeMount() {
        this.getUserList();
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
        $('.table-wrapper').height($('.user-list-table').height() - 60);
    },
    data() {
        return {
            page: 1,
            pageSize: 20,
            pageCount: 0,
            isShowDetail: false,
            userList: [],
            userListDisplay: [],
            userSelected: {},
            formMode: 'add',
            totalRecord: 0,
        };
    },
    methods: {
        getUserList() {
            let me = this;
            this.axios
                .get(`${baseURL}api/Users/All`)
                .then((response) => {
                    me.userList = response.data;
                    me.userListDisplay = me.userList.slice(0, me.pageSize);
                    me.pageCount = Math.ceil(me.userList.length / me.pageSize);
                    me.totalRecord = me.userList.length;
                });
        },
        onResize() {
            $('.table-wrapper').height($('.user-list-table').height() - 60);
        },
        addClick() {
            this.isShowDetail = true;
            this.formMode = 'add';
            this.userSelected = {};
        },
        clickCallback(pageNum) {
            console.log(pageNum);
            this.page = pageNum;
            this.userListDisplay = this.userList.slice((pageNum - 1) * this.pageSize, pageNum * this.pageSize);
        },
        onSearchUser(e){
            let me = this;
            if(e.target.value == ''){
                me.userListDisplay = me.userList.slice(0, me.pageSize);
                me.pageCount = Math.ceil(me.userList.length / me.pageSize);
                me.totalRecord = me.userList.length;
            }
            else{
                me.userListDisplay = me.userList.filter(x => x.full_name.toLowerCase().includes(e.target.value.toLowerCase()));
                me.pageCount = Math.ceil(me.userListDisplay.length / me.pageSize);
                me.totalRecord = me.userListDisplay.length;
            }
        },
        editClick(id) {
            this.formMode = 'edit';
            this.isShowDetail = true;
            this.userSelected = this.userList.find((user) => user.user_id === id);
            this.userSelected.created_date = this.formatDate(this.userSelected.created_date);
            console.log(this.userSelected.created_date);
        },
        deleteClick(id) {
            let me = this;
            this.axios
                .delete(`${baseURL}api/Users/Delete?userId=${id}`)
                .then(() => {
                    me.getUserList();
                    // me.$toast.success('Xóa thành công');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        formatDate(date) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [year, month, day].join('-');
        }
    },
    watch: {
        pageSize() {
            this.userListDisplay = this.userList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
            this.pageCount = Math.ceil(this.userList.length / this.pageSize);
        }
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
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

input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

td input[type="checkbox"] {
    margin-top: 10px;
}

</style>