<!-- eslint-disable prettier/prettier -->
<template>
    <div class="table-info  d-flex justify-content-between flex-wrap">
        <div class="top-course">
            <div class="d-flex justify-content-between py-3 ms-3">
                <h4 class=""><span class="fw-bold">{{courseQuantity}}</span> khóa học được mua nhiều nhất</h4>
                <select style="width: 70px; height: 35px;" v-model="courseQuantity"
                class="form-select mb-3 me-3" aria-label=".form-select-lg example">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div class="table-wrapper">
                <table class="table table-hover">
                    <thead style="position: sticky;top: 0">
                        <tr>
                            <th scope="col" class="text-center" style="width: 60px;">STT</th>
                            <th scope="col" style="width: 200px;">Tên khóa học</th>
                            <th scope="col" style="width: 200px;">Mã khóa học</th>
                            <th scope="col" class="text-center" style="width: 150px;">Số lượng mua</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in userList" :key="user.id">
                            <th scope="row" class="text-center">{{index+1}}</th>
                            <td>{{ user.name }}</td>
                            <td>{{ user.phone }}</td>
                            <td class="text-center">{{ user.age }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- <div class="new-user">
            <div class="d-flex justify-content-between py-3 ms-3">
                <h4 class="">Danh sách <span class="fw-bold">{{newUserQuantity}}</span> người dùng mới nhất</h4>
                <select style="width: 70px; height: 35px;" v-model="newUserQuantity"
                class="form-select mb-3 me-3" aria-label=".form-select-lg example">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div class="table-wrapper">
                <table class="table table-hover">
                    <thead style="position: sticky;top: 0">
                        <tr>
                            <th scope="col" class="text-center" style="width: 60px;">STT</th>
                            <th scope="col" style="width: 150px;">Tên</th>
                            <th scope="col" class="text-center" style="width: 60px;">Tuổi</th>
                            <th scope="col" style="width: 150px;">SĐT</th>
                            <th scope="col" style="width: 150px;">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in userList" :key="user.id">
                            <th scope="row" class="text-center">{{index+1}}</th>
                            <td>{{ user.name }}</td>
                            <td class="text-center">{{ user.age }}</td>
                            <td>{{ user.phone }}</td>
                            <td>{{ user.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> -->
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>;
export default {
    components: {
    },
    data() {
        return {
            courseQuantity: 10,
            newUserQuantity: 10,
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
        clickCallback(pageNum) {
            console.log(pageNum)
        }
    },
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.table-info {
    width: 100%;
    position: relative;
}    
.top-course, .new-user {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
}    
.table-wrapper {
    width: 100%;
    overflow: auto;
}

.table-summary {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 60px;
    padding: 0 10px;
}

ul.pagination {
    margin-bottom: 0px !important;
}

.page-link {
    border: none !important;
}

@media screen and (max-width: 1100px) {
    .top-course, .new-user {
        width: 100%;
        margin-bottom: 30px;
    }    
}
</style>