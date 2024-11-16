<script setup>
import { ref } from 'vue'

let changeColor = ref(true)

// Khai báo ra hàm đổi màu
function color() {
  changeColor.value = !changeColor.value
}

// Khai báo 1 biến score giá trị là số
let score = ref(4)
</script>

<template>
  <div class="col-md-12">
    <!-- Sử dụng :class để chuyển class dựa trên điều kiện -->
    <h1 :class="{ changeColor }">Danger</h1>

    <button class="btn btn-primary" @click="color">Đổi màu</button>
  </div>

  <div class="col-md-12">
    <!-- Sử dụng câu lệnh điều kiện v-if & v-else trong vuejs -->
    <!-- BT: cho người dùng nhập điểm sử dụng v-model:
     - Nếu điểm lờn >= 5 thì hiện thị qua môn sử dụng alert success trong bootstrap
     - Nếu điểm < 5 thì hiển thị trượt môn alert danger 
     -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Nhập điểm</label>
      <!-- sử dụng v-model để binding dữ liệu 2 chiều dùng
        để kiểm tra điều kiện hiển thị alert -->
      <input
        v-model="score"
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập điểm"
      />
    </div>
    <div class="alert alert-success" v-if="score >= 5">Qua môn</div>
    <div class="alert alert-danger" v-else>Chưa tài đâu</div>
  </div>

  <div class="col-md-12">
    <!-- Sử dụng câu lệnh điều kiện v-if & v-else trong vuejs -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Nhập điểm</label>
      <!-- sử dụng v-model để binding dữ liệu 2 chiều dùng
        để kiểm tra điều kiện hiển thị alert -->
      <input
        v-model="score"
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập điểm"
      />
    </div>
    <!-- BT: cho người dùng nhập điểm sử dụng v-model:
     - Nếu điểm >=9 => xuất sắc => alert success
     - Nếu điểm < 9 và >= 8 => giỏi => alert primary
     - Nếu điểm < 8 và >= 7 => khá => alert secondary
     - Nếu điểm < 7 và >= 6 => trung bình => alert info
     - Còn lại là yếu => alert danger
     -->
    <div class="alert alert-success" v-if="score >= 9">Xuất sắc</div>
    <div class="alert alert-primary" v-else-if="score < 9 && score >= 8">
      Giỏi
    </div>
    <div class="alert alert-secondary" v-else-if="score < 8 && score >= 7">
      Khá
    </div>
    <div class="alert alert-info" v-else-if="score < 7 && score >= 6">
      Trung bình
    </div>
    <div class="alert alert-danger" v-else>Yếu</div>
  </div>
</template>

<style scoped>
.changeColor {
  color: red;
}
</style>
