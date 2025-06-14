<script setup>
    import useCounterStore from '@/stores/counter'
    const counterStore = useCounterStore()
</script>

<template>

<span>
    <button @click="counterStore.decrement">
        -
    </button>
    {{ counterStore.count }}
    <button @click="counterStore.increment">
        +
    </button>
</span>

</template>