import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiecesComponent } from './components/pieces/pieces.component';
import { MainComponent } from './components/main/main.component';
import { PieceDetailsComponent } from './components/piece-details/piece-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'piece', component: PiecesComponent },
  { path: 'piece/:id/details', component: PieceDetailsComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
