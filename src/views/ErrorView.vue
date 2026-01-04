<script setup lang="ts"></script>
<template>
  <div class="error-view">
    <h1>404 - Sayfa Bulunamadı</h1>
    <p>Üzgünüz, aradığınız sayfa mevcut değil.</p>
    <router-link to="/">Ana Sayfaya Dön</router-link>
  </div>
</template>
<style scoped>
.error-view {
  text-align: center;
  margin-top: 50px;
}
</style>