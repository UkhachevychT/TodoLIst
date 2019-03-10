import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private  todos:  Array<object> = [];
  private  projects:  Array<object> = [];
  constructor(private  apiService:  APIService) { }
  
  ngOnInit() {
    this.getTodos();
    this.getProjects();
  }

  public  getTodos(){
    this.apiService.getTodos().subscribe((data: Array<object>) => {
      this.todos = data;
      console.log(data);
    });
  }

  public  getProjects(){
    this.apiService.getProjects().subscribe((data: Array<object>) => {
      this.projects = data;
      console.log(data);
    });
  }
}
