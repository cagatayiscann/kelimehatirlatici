import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import type { Word } from "@/types/words";

export const useWordStore = defineStore("wordStore", () => {
const words = ref<Word[]>([])

const addWord = (word, meaning) => {
    const newWord: Word = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 15),
        word: word.trim(),
        meaning: meaning.trim(),
        createdAt: new Date(),
    }
    words.value.push(newWord);
    saveWordsToLocalStorage();
    console.log(words.value);
};

const deleteWord = (id: string) => {
    words.value = words.value.filter(word => word.id !== id);
    saveWordsToLocalStorage();
};

const updateWord = (id: string, updatedWord: string, updatedMeaning: string) => {
    const index = words.value.findIndex(word => word.id === id);
    if (index !== -1) {
        words.value[index].word = updatedWord;
        words.value[index].meaning = updatedMeaning;
        saveWordsToLocalStorage();
    }
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

return {
    words,
    addWord,
    deleteWord,
    updateWord,
    loadWordsFromLocalStorage,
};});