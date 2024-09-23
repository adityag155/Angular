import { Injectable } from '@angular/core';

//import for http client in service
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverPath:string="http://localhost:8084/";

  constructor(private httpClient:HttpClient) { }

getData(url:string):Observable<any>
{
  return this.httpClient.get(this.serverPath+ url);  
}
insertData(url:string, obj:any):Observable<any>
{
  return this.httpClient.post(this.serverPath +url, obj);
}

updateData(url:string, obj:any):Observable<any>
{
  return this.httpClient.put(this.serverPath +url, obj);
}

deleteData(url:string):Observable<any>
{
  return this.httpClient.delete(this.serverPath +url);
}


}