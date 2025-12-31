<script setup lang="ts">
import H1 from '@/components/H1.vue';
import WordForm from '@/components/WordForm.vue';
import WordItem from '@/components/WordItem.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useWordStore } from '@/stores/word.store';

const wordStore = useWordStore();

</script>

<template>
<MainLayout>
    <H1>Home View</H1>
    <WordForm @add-word="wordStore.addWord" />
    <div>
        <WordItem v-for="word in wordStore.words" :key="word.id" :word="word" v-on:delete-word="wordStore.deleteWord" v-on:update-word="wordStore.updateWord"/>
    </div>
</MainLayout></template>
<style scoped>

</style>