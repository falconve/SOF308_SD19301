<script setup></script>
<template>
  <div class="alert alert-success" role="alert">
    <!-- Để hiển thị giá trị của biến bỏ vào 2 lần dấu
    đóng mở ngoặc {{ tên biến }} 
    -->
    {{ fullName }}
  </div>

  <div class="alert alert-warning" role="alert">
    {{ studentCode }}
  </div>

  <div class="card" style="width: 18rem">
    <img
      src="https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/052024/xe_20240515135813.jpg"
      class="card-img-top"
      alt="vinfast vf 3"
    />
    <div class="card-body">
      <p class="card-text">Hãng xe: {{ myCar.hangXe }}</p>
      <p class="card-text">Kiểu xe: {{ myCar.kieuXe }}</p>
      <p class="card-text">Màu xe: {{ myCar.mauXe }}</p>
      <p class="card-text">Số chỗ ngồi: {{ myCar.soChoNgoi }}</p>
      <p class="card-text">Tên xe: {{ myCar.tenXe }}</p>
    </div>
  </div>
</template>

<style scoped></style>
