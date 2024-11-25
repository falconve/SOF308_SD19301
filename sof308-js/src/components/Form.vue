<!-- 
 1. Chưa đăng nhập / đăng xuất 
 2. Đang đăng nhập (chờ 2s)
 - Nếu tài khoản và mật khẩu đúng => hiển thị thông báo
 chào mừng
 - Nếu tài khoản và mật khẩu sai => alert('Thông tin tài khoản
  và mật khẩu chưa đúng') => chuyển hướng về trạng 
  thái chưa đăng nhập 
  Có 3 trạng thái đăng nhập
  - LoggedOut => trạng thái đăng xuất hoặc chưa đăng nhập
  - LoggingIn => đang đăng nhập
  - LoggedIn => đăng nhập thành công
-->
<script setup>
import { ref } from 'vue'
import Tables from './Tables.vue'

// Khai báo biến status để lưu trạng thái đăng nhập
// Trạng thái mặc định là loggedOut
let status = ref('loggedOut')
// Khai báo biến user để lưu trạng thái tài khoản
let user = ref('')
// Khai báo biến password để lưu trạng thái tài khoản
let password = ref('')

// Hàm đăng nhập
// Khi người dùng bấm nút đăng nhập thì gọi hàm login
function login() {
  // Đổi trạng thái đăng nhập từ loggedOut sang loggingIn
  // Sử dụng phương thức .value để đổi trạng thái của biến status
  // (bời vì đang ref để quản lý state)
  status.value = 'loggingIn'

  // sử dụng hàm setTimeOut để chờ 2s
  setTimeout(() => {
    // Check trống tài khoản và mật khẩu
    // BT: kiểm tra nếu tk là admin và mật khẩu là admin thì mới cho đăng nhập
    if (user.value && password.value) {
      // Đổi trạng thái sau khi đăng nhập thành công
      status.value = 'loggedIn'
    } else {
      // Đổi trạng thái nếu người dùng không nhập gì hoặc nhập sai
      // tài khoản và mật khẩu
      status.value = 'loggedOut'
      alert('Sợ thì đi về.....')
    }
  }, 2000)
}

// BT: viết nút đăng xuất
</script>

<template>
  <!-- Form đăng nhập -->
  <div class="card mt-4" v-if="status === 'loggedOut'">
    <div class="card-body">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Tài khoản</label
        >
        <input v-model="user" type="text" class="form-control" id="user" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Tài khoản</label
        >
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
        />
      </div>
      <!-- Muốn biết người dùng click chuột thì phải có 
      @click 
      -->
      <button class="btn btn-primary" @click="login">Đăng nhập</button>
    </div>
  </div>
  <!-- Thông báo trạng thái đăng nhập -->
  <div
    class="alert alert-primary mt-3"
    role="alert"
    v-else-if="status === 'loggingIn'"
  >
    Đang đăng nhập...
  </div>
  <div class="alert alert-success mt-3" role="alert" v-else>
    Chào mừng bạn {{ user }}
  </div>
  <div class="products-table">
    <Tables :status="status" />
  </div>
</template>

<style scoped></style>
