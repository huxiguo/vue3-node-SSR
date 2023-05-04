import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useHomeStore = defineStore('home', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }
  return {
    count,
    increment,
    decrement
  }
})
