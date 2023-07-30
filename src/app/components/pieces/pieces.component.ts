import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { PieceService } from 'src/app/services/piece/piece.service';
import { Piece, PieceColumns } from 'src/app/model/piece';
import { catchError, startWith, switchMap, Observable, of as observableOf, merge, map } from 'rxjs';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements AfterViewInit {
  displayedColumns: string[] = PieceColumns.map(res => {return res.key});    
  data: Piece[] = [];
  piecesRes!: Piece;
  faEye = faEye;
  faTrashAlt = faTrashAlt;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pieceService: PieceService){
  }

  ngOnInit(){    
  }

  ngAfterViewInit() {    
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.pieceService.get(this.paginator.pageIndex).pipe(catchError(() => observableOf(null)))
        }),
        map(data =>{
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if(data === null) return [];

          this.resultsLength = data.totalItems;
          return data.pieces;
        })
      )
      .subscribe(data => (this.data = data))
  }

}