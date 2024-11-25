<script setup>
import { ref } from 'vue'

let number = ref(0)

function counter(soTruyenVao) {
  number.value += soTruyenVao
}

function giamDi() {
  if (number.value > 0) {
    number.value--
  }
}

function reset() {
  number.value = 0
}

let isStatus = ref(false)

function changeContent() {
  isStatus.value = !isStatus.value // !false => true , !true => false
}
</script>

<template>
  <h2>{{ number }}</h2>
  <!-- v-on:click là tương đương với @click -->
  <button @click="counter" class="btn btn-primary">Tăng lên...</button>
  <button @click="giamDi" class="btn btn-secondary">Giảm đi...</button>
  <button @click="reset" class="btn btn-secondary">Đặt lại...</button>

  <!-- BT
   - Khi ấn vào nút tăng lên sẽ tăng biến number lên 1 đơn vị
   - Khi ấn vào nút giảm đi sẽ giảm biến number đi 1 đơn vị 
   (lưu ý: giảm tới 0 thì dừng lại)
   - Khi ấn vào nút đặt lại thì sẽ đặt biến number về số 0
   -->

  <!-- BT:
    - Tăng lên x đơn vị
-->

  <button @click="changeContent" class="btn btn-success">
    {{ isStatus ? 'Ẩn' : 'Hiện' }}
  </button>
  <p v-if="isStatus">Nội dung.....</p>
</template>

<style scoped></style>
