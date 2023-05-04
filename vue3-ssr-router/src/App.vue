<template>
  <div class="app" style="border: 1px solid beige">
    <h2>Vue app</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
    <div>
      <router-link to="/home">
        <button>home</button>
      </router-link>
      <router-link to="/about">
        <button>about</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const addCount = () => {
  count.value += 1
}
</script>
<style scoped></style>
