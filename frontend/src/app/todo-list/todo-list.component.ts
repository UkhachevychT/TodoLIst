import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private  todos:  Array<object> = [];
  private  filteredTodos:  Array<object> = [];
  private  projects:  Array<object> = [];


  constructor(private  apiService:  APIService, private modalService: NgbModal) { }
  
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

  private  filterByProject(data, project){
    return data.filter(e => e.project === project);
  }

  public  getTodosByProj(project){
    this.filteredTodos = this.filterByProject(this.todos, project);
  }
  
  public  getProjects(){
    this.apiService.getProjects().subscribe((data: Array<object>) => {
      this.projects = data;
      console.log(data);
    });
  }

  clickMe(id:string){
    this.getTodosByProj(id)
  }


  closeResult: string;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
