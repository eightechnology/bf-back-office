import { defineStore } from 'pinia';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = false;

export const useCategoryStore = defineStore('category', {
    state: () => ({
        loading: false,
        categories: []
    }),

    getters: {
        getCategories(state) {
            return state.categories
        }
    },

    actions: {
        async fetchCategories () {
            try {
                this.loading = true;
                let response = await axios.get('/api/categories/');
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.categories = response.data.data;
                }
            } catch (error) {
                this.loading = false;
                
            }
        }
    }
})