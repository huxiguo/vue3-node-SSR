<template>
  <div class="app" style="border: 1px solid beige">
    <h2>Vue app</h2>
    <div>{{ count }}</div>
    <button @click="addCount">++</button>
    <button @click="deCount">--</button>
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
import { storeToRefs } from 'pinia'
import { useHomeStore } from './sotre/home'
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
