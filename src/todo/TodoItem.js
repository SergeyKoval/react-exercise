function TodoItem({todoItem, onChangeTodoItem, onDeleteTodoItem, onEditTodoItem}) {
  function handleChangeTodoItemStatus() {
    onChangeTodoItem({
      ...todoItem,
      done: !todoItem.done
    });
  }

  function handleDeleteTodoItem() {
    onDeleteTodoItem(todoItem.id);
  }

  function handleEditTodoItem() {
    onEditTodoItem({...todoItem});
  }

  return (
      <div className="input-group">
        <div className="input-group-prepend flex-grow-1">
          <div className="input-group-text">
            <input type="checkbox" checked={todoItem.done} onChange={handleChangeTodoItemStatus} />
          </div>
          <div className="input-group-text d-block text-left flex-grow-1">
            <div>{todoItem.title}</div>
            <div className="description">{todoItem.description}</div>
          </div>
        </div>
        <div className="input-group-append">
          {!todoItem.done && <button className="btn btn-outline-secondary" type="button" onClick={handleEditTodoItem}>Edit</button>}
          <button className="btn btn-outline-secondary" type="button" onClick={handleDeleteTodoItem}>Delete</button>
        </div>
      </div>
  );
}

export default TodoItem;