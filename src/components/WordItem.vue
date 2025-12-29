<script setup lang="ts">

import { Word } from '@/types/words';
import { computed } from 'vue';

interface Props {
    word: Word;
}

const wordAndMeaning = computed(() => {
    return `${props.word.word} : ${props.word.meaning}`;
})
const props = defineProps<Props>();
</script>
<template>
    <div class="word-item">
        {{ wordAndMeaning }} 
    </div>
</template>
<style scoped></style>