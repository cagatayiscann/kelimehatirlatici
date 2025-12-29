<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';

</script>
<template>
    <AppNavbar />
    <main class="content">
        <slot/>
    </main>
    <AppFooter />
</template>
<style scoped>
.content {
  flex-grow: 1;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .content { max-width: 640px; }
}
@media (min-width: 768px) {
  .content { max-width: 768px; }
}
@media (min-width: 1024px) {
  .content { max-width: 1024px; }
}
@media (min-width: 1280px) {
  .content { max-width: 1280px; }
}
@media (min-width: 1536px) {
  .content { max-width: 1536px; }
}
</style>