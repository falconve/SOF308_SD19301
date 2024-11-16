<script setup>
import { reactive, ref } from 'vue'
// Quản lí trạng thái của biến
// ref: chỉ nhận những kiểu dữ liệu: string (chuỗi), number(số), boolean (true/false)
// reactive: chỉ nhận dữ liệu là object

let numberOne = ref(1)
let myClass = ref('sd19301')

let myCar = reactive({
  carBrand: 'toyota',
  carColor: 'black',
  carImage: '/toyota-xanh.jpg',
})

function changeImageCar() {
  // Cập nhật lại giá trị cho key carImage của object myCar sử dụng reactive
  myCar.carImage = '/toyota.jpg'
}

// Khai báo biến count với giá trị ban đầu là 0
let count = ref(0)

// Khai báo hàm tăng số sau khi click chuột
function counter() {
  // Đối với state của biến mà quản lý qua ref
  // Muốn gán giá trị cho biến thì dùng phương thức .value
  count.value++
}
</script>

<template>
  <div class="col-md-">
    <p>{{ count }}</p>
    <button class="btn btn-primary" @click="counter">Tăng số</button>
  </div>

  <div class="col-md-6">
    <h2>Binding 1 chiều với thẻ img</h2>
    <div class="card">
      <!-- VD: BINDING 1 CHIỀU -->
      <!--  v-bind:src = :src dùng đề chèn ảnh  -->
      <img :src="myCar.carImage" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ myCar.carBrand }}</h5>
        <p class="card-text">
          {{ myCar.carColor }}
        </p>
        <button class="btn btn-primary" @click="changeImageCar">
          Đổi hình ảnh xe
        </button>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <h2>Binding 2 chiều với thẻ input</h2>
    <div class="card">
      <!-- VD: BINDING 2 CHIỀU -->

      <div class="alert alert-success mt-2" role="alert">
        {{ myClass }}
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Nhập tên lớp</label
          >
          <!--  v-model: cập nhật dữ liệu 2 chiều  -->
          <input
            v-model="myClass"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
