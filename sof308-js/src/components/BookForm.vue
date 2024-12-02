<script setup>
import { ref } from 'vue'
let tenSach = ref('')
let tacGia = ref('')
let giaTien = ref('')
let danhMuc = ref('')

// Sử dụng emit
let emit = defineEmits()

function handleSubmit() {
  emit('add-book', {
    tenSach: tenSach.value,
    tacGia: tacGia.value,
    giaTien: giaTien.value,
    danhMuc: danhMuc.value,
  })
  tenSach.value = ''
}
</script>

<template>
  <div class="col-md-12">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Tên sách</label
        >
        <input
          v-model.trim="tenSach"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Nhập tên sách"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Tác giả</label>
        <input
          v-model.trim="tacGia"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Tác giả"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Giá tiền</label
        >
        <input
          v-model.trim="giaTien"
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Nhập giá tiền"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Danh mục</label
        >
        <input
          v-model.trim="danhMuc"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Nhập danh mục"
        />
      </div>
      <button class="btn btn-primary" type="submit">Thêm sách</button>
    </form>
  </div>
</template>

<style scoped></style>
