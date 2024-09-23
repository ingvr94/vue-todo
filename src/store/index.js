import {createStore} from 'vuex'

export default createStore({
    state:{
        tasks:
        localStorage.getItem('taskItems')
        ? JSON.parse(localStorage.getItem('taskItems') || '""')
        : []
    },
    
    getters: {
        getTask:(state)=>state.tasks
    },
    mutations:{
        ADD_TASK(state,new_task) {
            state.tasks.push({
              id: state.tasks.length ? state.tasks.length : 0,
              title:new_task,
              completed:false
            })
            
            localStorage.setItem('taskItems',JSON.stringify(state.tasks))
        },
        CLEAR_ALL(state) {
          state.tasks=[]
          localStorage.setItem('taskItems',[])
        },
        CLEAR_COMPLETED(state) {
         state.tasks=state.tasks.filter(task=>!task.completed)
         localStorage.setItem('taskItems',JSON.stringify(state.tasks))
        },
        REMOVE_TASK(state,index) {
          state.tasks.splice(index,1)
          localStorage.setItem('taskItems',JSON.stringify(state.tasks))
        },
        SET_TO_COMPLETED(state,index){
          state.tasks[index].completed=!state.tasks[index].completed
        }

    }
})