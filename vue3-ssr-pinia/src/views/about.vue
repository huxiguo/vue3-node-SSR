<template>
  <div class="app" style="background-color: #d30c0c">
    <h2>about</h2>
    <div>{{ count }}</div>
    <button @click="addCount">++</button>
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
