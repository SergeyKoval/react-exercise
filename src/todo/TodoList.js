import TodoItem from "./TodoItem";

function TodoList({todoItems, onChangeTodoItem, onDeleteTodoItem}) {
  return (
      <>
        {todoItems.map(todoItem => <TodoItem key={todoItem.id}
                                             todoItem={todoItem}
                                             onChangeTodoItem={onChangeTodoItem}
                                             onDeleteTodoItem={onDeleteTodoItem}/> )}
      </>
  );
}

export default TodoList;