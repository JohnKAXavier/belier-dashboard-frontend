import { Piece } from "./piece"

export interface PageablePiece {
  pieces: Piece[],
  currentPage: number,
  totalItems: number,
  totalPages: number
}

