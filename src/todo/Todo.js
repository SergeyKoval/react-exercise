import TodoList from "./TodoList";
import todoReducer from "./todoReducer";
import {initialTodoItems} from "../initialData";
import {useImmerReducer} from "use-immer";

function Todo() {
  const [todoItems, dispatch] = useImmerReducer(todoReducer, initialTodoItems);

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
                      onDeleteTodoItem={handleTodoItemDelete}/>
          </div>
          <div className="col">
            <div className="row mb-3">
              <div className="coll">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="title">Title</span>
                  </div>
                  <input type="text" className="form-control" aria-describedby="title"/>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="coll">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                  </div>
                  <textarea className="form-control" defaultValue={""}/>
                </div>
              </div>
            </div>
            <div className="row">
              <button type="button" className="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Todo;