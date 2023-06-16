<template>
    <section class="bg-gray-200/80 my-4 p-6 rounded-lg">
        <form action="">
            <div class="flex p-4">
                <div class="mx-1">
                    <h1>Ingresa Cantidad</h1>
                    <input type="number" v-model="cantidad" />
                </div>
                <div class="mx-1">
                    <h1>Ingresa Cantidad</h1>
                    <select name="" id="" v-model="porcentaje">
                        <option value="10">Porcentaje</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="95">95</option>
                    </select>
                </div>
            </div>
        </form>

        <Button title="Cacular"></Button>
        <p>Total de la cantidad{{ porcentaje.value }}</p>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Button from './Button.vue'
let cantidad = ref(0)
let porcentaje = ref(0)
const clearTasks = () => {
        porcentaje.value
    }
</script>
