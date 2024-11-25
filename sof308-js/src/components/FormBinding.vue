<script setup>
import { ref } from 'vue'

let fullName = ref('')
let email = ref('')
let age = ref()
let status = ref(false)

// Hàm này có tác dụng lấy thông tin người dùng nhập
// vào input và hiển thị ở console.log
// <!-- BT:
//    - Sửa lại giao diện theo boostrap
//    - Validate trống
//    - Sau khi nhập đầy đủ thông tin: Họ tên, email, tuổi
//    hiển thị lên bảng (có sử dụng bootstrap)
//    -->
function hamLayThongTin() {
  // Sử dụng backtick (ấn dấu huyền phía dưới phím esc)
  console.log(`Họ và tên: ${fullName.value}`)
  console.log(`Email: ${email.value}`)
  console.log(age.value)
  if (fullName.value && email.value && age.value) {
    status.value = true
  } else {
    alert('Bạn chưa nhập thông tin....')
  }
}

function hamSpace() {
  alert('bạn đã ấn phím Space....')
}
</script>

<template>
  <h1>Form thu thập thông tin</h1>
  <!-- submit.prevent dùng để chặn việc submit mặc định của HTML -->
  <form @submit.prevent="hamLayThongTin">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Họ tên</label>
      <input
        type="text"
        v-model.trim="fullName"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input
        type="email"
        v-model.trim="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Tuổi</label>
      <input
        type="number"
        v-model.trim="age"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>

    <button class="btn btn-primary">Thêm</button>
  </form>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Họ tên</th>
        <th scope="col">Email</th>
        <th scope="col">Tuổi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-show="status">
        <th scope="row">1</th>
        <td>{{ fullName }}</td>
        <td>{{ email }}</td>
        <td>{{ age }}</td>
      </tr>
    </tbody>
  </table>
  <!-- v-on:keyup.tên_phím dùng để bắt sự kiện người dùng ấn nút -->
  <button v-on:keyup.space="hamSpace">ấn tab để gọi hàm alert</button>
</template>

<style scoped></style>
