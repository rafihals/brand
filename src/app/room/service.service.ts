import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  httpOptions : any
  url = '/api/public/api/v1/boilerplate/list-user'

  getDataList (){
    return this.httpClient.get(this.url, this.httpOptions)
  }

}
