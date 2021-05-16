import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateTableComponent } from './components/associate-table/associate-table.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { CilesimetComponent } from './components/cilesimet/cilesimet.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const routes: Routes = [
  {path: '', redirectTo: 'librat', pathMatch: 'full'},
  {path: 'librat', component: BookTableComponent},
  {path: 'anetaresimet', component: AssociateTableComponent},
  {path: 'cilesimet', component: CilesimetComponent},
  {path: 'statistics', component: StatisticsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
