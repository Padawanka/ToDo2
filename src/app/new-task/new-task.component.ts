import { Component, OnInit, Input } from '@angular/core';
import { TaskListService } from '../task-list.service';
import { TaskData } from '../models/taskData';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() toDoList:Array<TaskData>;

  newToDoList = this.toDoList;

  constructor(public taskList: TaskListService) { }

  ngOnInit(): void {
  }

  addTaskDescription(event:any) {
    console.log(this.newToDoList);
    console.log(this.toDoList);
    
    
    console.log('addin task description');
    
    console.log(event.target.id);
    
    /* this.taskList.addDescription(newToDoList,) */
  }
}
