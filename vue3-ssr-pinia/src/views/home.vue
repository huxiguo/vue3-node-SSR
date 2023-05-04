<template>
  <div class="app" style="background-color: #19c47c">
    <h2>home</h2>
    <div>{{ count }}</div>
    <button @click="addCount">--</button>
    <button @click="deCount">--</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../sotre/home'
const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)
const addCount = () => {
  homeStore.increment()
}
const deCount = () => {
  homeStore.decrement()
}
</script>
<style scoped></style>
