<template>
    <div class="container">
      <div class="task">
        <div class="title">
          <h1>To-Do</h1>
        </div>
    
        <div class="form">
          <input v-model="newTask" @keyup.enter="store.commit('ADD_TASK',newTask); newTask=''" type="text" placeholder="Новая задача..." />
          <button :disabled="!newTask"  @click="store.commit('ADD_TASK',newTask); newTask=''"><i class="fas fa-plus"></i></button>
        </div>
   
        <div class="taskItems">
          <ul>
            <TaskItem v-bind:task="task" v-for="task in store.state.tasks" :key="task.id"/>
          </ul>
        </div>
        
        <div class="clearBtns">
          <button @click="store.commit('CLEAR_COMPLETED')">Удалить выполненные</button>
          <button @click="store.commit('CLEAR_ALL')">Удалить все</button>
        </div>
      </div>
    </div>
  </template>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import TaskItem from './TaskItem.vue';

  const store=useStore()

  const newTask=ref('')
</script>

<style >
  .container {
  max-width: 480px;
  margin: 0 auto;
  padding: 0 15px;
}

input[type="text"] {
  width: 100%;
  height: 50px;
  font: 15px/1.4 "Poppins", sans-serif;
  padding: 15px;
  background: #f3f3f3;
  color: #333;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: border 0.3s linear;
}

input[type="text"]:focus {
  outline: none;
  border: 1px solid #4ec5c1;
}

button {
  cursor: pointer;
  font: 15px/1.4 "Poppins", sans-serif;
  color: #555;
  transition: all 0.3s linear;
}

button:focus {
  outline: none;
}

h1 {
  font-size: 22px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


.task {
  background: #fff;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.1);
}

.title {
  text-align: center;
  margin: 0 0 20px;
}

.form {
  position: relative;
  margin: 0 0 30px;
}

.form button {
  background: none;
  border: none;
  color: #4ec5c1;
  font-size: 18px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.clearBtns {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}

.clearBtns button {
  width: 100%;
  background: #4ec5c1;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0 5px;
}

.clearBtns button:hover {
  background: #333;
}

.pendingTasks {
  padding: 0 6px;
}

.taskItems {
  padding: 0 10px;
}

.taskItems li {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}

.taskItems button {
  background: none;
  border: none;
}

.taskItems button:hover {
  color: #4ec5c1;
}

.taskItems .toggle i {
  margin: 0 10px 0 0;
  font-size: 14px;
}

.taskItems .toggle.toggle-completed {
  text-decoration:line-through;
}
</style>
