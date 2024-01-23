<template>
  <li class="practice-item">
    <div class="practice-background-image" :style="{ backgroundImage: backgroundStyle }">
      <h3>{{ practice.title }}</h3>
      <p>{{ practice.description }}</p>
      <!-- You can emit events for these buttons if needed -->
      <button @click="$emit('details', practice.id)">Details</button>
      <button @click="$emit('edit', practice.id)">Edit</button>
      <button @click="$emit('delete', practice.id)">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "PracticeItem",
  props: {
    practice: Object,
    backgroundStyle: String,
  },
  emits: ['details', 'edit', 'delete']
};
</script>

<style scoped>
/* Styles as in your original component */
</style>
