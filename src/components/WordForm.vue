<script setup lang="ts">
import { ref } from 'vue';


const word = ref('');
const meaning = ref('');

const emit = defineEmits<{
    (e: 'add-word', word: string, meaning: string): void;
}>();

const handleSubmit = () => {
    emit('add-word', word.value, meaning.value);
};

</script>
<template>
<div class="word-form">
        <form class="form-group" @submit.prevent="handleSubmit">
            <input v-model="word" placeholder="Kelime girin" />
            <input v-model="meaning" placeholder="Anlamını girin" />
            <button type="submit">Ekle</button>
        </form>
    </div>
</template>
<style scoped></style>