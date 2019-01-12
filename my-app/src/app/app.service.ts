import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

  export class UserDetail {
    user_id:number;
    user_name:string;
    user_credit:string;
  }
  
@Injectable({providedIn:'root'})
  export class UserService {
    urlGetUservice: string = 'http://localhost:8099/php/getDetailCustomer.php';

    constructor(private http: HttpClient) {

    }
  
    getUservice(): Observable<any> {
  
      return this.http.get(this.urlGetUservice);
    }

    private extractData(res:Response){
        const body = res;
        return body||{};
    }
  }