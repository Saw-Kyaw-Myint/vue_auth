<template>
  <div class="container">
    <!-- navbar -->
    <div class="col-12 p-2 rounded   bg-white my-2">
      <div class="d-flex justify-content-between align-items-center">
        <div class=" d-flex col-5 align-items-center justify-content-between">
          <p class="h3">Name : <span class=" text-primary text-uppercase"> {{ currentUser?.name }}</span></p>
          <div class="">
            <RouterLink to="/create" class="h4 text-secondary">create</RouterLink>
          </div>
        </div>
        <div class="">
          <button class="btn btn-dark " @click="logout">logout</button>
        </div>
      </div>
    </div>
    <!-- table  -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">image</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" :key="index">
          <th scope="row">{{ product?.id }}</th>
          <td>{{ product?.name }}</td>
          <td><img v-bind:src="'http://127.0.0.1:8000/storage/' + product?.image" alt=""></td>
          <td class="d-flex">
            <router-link :to='{name:"edit",params:{id:product?.id}}' class="btn btn-success">Edit</router-link>
            <button class="btn btn-danger" @click="deleteProduct(product?.id)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router";
import axios from 'axios'

var currentUser = ref(null);
const productList = ref([]);

onMounted(async () => {
  const token = localStorage.getItem('token');
  console.log(currentUser);
  await axios.get('http://127.0.0.1:8000/api/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    currentUser.value = response.data;
  });

  getProductList();
});

function
  getProductList() {
  axios.get('http://127.0.0.1:8000/api/product').then((response) => {
    productList.value = response.data;
  });
}
const router = useRouter();

function deleteProduct(id) {
  axios.delete(`http://127.0.0.1:8000/api/product/${id}`).then((response) => {
    confirm("are you sure to delete");
    getProductList();
  });
}
function logout() {
  localStorage.removeItem('token');
  router.push({ name: 'login' });
}
</script >
<style ></style>