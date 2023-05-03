import { CellTypes } from '../state/cell'

interface CellButtons {
  id: number
  cellName: string
  type: CellTypes
}

export const navLinks = [
  {
    id: 1,
    label: 'Home',
    url: '/'
  },
  {
    id: 2,
    label: 'Wolfpad',
    url: '/wolfpad'
  },
  {
    id: 3,
    label: 'Chat',
    url: '/chat'
  },
  {
    id: 4,
    label: 'Huefiy',
    url: '/huefiy'
  }
]

export const cellButtons: CellButtons[] = [
  {
    id: 1,
    cellName: 'Code',
    type: 'code'
  },
  {
    id: 2,
    cellName: 'Text',
    type: 'text'
  },
  {
    id: 3,
    cellName: 'Chat',
    type: 'chatbot'
  },
  {
    id: 4,
    cellName: 'Draw',
    type: 'draw'
  }
]
