export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const { $locally } = useNuxtApp();
        const myToken = $locally.getItem('token');
        if (!myToken) {
            // return navigateTo('/')
        }
        else {
            return location.assign('/');
        }
    }
})