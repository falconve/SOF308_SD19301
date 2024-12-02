<script setup>
import { reactive, ref } from 'vue'
// BT1: Khai báo 2 biến fullName và studentCode
let fullName = 'Tuan Anh'
let studentCode = 'PP00001'

// BT2: Sử dụng component Alerts trong bootstrap để hiện thị giá trị của
// 2 biến fullName và studentCode

// BT3: Khai báo 1 object myCar gồm các key: hangXe, mauXe, kieuXe, tenXe, soChoNgoi
// Hiển thị thông tin của object vào component card của bootstrap

// VD: let studentInfo = {
// key: value
// fullName: 'nguyen van a',
// age: 20
//}
// Hiển thị giá trị của key trong object
//studentInfo.fullName

// ref(): dùng để lưu dữ liệu: số, chuỗi, true/false
// reactive(): dùng để lưu dữ liệu: mảng, object
let myCar = {
  hangXe: 'vinfast',
  mauXe: 'trắng',
  kieuXe: 'sedan',
  tenXe: 'VF3',
  soChoNgoi: '2 chỗ ngồi',
}

import Bai2 from './components/Bai2.vue'
import State from './components/State.vue'
import ClassBinding from './components/ClassBinding.vue'
import Form from './components/Form.vue'
import VShow from './components/VShow.vue'
import VEvent from './components/VEvent.vue'
import FormBinding from './components/FormBinding.vue'
import Props from './components/Props.vue'
import Emits from './components/Emits.vue'
import BookForm from './components/BookForm.vue'
import Book from './components/Book.vue'
import { RouterLink, RouterView } from 'vue-router'

let tinNhan = ref('Xin chào...')

let tinNhanEmit = ref('')

function emitHandle(tinNhan) {
  tinNhanEmit.value = tinNhan
}

// let books = reactive([])

// function handleBook(book) {
//   books.push(book)
//   //console.log(books)
// }
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <!-- <Bai2 />
      <State />
      <ClassBinding /> -->
      <!-- <VShow /> -->
      <!-- <VEvent />
      -->
      <!-- <Form /> -->
      <!-- <FormBinding /> -->
      <!-- <Props :message="tinNhan" /> -->

      <!-- Khi ấn vào nút "Ấn vào đây..." thì ở App.vue 
      hiển thị ra một đoạn thông báo 
      -->
      <!-- <Emits @emitEvent="emitHandle" /> -->

      <!-- <h2>{{ tinNhanEmit }}</h2> -->

      <!-- GỢI Ý:
      Tạo ra 2 components:
      1. Component số 1: BookForm.vue thêm sách (sử dụng v-model)
      2. Component số 2: hiển thị sách (sử dụng v-for)
      3. 2 component này import vào app.vue
      -->
      <!-- Sử dụng Emit để nhận dữ liệu sách từ con -->
      <!-- <BookForm @add-book="handleBook" /> -->
      <!-- Sử dụng prop để hiển thị sách từ cha-->

      <!-- <Book /> -->
    </div>
  </div>
  <div id="app">
    <RouterView />
  </div>
</template>

<style scoped></style>
