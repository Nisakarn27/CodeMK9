import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable,inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LottoComponent } from './lotto/lotto.component';
import { HomeComponent } from './home/home.component';
import { UserBillsComponent } from './user-bills/user-bills.component';
import { timer,from } from 'rxjs';
import {UserService,UserDetail}  from './app.service';
import { LottoDetailComponent } from './lotto-detail/lotto-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LottoComponent,
    HomeComponent,
    UserBillsComponent,
    LottoDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
