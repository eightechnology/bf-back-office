<template>
    <div>
        <h1>Dashboard...</h1>
        <button @click="changePage()">test</button>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["auth"]
})
const router = useRouter();
const changePage = () => {
    console.log("test")
    router.push('/about')
}
</script>