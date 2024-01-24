<template>
  <li class="practice-item">
    <div class="practice-background-image" :style="{ backgroundImage: backgroundStyle }">
      <h3>{{ practice.title }}</h3>
      <p>{{ practice.description }}</p>
      <!-- You can emit events for these buttons if needed -->
      <button @click="$emit('details', practice.id)">Details</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'PracticeItem',
  props: {
    practice: Object,
    backgroundStyle: String
  },
  emits: ['details']
}
</script>

<style scoped>
.practice-item {
  width: calc(33.333% - 1rem);
}

.practice-background-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  text-shadow: black;

  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.practice-background-image:hover {
  opacity: 1;
}

button {
  margin-top: 1rem;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-shadow: black;
}

button:hover {
  background-color: rgba(200, 200, 200, 0.5); /* Darker shade for hover state */
}

button:focus {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8); /* Focus indicator */
}
</style>
