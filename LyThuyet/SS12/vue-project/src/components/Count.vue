<template>
    <button @click="handleIncCount">
        Đếm: {{ state.count }}
    </button>
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({
    count: 10
})

const handleIncCount = () => {
    // trong Vue, đơn giản chỉ cần thay đổi giá trị cần thay đổi, state sẽ được cập nhật lại và hiển thị ngay trên giao diện
    // trong React bắt buộc phải sử dụng hàm set state
    state.count++;
}
</script>