import { Injectable } from '@angular/core';
import { TaskData } from './models/taskData';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  id: string;
  task: string;
  done: boolean;

  addTask(toDoList: Array<TaskData>, id:string, task?:string, done:boolean = false) {
    let taskItem = new TaskData();
    taskItem.id = id;
    taskItem.task = task;
    taskItem.done = done;
    toDoList.push(taskItem);
  }

  addDescription(toDoList: Array<TaskData>, id:string, task:string) {
    toDoList.forEach((element, i) => 
      { if(element.id==id) 
        { element.task = task}
      }
      );
  }

  changeDone(toDoList: Array<TaskData>, id:string, done:boolean) {
    toDoList.forEach((element) => 
      { if(element.id==id) 
        { element.done = done}
      }
      );
  }

  constructor() { }
}
