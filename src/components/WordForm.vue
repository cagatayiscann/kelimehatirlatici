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
<style scoped>
    .word-form {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.word-form h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-heading);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--color-background);
  color: var(--color-text);
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background: hsla(160, 100%, 37%, 0.8);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>