import { defineStore } from 'pinia';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = false;

export const useCategoryStore = defineStore('category', {
    state: () => ({
        loading: false,
        categories: [],
        collecteCategories: []
    }),

    getters: {
        getCategories(state) { return state.categories; },
        getCollecteCategories(state) { return state.collecteCategories; },
    },

    actions: {
        async fetchCategories () {
            try {
                this.loading = true;
                let response = await axios.get('/api/categories/event');
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.categories = response.data.data;
                }
            } catch (error) {
                this.loading = false;
                
            }
        },

        async fetchCollecteCategories () {
            try {
                this.loading = true;
                let response = await axios.get('/api/categories/collecte');
                if (response.status == 200) {
                    this.loading = false;
                    console.log(response.data.data)
                    this.collecteCategories = response.data.data;
                }
            } catch (error) {
                this.loading = false;
                
            }
        }
    }
})