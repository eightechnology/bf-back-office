<template>
    <div class="alert alert-danger alert-dismissible" role="alert">
        {{ errorMessage }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>
<script setup>
const props = defineProps({
    errorMessage: String
})
</script>