<template>
  <div>
    <h1>Practice List</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
    <h3>Total Practices: {{ totalPractices }}</h3>
    <br>

      <section v-for="(practiceType, intensity) in practices" :key="intensity" class="intensity-section">
        <h2>{{ practiceType.title }}</h2>
        <ul class="practice-list">
          <li v-for="practice in practiceType.list" :key="practice.id" class="practice-item">
            <div class="practice-background-image" :style="{ backgroundImage: backgroundStyle[intensity] }">
              <h3>{{ practice.title }}</h3>
              <p>{{ practice.description }}</p>
              <button @click="editPractice(practice.id)">Details</button>
            </div>
          </li>
        </ul>
      </section>
    </div>

  </div>
</template>


<script>
import {usePracticesStore} from '@/stores/practicesStore';
import PracticeItem from '@/components/PracticeItem.vue';
import highIntensityImage from '@/assets/images/high-intensity-flame.png';
import mediumIntensityImage from '@/assets/images/medium-intensity-flame.png';
import lowIntensityImage from '@/assets/images/low-intensity-flame.png';
import {onMounted, ref} from "vue";

export default {
  name: "PracticeList",
  components: {
    PracticeItem
  },

  setup() {
    const store = usePracticesStore();
    const practices = ref({})
    const isLoading = ref(true);

    onMounted(async () => {
      await store.fetchPractices();
      isLoading.value = false;
      practices.value = store.practices
    });

    return {
      practices,
      isLoading
    };
  },
  data() {
    return {
      backgroundStyle: {
        highIntensityPractice: `url(${highIntensityImage})`,
        mediumIntensityPractice: `url(${mediumIntensityImage})`,
        lowIntensityPractice: `url(${lowIntensityImage})`,
      }
    }
  },
  methods: {
    editPractice(id) {
      // Logic to edit the workout with the given id
    },
    deletePractice(id) {
      // Logic to delete the workout with the given id
    }
  },
  computed: {
    totalPractices() {
      return Object.values(this.practices).reduce((total, practiceType) => {
          return total + practiceType.list.length;
      }, 0);
    }
  }
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
  color: #eeeeee;

  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.practice-background-image:hover {
  opacity: 1; /* Change to the desired opacity value on hover */
}

button {
  margin-top: 1rem;
  margin-right: 0.5rem;
}
</style>
