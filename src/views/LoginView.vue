<template>
 
 <div class="container">
    <div class="row">
      
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login Form</h2>
        <div class="text-center mb-5 text-dark">Made with bootstrap</div>
        <p class="text-danger bg-secondary" v-if="error">{{ error }}</p>
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5" @submit.prevent="login">
            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div>

            <div class="mb-3">
              <input type="text" name="email" class="form-control" id="Username" aria-describedby="emailHelp"
                v-model="form.email" placeholder="User Name">
                <span class="text-danger" >{{ errors.email }}</span>
            </div>
            <div class="mb-3">
              <input type="password" name="password" class="form-control" id="password" v-model="form.password" placeholder="password">
              <span class="text-danger" >{{ errors.password }}</span>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup> 
 import {ref,reactive} from 'vue'
 import axios from 'axios'
 import { useRouter } from "vue-router";
 const router=useRouter();

let form= reactive(
{
  email:'',
  password:''
});

let error=ref('');
let errors=ref({});

const login =async()=>{
  await  axios.post('http://127.0.0.1:8000/api/login',form).then(res=>{
     console.log(res);
     if(res.data.success){  
  localStorage.setItem('token',res.data.token)
router.push({name:'dashboard'}) 
     }else{
      error.value=res.data.message;
     }
  }).catch(function (error) {
    console.log(error.response.data);
   errors.value=error.response.data.errors;
   console.log(errors);
    });
}

</script>

<style>
@media (min-width: 1024px) {
  .btn-color{
  background-color: #0e1c36;
  color: #fff;
  
}

.profile-image-pic{
  height: 200px;
  width: 200px;
  object-fit: cover;
}



.cardbody-color{
  background-color: #ebf2fa;
}

a{
  text-decoration: none;
}
}
</style>

