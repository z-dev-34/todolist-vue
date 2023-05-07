<template>
  <div>
    <h1>{{ numberOfDoneTodos }}</h1>
  <ul v-for="todo in todos" :key="todo.id">
    <li>{{ todo.title }}</li>
  </ul>
</div>
</template>
<script setup lang="ts">
import {computed} from 'vue';
import {useStore} from 'vuex';
const store = useStore()
const todos = computed(()=>store.getters.allTodos)
const numberOfDoneTodos = computed(()=>store.getters.numberOfDoneTodos)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
