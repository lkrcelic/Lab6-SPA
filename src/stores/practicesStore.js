import {defineStore} from 'pinia';
import {MOCK_WORKOUTS} from '@/constants/practices'

// Define the store
export const usePracticesStore = defineStore('practices', {
  state: () => ({
    practices: [],
    isLoading: false,
  }),
  actions: {
    async fetchPractices() {
      // Simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 700)); // 700 ms delay
      this.practices = MOCK_WORKOUTS;
    }
  },
});
