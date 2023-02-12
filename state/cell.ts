export type CellTypes = 'code' | 'text' | 'chatbot' | 'draw';

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
