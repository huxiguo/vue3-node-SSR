<template>
  <div class="app" style="background-color: #19c47c">
    <h2>home</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(100)
const addCount = () => {
  count.value += 2
}
</script>
<style scoped></style>
