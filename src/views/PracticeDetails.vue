<template>
  <div class="practice-details">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <h1>{{ practice.title }}</h1>

      <p>{{ practice.description }}</p>
      <h2>Exercises</h2>
      <ul>
        <li v-for="exercise in practice.exercises" :key="exercise">{{ exercise }}</li>
      </ul>
      <h2>Equipment</h2>
      <p>{{ practice.equipment.join(', ') }}</p>
    </div>
  </div>
</template>

<script>
import { usePracticesStore } from '@/stores/practicesStore'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const store = usePracticesStore()
    const practice = ref(null)
    const isLoading = ref(true)

    watch(
      () => route.params.id,
      async (newId) => {
        isLoading.value = true
        await store.fetchPractices()
        practice.value = store.getPracticeById(Number(newId))
        isLoading.value = false
      },
      { immediate: true }
    )

    return {
      practice,
      isLoading
    }
  }
}
</script>

<style scoped>
.practice-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.practice-details h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.practice-details p {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
}

.practice-details h2 {
  color: #007bff;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  justify-content: center;
}

li {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
