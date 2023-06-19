<template>
    <button  class="font-semibold mx-2 cursor-pointer bg-green-400 hover:bg-green-500 hover:shadow-lg text-white px-3 rounded-md transition-all " type="submit" value="title">
        {{ title }}
    </button>
</template>

<script lang="ts" setup>
    import {ref} from "vue";
    defineProps<{
        title?: string
    }>()
</script>