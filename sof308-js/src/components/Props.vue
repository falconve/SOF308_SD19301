<script setup>
// Prop dùng để truyền dữ liệu từ cha xuống con
// Để sử dụng prop
let props = defineProps({
  message: String,
  id: Number,
  address: String,
})
</script>

<template>
  <h1>Props</h1>
  <h1>{{ message }}</h1>
  <h2>{{ id }}</h2>
</template>

<style scoped></style>
