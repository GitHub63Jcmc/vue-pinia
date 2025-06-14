import { defineStore } from "pinia";
import { computed, ref } from "vue";

    export default defineStore("counter", () => {
    const _count = ref(0);
    
    const count = computed(() => _count.value);

    function decrement() {
        _count.value--;
    }
    
    function increment() {
        _count.value++;
    }
    return {
        count,
        decrement,
        increment
    };
});
