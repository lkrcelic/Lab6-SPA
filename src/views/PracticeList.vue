<template>
  <div>
    <h1>Practice List</h1>
    <br>

    <!-- Low-Intensity Practices Section -->
    <section class="intensity-section">
      <h2>Low Intensity Practices</h2>
      <ul class="practice-list">
        <li v-for="practice in practices['low-intensity']" :key="practice.id" class="practice-item">
          <img :src="practice.imageUrl" alt="Picture of practice" class="practice-image">
          <h3>{{ practice.title }}</h3>
          <p>{{ practice.description }}</p>
          <!-- Details like exercises and equipment can be shown here -->
          <button @click="editPractice(practice.id)">Edit</button>
          <button @click="deletePractice(practice.id)">Delete</button>
        </li>
      </ul>
    </section>
    <!-- Medium-Intensity Practices Section -->
    <section class="intensity-section">
      <h2>Medium Intensity Practices</h2>
      <ul class="practice-list">
        <li v-for="practice in practices['medium-intensity']" :key="practice.id" class="practice-item">
          <img :src="practice.imageUrl" alt="Picture of practice" class="practice-image">
          <h3>{{ practice.title }}</h3>
          <p>{{ practice.description }}</p>
          <!-- Details like exercises and equipment can be shown here -->
          <button @click="editPractice(practice.id)">Edit</button>
          <button @click="deletePractice(practice.id)">Delete</button>
        </li>
      </ul>
    </section>

    <!-- High-Intensity Practices Section -->
    <section class="intensity-section">
      <h2>High Intensity Practices</h2>
      <ul class="practice-list">
        <li v-for="practice in practices['high-intensity']" :key="practice.id" class="practice-item">
          <div class="practice-background-image" :style="{ backgroundImage: backgroundStyle[practice.intensity] }">
            <h3>{{ practice.title }}</h3>
            <p>{{ practice.description }}</p>
            <!-- Details like exercises and equipment can be shown here -->
            <button @click="editPractice(practice.id)">Edit</button>
            <button @click="deletePractice(practice.id)">Delete</button>
          </div>
        </li>
      </ul>
    </section>

  </div>
</template>


<script>
import {usePracticesStore} from '@/stores/practicesStore';
import highIntensityImage from '@/assets/images/high-intensity-flame.png';
import mediumIntensityImage from '@/assets/images/medium-intensity-flame.png';
import lowIntensityImage from '@/assets/images/low-intensity-flame.png';



export default {
  name: "PracticeList",
  data() {
    return {
      backgroundStyle: {
        highIntensity: `url(${highIntensityImage})`,
        mediumIntensity: `url(${mediumIntensityImage})`,
        lowIntensity: `url(${lowIntensityImage})`,
      }
    }
  }
  setup() {
    const store = usePracticesStore();

    // Fetch practices when the component is created
    store.fetchPractices();

    return {
      practices: store.practices
    };
  },
  methods: {
    editPractice(id) {
      // Logic to edit the workout with the given id
    },
    deletePractice(id) {
      // Logic to delete the workout with the given id
    }
  },
};
</script>

<style scoped>
.intensity-section {
  margin-bottom: 4rem;
}

.practice-list {
  justify-content: center;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.practice-item {
  width: calc(33.333% - 1rem);
}

.practice-background-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;

  color: #cccccc;
}

button {
  margin-top: 1rem;
  margin-right: 0.5rem;
}
</style>
