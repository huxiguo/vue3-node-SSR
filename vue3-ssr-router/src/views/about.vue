<template>
  <div class="app" style="background-color: #d30c0c">
    <h2>about</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(10)
const addCount = () => {
  count.value += 3
}
</script>
<style scoped></style>
