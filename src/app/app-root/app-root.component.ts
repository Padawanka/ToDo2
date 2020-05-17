import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';
import { TaskData } from '../models/taskData';

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent implements OnInit {
  toDoList: Array<TaskData> = [];
  counter: number = 0;

  constructor(public taskList: TaskListService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskList.addTask(this.toDoList, this.counter.toString());
    this.counter += 1;
  }

}
