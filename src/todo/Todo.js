import TodoList from "./TodoList";
import todoReducer from "./todoReducer";
import {emptyTodoItem, initialTodoItems} from "../initialData";
import {useImmer, useImmerReducer} from "use-immer";
import TodoEditForm from "./TodoEditForm";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [todoItems, dispatch] = useImmerReducer(todoReducer, initialTodoItems);
  const [todoItem, updateTodoItem] = useImmer({...emptyTodoItem});

  function handleTodoItemChange(todoItem) {
    dispatch({
      type: 'changed',
      todoItem: todoItem
    });
  }

  function handleTodoItemDelete(tidoItemId) {
    dispatch({
      type: 'deleted',
      tidoItemId
    });
  }

  function handleTodoItemEdit(todoItem) {
    updateTodoItem(todoItem);
  }

  function handleTodoItemAdd(todoItem) {
    dispatch({
      type: 'added',
      todoItem: {
        ...todoItem,
        id: uuidv4()
      }
    });
    updateTodoItem(emptyTodoItem);
  }

  return (
      <div className="container">
        <div className="row pb-3">
          <div className="col text-center">
            <h1>Todo list</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TodoList todoItems={todoItems}
                      onChangeTodoItem={handleTodoItemChange}
                      onDeleteTodoItem={handleTodoItemDelete}
                      onEditTodoItem={handleTodoItemEdit}/>
          </div>
          <div className="col">
            <TodoEditForm todoItem={todoItem}
                          onAddTodoItem={handleTodoItemAdd}
                          updateTodoItem={updateTodoItem}
                          onChangeTodoItem={handleTodoItemChange}/>
          </div>
        </div>
      </div>
  );
}

export default Todo;