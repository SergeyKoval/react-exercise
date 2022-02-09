import {emptyTodoItem} from "../initialData";

function TodoEditForm({todoItem, onAddTodoItem, onChangeTodoItem, updateTodoItem}) {
  function handleTitleChange(e) {
    updateTodoItem(draft => {
      draft.title = e.target.value
    });
  }

  function handleDescriptionChange(e) {
    updateTodoItem(draft => {
      draft.description = e.target.value
    });
  }

  function handleSaveTodoItem() {
    if (todoItem.id) {
      onChangeTodoItem(todoItem);
      updateTodoItem({...emptyTodoItem});
    } else {
      onAddTodoItem(todoItem);
    }
  }

  function handleCancelClick() {
    updateTodoItem({...emptyTodoItem});
  }

  function isSaveButtonDisabled() {
    return !todoItem.title || !todoItem.description || todoItem.title.trim().length === 0 || todoItem.description.trim().length === 0;
  }

  return (
      <>
        <div className="row mb-3">
          <div className="coll">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text form-title" id="title">Title</span>
              </div>
              <input type="text" className="form-control" value={todoItem.title} onChange={handleTitleChange}/>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="coll">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text form-title">Description</span>
              </div>
              <textarea className="form-control" value={todoItem.description} onChange={handleDescriptionChange}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="coll">
            <button type="button" className="btn btn-outline-dark" disabled={isSaveButtonDisabled()}
                    onClick={handleSaveTodoItem}>{todoItem.id ? 'Save' : 'Add'}</button>
            <button type="button" className="btn btn-outline-dark ml-2" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </>
  )
}

export default TodoEditForm;