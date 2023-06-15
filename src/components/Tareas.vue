<template>
    <section class="flex flex-col my-4 w-fit w-screen">
        <h1 class="text-3xl font-black">Lista de tareas</h1>
        <article class="bg-gray-50/100 w-96 px-7 py-4 my-3 w-96 w-fit">
            <form action="" @submit.prevent="createTask">
                <label for="" class="font-bold text-gray-900 text-xl w-96">Nueva Tarea</label>
                <div class="flex m-1 py-2">
                    <input required class="mx-2 px-2 py-1 text-base transition-all border rounded-md  w-64 hover:shadow-lg" type="text" v-model="newTask" id="task">
                    <input  class="mx-2 cursor-pointer bg-green-400 hover:bg-green-500 hover:shadow-lg text-white px-3 rounded-md transition-all " type="submit" value="Crear tarea">
                </div>
            </form>
            <h2> {{tasks.length}} Tareaas</h2>
        </article>
        <section>
        <ul class="list-outside ">
            <li
                v-if="complet"
                class="task"
                v-for="(task, i) in tasks"
                :key="'task' + i"
                :class="{completed: task.completed}"
                @click="completeTask(task.text)"
                ><input type="checkbox" v-model="complet"> {{task.text}}
            </li>
        </ul>
    </section>
    </section>

  
</template>

<script  >
    export default {
    name: "TodoList",
    data: () => ({
        newTask: "",
        tasks: [],
        complet:false
    }),
    methods: {
        createTask() {
        let task = {
            text: this.newTask,
            completed: true
        };
        this.tasks.push(task);
        this.newTask = "";
        console.log(this.tasks);
        },
        completeTask(taskText) {
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (taskText === task.text) {
            task.completed = !task.completed;
            }
        }
        }
    }
    };
</script>

