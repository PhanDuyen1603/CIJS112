<template>
    Tell me say: {{ props.text }}
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    text: String
});
</script>