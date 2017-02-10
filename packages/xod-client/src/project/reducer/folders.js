import R from 'ramda';
import {
  FOLDER_ADD,
  FOLDER_RENAME,
  FOLDER_DELETE,
  FOLDER_MOVE,
} from '../actionTypes';

const newFolder = action => ({
  id: action.payload.newId,
  name: action.payload.name || 'New folder',
  parentId: action.payload.parentId || null,
});

export default (state = {}, action) => {
  switch (action.type) {
    case FOLDER_ADD:
      return R.assoc(action.payload.newId, newFolder(action), state);
    case FOLDER_RENAME:
      return R.assocPath([action.payload.id, 'name'], action.payload.name, state);
    case FOLDER_DELETE:
      return R.omit([action.payload.id.toString()], state);
    case FOLDER_MOVE:
      return R.assocPath([action.payload.id, 'parentId'], action.payload.parentId, state);
    default:
      return state;
  }
};