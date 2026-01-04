<script setup lang="ts">
import H1 from '@/components/H1.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useWordStore } from '@/stores/word.store'
import { onMounted, ref } from 'vue'

const wordStore = useWordStore()

interface Score {
  questions: number
  correct: number
}

const quizWord = ref(null)
const userAnswer = ref('')
const showWord = ref(false)
const score = ref<Score>({ questions: 0, correct: 0 })
const submitDisabled = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  quizWord.value = wordStore.getRandomWord()
  inputRef.value?.focus()
})

const handleCheckAnswer = () => {
  if (!quizWord.value) return
    score.value.questions += 1
  if (
    userAnswer.value.trim().toLowerCase() ===
    quizWord.value.word.toLowerCase()
  ) {
    alert('Correct!')
    score.value.correct += 1
    submitDisabled.value = true
    quizWord.value = wordStore.getRandomWord()
    userAnswer.value = ''
    inputRef.value?.focus()
  } else {
    alert('Try again!')
  }
}
</script>

<template>

  <MainLayout>
      <H1>Quiz</H1>
      <div class="quiz-container">
          <div class="form-group" v-if="quizWord">
            <h2 v-show="showWord">{{ quizWord.word }}</h2>
            <p>{{ quizWord.meaning }}</p>
            <input
            ref="inputRef"
            v-model="userAnswer"
            type="text"
            placeholder="Cevabınızı girin"
            />
            <button @click="handleCheckAnswer" :disabled="submitDisabled">Onayla</button>
              </div>
              <button @click="showWord = !showWord">Göster / Gizle</button>
              <button @click="
          quizWord = wordStore.getRandomWord();
          userAnswer = '';
          showWord = false;
          submitDisabled = false;
              ">Sonraki kelime</button>
      </div>
    <div class="score-board">
      <h2>Score Board</h2>
      <p>Cevaplanan Sorular: {{ score.questions }}</p>
      <p>Doğru Cevaplar: {{ score.correct }}</p>
    </div>
  </MainLayout>
</template>
<style scoped>
.quiz-container {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-background-soft);
}

.form-group {
    margin-bottom: 1rem;
}
.quiz-container input {
    margin-right: 1rem;
    padding: 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
    background: var(--color-background);
    color: var(--color-text);
}


.score-board {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background-soft);
}
</style>