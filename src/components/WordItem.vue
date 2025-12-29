<script setup lang="ts">

import { Word } from '@/types/words';
import { computed } from 'vue';

interface Props {
    word: Word;
}

const emit = defineEmits<{
    (e: 'delete-word', id: string): void;
}>();

const handleDelete = () => {
    emit('delete-word', props.word.id);
};

const wordAndMeaning = computed(() => {
    return `${props.word.word} : ${props.word.meaning}`;
})
const props = defineProps<Props>();

</script>
<template>
    <div class="word-item">
        {{ wordAndMeaning }}
        <button class="delete-btn" @click="handleDelete">x</button>
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

.delete-btn {
  background: transparent;
  border: none;
  color: #e74c3c;
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
.delete-btn:hover {
  background: rgba(231, 76, 60, 0.1);
}
</style>