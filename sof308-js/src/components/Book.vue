<script setup>
import { reactive } from 'vue'
import BookForm from './BookForm.vue'
// let props = defineProps({
//   books: Object,
// })
let books = reactive([])

function handleBook(book) {
  books.push(book)
  //console.log(books)
}
</script>

<template>
  <BookForm @add-book="handleBook" />
  <div class="col-md-12">
    <div class="card" v-for="book in books">
      <div class="card-body">
        <h5 class="card-title">Tên sách: {{ book.tenSach }}</h5>
        <p class="card-text">Tác giả: {{ book.tacGia }}</p>
        <p class="card-text">Giá tiền: {{ book.giaTien }}</p>
        <p class="card-text">Danh mục: {{ book.danhMuc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
