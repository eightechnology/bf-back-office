export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        console.log('test...')
        const { $locally } = useNuxtApp();
        const myToken = $locally.getItem('token');
        if (myToken) {
            // return navigateTo('/')
        }
        else {
            return navigateTo('/auth/login');
        }
    }
})