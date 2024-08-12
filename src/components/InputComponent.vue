<script setup>
const model = defineModel()
defineProps({
    labelTitle: String,
    idInput: String,
})
</script>
<template>
    <div class="form-group my-3">
        <label :for="idInput">{{ labelTitle }}</label>
        <input v-bind="$attrs" class="form-control focus-ring" :id="idInput" v-model="model" required>
    </div>
</template>
<style scoped>
.form-control:focus {
    border: 1px solid var(--primary-color);
    --bs-focus-ring-color: var(--primary-color);
}
</style>