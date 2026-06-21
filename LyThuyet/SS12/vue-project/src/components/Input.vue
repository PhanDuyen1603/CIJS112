<template>
    <input v-model="inputValue" />
    <p>Giá trị input: {{ inputValue }}</p>
</template>
<script setup>
import { ref } from 'vue';

const inputValue = ref('MindX School');

const handleInputChange = (event) => {
    inputValue.value = event.target.value;
}
</script>