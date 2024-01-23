<template>
  <div>
    <h1>Practice List</h1>
    <ul class="practice-list">
      <li v-for="practice in practices" :key="practice.id">
        <h2>{{ practice.title }}</h2>
        <p>{{ practice.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { usePracticesStore } from '@/stores/practicesStore';

export default {
  name: "RecipeList",
  setup() {
    const store = usePracticesStore();

    // Fetch practices when the component is created
    store.fetchPractices();

    return {
      practices: store.practices
    };
  }
};
</script>>

<style scoped>
/* Add some basic styles here */
.practice-list {
  list-style-type: none;
  padding: 1rem;
  display: flex;
}

.practice-list li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
