import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Environment } from "src/environments/environment.development";
import { PageablePiece } from "src/app/model/pageable-piece";

@Injectable({
  providedIn: 'root'
})
export class PieceService {  
  constructor(private httpClient: HttpClient) { }

  get(page: number): Observable<PageablePiece> {    
    return this.httpClient.get<PageablePiece>(`${Environment.baseUrl}pieces?page=${page}`);
  }
}
