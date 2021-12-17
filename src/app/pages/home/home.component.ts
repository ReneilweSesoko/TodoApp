import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/type/task';
import { CrudService } from 'src/app/crud.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //tasks: Task[] = [];
  task: any;
  show: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.getTask().subscribe( 
      response => {
        this.task = response;
        //console.log(this.task)
    });

  }

  dltTask(id: any){
    console.log(id);
    this.crudService.deleteTask(id)
  }

  add(){
    this.show = !this.show
  }

}


