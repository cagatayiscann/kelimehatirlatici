<script setup lang="ts">
import H1 from '@/components/H1.vue';
import WordForm from '@/components/WordForm.vue';
import WordItem from '@/components/WordItem.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Word } from '@/types/words';
import { onMounted, ref } from 'vue';

const word = ref('');
const meaning = ref('');

const words = ref<Word[]>([])

const addWord = (word, meaning) => {
    const newWord: Word = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 15),
        word: word.trim(),
        meaning: meaning.trim()
    }
    words.value.push(newWord);
    saveWordsToLocalStorage();
    console.log(words.value);
};

const saveWordsToLocalStorage = () => {
    localStorage.setItem('words', JSON.stringify(words.value));
};

const loadWordsFromLocalStorage = () => {
    try{
        const storedWords = localStorage.getItem('words');
        if (storedWords) {
            words.value = JSON.parse(storedWords);
        }
    } catch (error) {
        console.error('Error loading words from localStorage:', error);
    }
};

if (words.value.length === 0) {
    onMounted(() => {
        loadWordsFromLocalStorage();
    });
}


</script>

<template>
<MainLayout>
    <H1>Home View</H1>
    <WordForm @add-word="addWord" />
    <div>
        <ul>
            <li v-for="word in words" :key="word.id">
                <WordItem :word="word" />
            </li>
        </ul>
    </div>
</MainLayout></template>
<style scoped>

</style>