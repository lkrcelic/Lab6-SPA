import {defineStore} from 'pinia';
import {MOCK_RECEPIES} from '@/constants/practices'

// Define the store
export const usePracticesStore = defineStore('practices', {
  state: () => ({
    practices: [],
    isLoading: false,
  }),
  // `actions` are functions for updating the state
  actions: {
    fetchPractices() {  // mock practices
      this.practices = MOCK_RECEPIES;
    }
  },
  // `getters` are functions to derive state values
  getters: {
    // You can add getters if needed
  },
});
