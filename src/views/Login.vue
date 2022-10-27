<!-- eslint-disable prettier/prettier -->
<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <img src="../assets/images/img-login.svg" alt="Image" class="img-fluid">
                </div>
                <div class="col-md-6 contents">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="mb-4">
                                <h3>Đăng nhập</h3>
                                <!-- <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                    adipisicing.</p> -->
                            </div>
                            <form @submit.prevent="onSubmitFormLogin" action="#" method="post">
                                <div class="form-group first">
                                    <label v-show="userLogin.user_name ==''" for="username">Tên đăng nhập</label>
                                    <input v-model="userLogin.user_name" type="text" class="form-control" id="username">

                                </div>
                                <div class="form-group last mb-4">
                                    <label v-show="userLogin.password ==''" for="password">Mật khẩu</label>
                                    <input v-model="userLogin.password" type="password" class="form-control" id="password">
                                </div>

                                <div class="d-flex mb-5 align-items-center justify-content-between">
                                    <span class="ml-auto">
                                        <router-link to="/register" class="forgot-pass">
                                            Đăng ký
                                        </router-link>
                                    </span>
                                    <span class="ml-auto"><a href="#" class="forgot-pass">Quên mật khẩu</a></span>
                                </div>

                                <input type="submit" value="Đăng nhập" class="btn btn-block btn-primary">

                                <!-- <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>

                                <div class="social-login">
                                    <a href="#" class="facebook">
                                        <span class="icon-facebook mr-3"></span>
                                    </a>
                                    <a href="#" class="twitter">
                                        <span class="icon-twitter mr-3"></span>
                                    </a>
                                    <a href="#" class="google">
                                        <span class="icon-google mr-3"></span>
                                    </a>
                                </div> -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import { mapActions } from "vuex";
export default {
    data() {
        return {
            userLogin : {
                user_name : '',
                password : ''
            }
        }
    },
    methods: {
        async onSubmitFormLogin(e) {
            e.preventDefault();
            let response = await this.$store.dispatch('AUTH/login', this.userLogin);
            if(response.status == 200){
                if(response.data.role == 'admin'){
                    this.$router.push('/admin');
                }else{
                    this.$router.push('/home');
                }
            }
            else {
                alert('Đăng nhập thất bại');
            }
        },
    }
}
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
p {
    color: #b3b3b3;
    font-weight: 300;
}

a {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
}

a:hover {
    text-decoration: none !important;
}

.content {
    margin-top: 50px;
    padding: 7rem 0;
}


@media (max-width: 991.98px) {
    .content .bg {
        height: 500px;
    }
}

.content .contents,
.content .bg {
    width: 50%;
}

@media (max-width: 1199.98px) {

    .content .contents,
    .content .bg {
        width: 100%;
    }
}

.content .contents .form-group,
.content .bg .form-group {
    overflow: hidden;
    margin-bottom: 0;
    padding: 15px 15px;
    border-bottom: none;
    position: relative;
    background: #edf2f5;
    border-bottom: 1px solid #e6edf1;
}

.content .contents .form-group label,
.content .bg .form-group label {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
}

.content .contents .form-group input,
.content .bg .form-group input {
    background: transparent;
}

.content .contents .form-group.first,
.content .bg .form-group.first {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}

.content .contents .form-group.last,
.content .bg .form-group.last {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
}

.content .contents .form-group label,
.content .bg .form-group label {
    font-size: 12px;
    display: block;
    margin-bottom: 0;
    color: #b3b3b3;
}

.content .contents .form-group.focus,
.content .bg .form-group.focus {
    background: #fff;
}

.content .contents .form-group.field--not-empty label,
.content .bg .form-group.field--not-empty label {
    margin-top: -20px;
}

.content .contents .form-control,
.content .bg .form-control {
    border: none;
    padding: 0;
    font-size: 20px;
    border-radius: 0;
}

.content .contents .form-control:active,
.content .contents .form-control:focus,
.content .bg .form-control:active,
.content .bg .form-control:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.content .bg {
    background-size: cover;
    background-position: center;
}

.content a {
    color: #888;
    text-decoration: underline;
}

.content .btn {
    width: 100%;
    height: 54px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #10ac84;
    border: none;
    font-size: 20px;
}

.content .btn:hover {
    background-color: #1dd1a1;
}

.content .forgot-pass {
    position: relative;
    top: 2px;
    font-size: 14px;
}
</style>