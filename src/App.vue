<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="container-fluid">
  
  <nav class="navbar navbar-expand-lg navbar-light  bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page" >Register</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link" >login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/dashboard" class="nav-link" >dashboard</RouterLink>
        </li>
      </ul>

    </div>
  </div>
</nav>
</div> 

<RouterView></RouterView>

</template>

<style scoped>

</style>
