<script setup lang="ts">

import { Word } from '@/types/words';
import {  ref, watch } from 'vue';

interface Props {
    word: Word;
  }
  
const props = defineProps<Props>();

const isEditing = ref<boolean>(false);
const localWord = ref<Word>(props.word);

const emit = defineEmits<{
    (e: 'delete-word', id: string): void;
    (e: 'update-word', id: string, word: string, meaning: string): void;
}>();

const handleDelete = () => {
    emit('delete-word', props.word.id);
};

const handleUpdate = () => {
    isEditing.value = !isEditing.value;
};

const handleConfirmUpdate = () => {
    emit('update-word', props.word.id, localWord.value.word.trim(), localWord.value.meaning.trim());
    isEditing.value = false;
};

watch(()=> props.word, (newWord) => {
    localWord.value = newWord;
});

</script>
<template>
    <div class="word-item">
      <div class="word-content" v-if="isEditing">
        <input v-model="localWord.word" placeholder="Kelime girin" />
        <input v-model="localWord.meaning" placeholder="Anlam girin" />
      </div>
      <div class="word-content" v-else>
        <h2 class="word-text">{{ props.word.word }}</h2>
        <p class="word-meaning">{{ props.word.meaning }}</p>
      </div>
        <div class="action-buttons">
          <button v-if="isEditing" class="updateConfirm-btn" @click="handleConfirmUpdate">✔</button>
          <button v-if="!isEditing" class="update-btn" @click="handleUpdate">🖋</button>
          <button v-if="!isEditing" class="delete-btn" @click="handleDelete">x</button>
        </div>
    </div>
</template>
<style scoped>
    .word-item {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--color-border);
}

.word-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.word-content {
  flex: 1;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.word-text {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
}

.word-meaning {
  margin: 0 0 0.75rem 0;
  color: var(--color-text);
  line-height: 1.6;
}

.word-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.action-buttons button {
  background: transparent;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.delete-btn {
  color: #e74c3c;
}
.delete-btn:hover {
  background: rgba(231, 76, 60, 0.1);
}
.update-btn {
  font-size: 20px !important;
  color: #f8f554;
}
.update-btn:hover {
  background: rgba(231, 163, 60, 0.1);
}
</style>