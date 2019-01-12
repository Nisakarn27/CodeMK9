import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LottoComponent }      from './lotto/lotto.component';
import { HomeComponent }      from './home/home.component';
import { UserBillsComponent } from './user-bills/user-bills.component';
import { LottoDetailComponent } from './lotto-detail/lotto-detail.component';
const routes: Routes = [
  { path: 'listlotto', component: LottoComponent },
  { path: 'lotto', component: LottoDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user_bills', component: UserBillsComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {
  
 }