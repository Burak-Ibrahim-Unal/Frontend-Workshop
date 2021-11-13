import { ToDoItem } from './ToDoItem';
import { Model } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = new Model();
  allDisplayed = false;

  getName() {
    return this.user.name;
  }

  getItems() {
    if (this.allDisplayed) {
      return this.user.toDoList;
    }
    return this.user.toDoList.filter((toDoList) => !toDoList.action);

  }

  addItem(value: String) {
    if (value != '') {
      this.user.toDoList.push(new ToDoItem(value, false));
    } else{
      alert("Please enter a task");
    }
  }
}
