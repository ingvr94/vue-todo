<template>
    <li>
        <button @click="store.commit('SET_TO_COMPLETED',task.id)" :class="['toggle',{'toggle-completed':task.completed}]"><i class="far fa-circle"></i>{{ task.title }}</button>
        <button @click="store.commit('REMOVE_TASK',task.id)"><i class="far fa-trash-alt"></i></button>
    </li>
</template>

<script setup>
    import { useStore } from 'vuex';

    const store=useStore()

    const props=defineProps({
        task:Object
    })
</script>

