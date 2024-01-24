<template>
  <div class="add-practice">
    <h1>Add New Practice</h1>
    <form @submit.prevent="addPractice">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="newPractice.title" required />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="newPractice.description" required></textarea>
      </div>

      <div class="form-group">
        <label for="exercises">Exercises (comma-separated)</label>
        <input type="text" id="exercises" v-model="exercisesInput" />
      </div>

      <div class="form-group">
        <label for="equipment">Equipment (comma-separated)</label>
        <input type="text" id="equipment" v-model="equipmentInput" />
      </div>

      <div class="form-group">
        <label for="intensity">Intensity</label>
        <select id="intensity" v-model="newPractice.intensity">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit">Add Practice</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { usePracticesStore } from '@/stores/practicesStore.js'

export default {
  setup() {
    const store = usePracticesStore()

    const newPractice = ref({
      id: 0,
      title: '',
      description: '',
      intensity: 'low'
    })
    const exercisesInput = ref('')
    const equipmentInput = ref('')

    const addPractice = () => {
      const exercises = exercisesInput.value.split(',').map((ex) => ex.trim())
      const equipment = equipmentInput.value.split(',').map((eq) => eq.trim())

      const practice = {
        ...newPractice.value,
        exercises,
        equipment
      }

      store.addNewPractice(practice)

      // Reset form
      newPractice.value = { title: '', description: '', intensity: 'low' }
      exercisesInput.value = ''
      equipmentInput.value = ''
    }

    return {
      newPractice,
      exercisesInput,
      equipmentInput,
      addPractice
    }
  }
}
</script>

<style scoped>
.add-practice {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type='text'],
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
