<template>
  <div>
    <h1>Practice List</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <h3>Total Practices: {{ totalPractices }}</h3>
      <br />

      <section
        v-for="(practiceType, intensity) in practices"
        :key="intensity"
        class="intensity-section"
      >
        <h2>{{ practiceType.title }}</h2>
        <ul class="practice-list">
          <PracticeItem
            v-for="practice in practiceType.list"
            :key="practice.id"
            :practice="practice"
            :backgroundStyle="backgroundStyle[intensity]"
            @details="openPracticeDetails"
          />
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { usePracticesStore } from '@/stores/practicesStore'
import PracticeItem from '@/components/PracticeItem.vue'
import highIntensityImage from '@/assets/images/high-intensity-flame.png'
import mediumIntensityImage from '@/assets/images/medium-intensity-flame.png'
import lowIntensityImage from '@/assets/images/low-intensity-flame.png'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'PracticeList',
  components: {
    PracticeItem
  },

  setup() {
    const store = usePracticesStore()
    const practices = ref({})
    const isLoading = ref(true)
    const router = useRouter()

    onMounted(async () => {
      await store.fetchPractices()
      isLoading.value = false
      practices.value = store.practices
    })

    return {
      practices,
      isLoading,
      router
    }
  },
  data() {
    return {
      backgroundStyle: {
        highIntensityPractice: `url(${highIntensityImage})`,
        mediumIntensityPractice: `url(${mediumIntensityImage})`,
        lowIntensityPractice: `url(${lowIntensityImage})`
      }
    }
  },
  methods: {
    openPracticeDetails(id) {
      this.router.push({ name: 'PracticeDetails', params: { id } })
    }
  },
  computed: {
    totalPractices() {
      return Object.values(this.practices).reduce((total, practiceType) => {
        return total + practiceType.list.length
      }, 0)
    }
  }
}
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
</style>
