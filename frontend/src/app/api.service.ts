import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
providedIn:  'root'
})
export  class  APIService {
  API_URL  =  'http://localhost:8000/api';
  constructor(private  httpClient:  HttpClient) {}

  getTodos(){
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    return  this.httpClient.get(this.API_URL + '/todo');
  }

  getProjects(){
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    return  this.httpClient.get(this.API_URL + '/project');
  }
}