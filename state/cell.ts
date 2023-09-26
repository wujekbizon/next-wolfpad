export type CellTypes = 'code' | 'text' | 'draw'

export interface Cell {
  id: string
  type: CellTypes
  content: string
}
