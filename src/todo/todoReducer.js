export default function todoReducer(draft, action) {
  console.log('---', draft);
  console.log('===', action);
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}