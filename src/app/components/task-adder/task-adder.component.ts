import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';
import { Task } from 'src/app/type/task';


@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.scss']
})
export class TaskAdderComponent implements OnInit {

  task = new Task()
  //id: number = 0
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    this.crudService.getTask()
  }

  onSubmit(taskForm: NgForm){

  //  let model = {
  //   taskname: taskForm.value.taskname,
  //   description: taskForm.value.description,
  //   date: taskForm.value.date,
  //   reminder: taskForm.value.reminder
  //  }

   this.crudService.addTask(this.task).subscribe(response=>{
     console.log(response);
     this.refresh()
     
   })
  }

  
  

}
