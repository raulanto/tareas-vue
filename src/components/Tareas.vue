<template>
    <section class="flex flex-col my-4  ">
        <h1 class="text-3xl font-black">Lista de tareas</h1>
        <article class="bg-gray-50/100  px-7 py-4 my-3  w-fit">
            <form action="" @submit.prevent="createTask">
                <label for="" class="font-bold text-gray-900 text-xl w-96">Nueva Tarea</label>
                <div class="flex m-1 py-2">
                    <input required class="mx-2 px-2 py-1 text-base transition-all border rounded-md  w-64 hover:shadow-lg" type="text" v-model="newTask" id="task" >
                    <Buttonsubmit title="Crear tarea"></Buttonsubmit>
                </div>
            </form>
            <div class="flex">
                <h2> {{tasks.length}} Tareaas</h2>
                <Buttonsubmit @click="clearTasks" class="bg-red-700 hover:bg-red-500" title="Vaciar lista"></Buttonsubmit>
            </div>
            
        </article>
        <section class="px-3 bg-gray-50/100">
        <ul class="list-decimal >
            <li
                v-for="(task, i) in tasks"
                :key="'task' + i"
                :class="{completed: task.completed}"
                @click="completeTask(task.text)"
                > {{task.text}}
            </li>
            
        </ul>
    </section>
    </section>

  
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Buttonsubmit from './Button.vue';
import defineConfig from '../../cypress.config';
    

    const newTask = ref('');
    const tasks = ref([]);

    const createTask = () => {
    const task = {
        text: newTask.value,
        completed: false,
    };
    tasks.value.push(task);
    newTask.value = '';
    console.log(tasks.value);
    };
    const clearTasks = () => {
        tasks.value = [];
    }
    const completeTask = (taskText: string) => {
        for (let i = 0; i < tasks.value.length; i++) {
            const task = tasks.value[i];
            if (taskText === task.text) {
            task.completed = !task.completed;
            }
        }
    };
</script>
<style scoped>
.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
