import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from './type/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Api end-point
  apiURL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getTask(){
    return this.http.get(this.apiURL + '/tasks')
  }

  deleteTask(id: number){
    //const url = `${this.apiURL}/${id}`
    console.log(id);

    return this.http.delete(this.apiURL + '/tasks/' + id).subscribe(response =>{
      //console.log(this.apiURL + '/tasks/'+ id + " Is Deleted")
    })
  }

  editTask(){

  }

  addTask(task: Task){
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(task)
    console.log(body);

    return this.http.post(this.apiURL + '/task',body,{'headers': headers})
    
    // .subscribe(response=>{
    //   console.log(response)
    // })
  }
}
