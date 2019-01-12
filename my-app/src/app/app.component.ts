import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService,UserDetail}  from './app.service';
import { and, forEach } from '@angular/router/src/utils/collection';
import { ControlContainer } from '@angular/forms';
import { not } from '@angular/compiler/src/output/output_ast';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  UserName:string = '';
  UserCredit:string = '';
  UserObj = UserDetail;
  constructor (
    private http : HttpClient,
    private serviceUser : UserService
  ) {

  this.getUser();
  }

  getUser(){

this.serviceUser.getUservice().subscribe(res=>{
this.UserName = res.user_name;
this.UserCredit= res.user_credit;
})


  }
}
