export default function todoReducer(draft, action) {
  switch (action.type) {
    case 'changed': {
      const itemIndex = draft.findIndex(todo => todo.id === action.todoItem.id);
      if (itemIndex !== -1) {
        draft[itemIndex] = action.todoItem;
      }
      break;
    }
    case 'deleted': {
      return draft.filter(todo => todo.id !== action.tidoItemId);
    }
    case 'added': {
      draft.push(action.todoItem);
      break;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}