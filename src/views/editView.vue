<template>
  <div class="container"> <!-- navbar -->
    <div class="col-12 p-2 rounded   bg-white my-2">
    <router-link to="/" class="">Home</router-link>
    </div>

    <div class="row  justify-content-center mt-3">
      <div class="col-6">
        <div class="card shadow">
          <div class="card-header">
            <h3 class=" text-primary text-center">Edit Form</h3>
          </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="form-group">
              <label for="email" class=" form-label">Image:</label>
              <input type="file" class="form-control" name="image"   @change="handleImageChange" id="email">
              <p class="text-danger">{{ errors?.image }}</p>
              <img :src="'http://127.0.0.1:8000/storage/'+ editImage" v-if="showImage" alt="" class="w-25">
              <img :src="previewImage"  v-if="previewImage"    class="w-25 my-2">
            </div>
            <div class="form-group">
              <label for="pwd" class=" form-label">Name:</label>
              <input type="text" class="form-control" id="pwd" name="name" v-model="form.name">
              <p class="text-danger">{{ errors?.name }}</p>
            </div>
            <div class="form-group mt-2">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script setup >
import { ref,reactive,onMounted } from 'vue';
import axios from 'axios';
import router from '../router';
import { useRoute } from 'vue-router'

const route = useRoute();
const imageFile = ref(null);
const previewImage = ref(null);
const file=ref('');
const showImage=ref(true);
const editImage=ref('');
const errors=ref();
let form=reactive({
  name:'',
  image:''
});

onMounted(async () => {
  await axios.get(`http://127.0.0.1:8000/api/product/${route.params.id}`).then((response) => {
form.name=response.data.name;
editImage.value=response.data.image;
  });
});

const handleImageChange = (event) => {
   const file = event.target.files[0];
  if (file) {
    imageFile.value = file;
    form.image=file;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    showImage.value=false;
    reader.readAsDataURL(file);
  }
};

function update() {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  axios
    .post(`http://127.0.0.1:8000/api/product/update/${route.params.id}`,form, config)
    .then((response) => {
      alert(response.data.message);
      router.push({name:'dashboard'});
    })
    .catch(function (error) {
   errors.value=error.response.data.errors
    });
}

</script>

<style scoped></style>