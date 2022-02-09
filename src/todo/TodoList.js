import TodoItem from "./TodoItem";

function TodoList({todoItems, onChangeTodoItem, onDeleteTodoItem, onEditTodoItem}) {
  return (
      <>
        {todoItems.map(todoItem => <TodoItem key={todoItem.id}
                                             todoItem={todoItem}
                                             onChangeTodoItem={onChangeTodoItem}
                                             onDeleteTodoItem={onDeleteTodoItem}
                                             onEditTodoItem={onEditTodoItem}/> )}
      </>
  );
}

export default TodoList;