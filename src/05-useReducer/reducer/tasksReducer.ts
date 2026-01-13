interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction = 
| { type: 'ADD_TODO', payload: string }
| { type: 'TOGGLE_TODO', payload: number} //payload: valor o argumento o valor a una accion
| { type: 'DELETE_TODO', payload: number }; // acciones relaciones al area de tasks, no input u otra cosa




export const taskReducer = (state:TaskState, action:TaskAction ):TaskState=>{ //regresara algo del mismo tipo que el state
        //taskreducer es lo que se prepara usar el useReducer
    

    switch(action.type){
        case 'ADD_TODO':{
            const newTodo: Todo ={
                id: Date.now(),
                text: inputValue.trim(),
                completed: false,
            }

            // !No lo deben de hacer
            // state.todos.push(newTodo)

            /**Porque en React/Redux nunca debes modificar 
             * el estado original directamente.
             *  Siempre debes crear y retornar 
             * un nuevo objeto de estado. */


            return {
                ...state, //completed: state.completed, ( lo mismo )
               
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1, 
                pending: state.pending + 1, 
            } 
        }
       

        case 'DELETE_TODO':{
            const currentTodos = state.todos.filter((todo:Todo) => todo.id !== action.payload)//payload es todo lo que se envia
                //todos: (todos:TaskState).filter((todo:Todo) => todo.id !== todo.id),

            return {
                ...state,
                todos: currentTodos, 
                length: currentTodos.length,
                completed: currentTodos.filter((todo:Todo) => todo.completed).length,
                pending: currentTodos.filter((todo:Todo) => !todo.completed).length
                
            }
        }

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) =>{
              if(todo.id === action.payload){
                return {...todo, completed: !todo.completed};
              }
              return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter((todo:Todo) => todo.completed).length,
                pending: updatedTodos.filter((todo:Todo) => !todo.completed).length
              }
            })
        }
        return state;

        default:
        return state
    }    

    
}