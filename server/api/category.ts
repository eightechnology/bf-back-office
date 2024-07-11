export default defineEventHandler(async (event) => {

    const { data } = await $fetch('http://localhost:8000/api/categories/event')

    return data
})