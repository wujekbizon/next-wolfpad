export type CellTypes = 'code' | 'text' | 'chatbot';

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
