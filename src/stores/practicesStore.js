import { defineStore } from 'pinia'
import { MOCK_WORKOUTS } from '@/constants/practices'

// Define the store
export const usePracticesStore = defineStore('practices', {
  state: () => ({
    practices: {},
    isLoading: false
  }),
  actions: {
    async fetchPractices() {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 700)) // 700 ms delay
      this.practices = MOCK_WORKOUTS
    },
    addNewPractice(newPractice) {
      console.log(newPractice)
      newPractice.id =
        Object.values(this.practices)
          .map((practiceType) => practiceType.list)
          .flat().length + 1

      switch (newPractice.intensity) {
        case 'low':
          MOCK_WORKOUTS['lowIntensityPractice'].list.push(newPractice)
          break
        case 'medium':
          MOCK_WORKOUTS['mediumIntensityPractice'].list.push(newPractice)
          break
        case 'high':
          MOCK_WORKOUTS['highIntensityPractice'].list.push(newPractice)
      }
    },
    getPracticeById(id) {
      return Object.values(this.practices)
        .map((practiceType) => practiceType.list)
        .flat()
        .find((practice) => practice.id === id)
    }
  }
})
