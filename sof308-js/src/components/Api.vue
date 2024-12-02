<script setup>
import { ref } from 'vue'
import axios from 'axios'

// RESTFUL API
// - GET: lấy dữ liệu về
// - POST: tải dữ liệu lên
// - PUT: sửa dữ liệu có sẵn
// - DELETE: xoá dữ liệu

// Biến postData dùng để lưu dữ liệu lấy được từ hàm fetchData()
let postData = ref([])

// Hàm lấy dữ liệu từ API
async function fetchData() {
  try {
    // Gọi tới API
    let response = await axios.get('http://localhost:3000/posts')

    // Lưu dữ liệu lấy được từ biến response lưu vào mảng postData
    postData.value = response.data
  } catch (error) {
    console.log('LỖI API...')
  }
}

fetchData()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in postData">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
