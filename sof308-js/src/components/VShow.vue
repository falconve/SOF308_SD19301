<script setup>
import { reactive, ref } from 'vue'

let isStatus = ref(false)
let isVisible = ref(false)

let studentList = reactive([
  {
    studentName: 'Hoàng Quang Thắng',
    studentCode: 'PP00001',
    classCode: 'WD19',
  },
  {
    studentName: 'Trần Nguyễn Khánh Lâm',
    studentCode: 'PP00002',
    classCode: 'WD19',
  },
  {
    studentName: 'Nguyễn Quang Hiếu',
    studentCode: 'PP00003',
    classCode: 'SD19',
  },
  {
    studentName: 'Trần Minh Hằng',
    studentCode: 'PP00004',
    classCode: 'LO19',
  },
])
</script>

<template>
  <h1 v-if="isStatus">Ẩn thân chi thuật</h1>
  <!-- v-show: dùng thuộc tính css để ẩn phần thẻ html -->
  <h1 v-show="isVisible">Ẩn thân chi thuật</h1>
  <div
    class="card mx-3"
    style="width: 18rem"
    v-for="(student, index) in studentList"
  >
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ index + 1 }}</li>
      <li class="list-group-item">{{ student.studentName }}</li>
      <li class="list-group-item">{{ student.studentCode }}</li>
      <li class="list-group-item">{{ student.classCode }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
