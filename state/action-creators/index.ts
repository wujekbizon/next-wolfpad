import { UpdateCellAction } from '../actions';

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    payload: {
      id,
      content,
    },
  };
};
