function TodoItem({todoItem, onChangeTodoItem, onDeleteTodoItem}) {
  function changeTodoItemDoneStatus() {
    onChangeTodoItem({
      ...todoItem,
      done: !todoItem.done
    });
  }

  function deleteTodoItem() {
    onDeleteTodoItem(todoItem.id);
  }

  return (
      <div className="input-group">
        <div className="input-group-prepend flex-grow-1">
          <div className="input-group-text">
            <input type="checkbox" checked={todoItem.done} onChange={changeTodoItemDoneStatus} />
          </div>
          <div className="input-group-text d-block text-left flex-grow-1">
            <div>{todoItem.title}</div>
            <div className="description">{todoItem.description}</div>
          </div>
        </div>
        <div className="input-group-append">
          {!todoItem.done && <button className="btn btn-outline-secondary" type="button">Edit</button>}
          <button className="btn btn-outline-secondary" type="button" onClick={deleteTodoItem}>Delete</button>
        </div>
      </div>
  );
}

export default TodoItem;