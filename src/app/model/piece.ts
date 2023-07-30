import { PieceType } from "./piece-type"
import { TransactionType } from "./transaction-type"

export interface Piece {
  id: number,
  name: string,
  pieceType: PieceType,
  price: number,
  factoryPrice: number,
  netValue: number,
  transactionType: TransactionType
}

export const PieceColumns = [
  {
    key: 'id',
    type: 'number',
    label: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'name',
  },
  {
    key: 'pieceType',
    type: 'text',
    label: 'pieceType',
  },
  {
    key: 'price',
    type: 'number',
    label: 'price',
  },
  {
    key: 'factoryPrice',
    type: 'number',
    label: 'factoryPrice',
  },
  {
    key: 'netValue',
    type: 'number',
    label: 'netValue',
  },
  {
    key: 'transactionType',
    type: 'text',
    label: 'transactionType',
  },
];