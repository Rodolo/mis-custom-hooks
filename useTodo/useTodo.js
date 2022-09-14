import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}


const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
  

    const onNewTodo = (todo) => {
        console.log("onNewTodo", {todo});
    
        const addTodoAction = {
          type: 'add',
          payload: todo,
        }
    
        dispatch(addTodoAction);
      };
    
      const onDeleteTodo = (id) => {
        console.log("onDeleteTodo", id);
    
        const deleteTodoAction = {
          type: 'delete',
          payload: id,
        }
      
        dispatch(deleteTodoAction);
      }
    
      const onToggleTodo = (id) => {
        console.log("onToggleTodo", id);
    
      const toggleTodoAction = {
          type: 'toggle',
          payload: id
        }
    
        dispatch(toggleTodoAction);
    
    
      }
      

      return {todos, onNewTodo, onDeleteTodo, onToggleTodo};
}

export default useTodo