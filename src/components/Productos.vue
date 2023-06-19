<template>
    <template>
        <div class="home">
            <div v-for="character in productos" :key="character.id">
                <img :src="character.image" />
                {{ character.title }}
                <router-link :to="`/character/${character.id}`"> Read more </router-link>
            </div>
        </div>
    </template>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ProductosServices from '../services/ProductosServices'

export default defineComponent({
    name: 'Home',
    setup() {
        const service = new ProductosServices()
        const productos = service.getProductos()

        onMounted(async () => {
            await service.fetchAll()
        })

        return {
            productos
        }
    }
})
</script>
