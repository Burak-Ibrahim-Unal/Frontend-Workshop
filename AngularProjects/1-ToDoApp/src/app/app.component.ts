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
  inputText: string = "";

  getName() {
    return this.user.name;
  }

  getItems() {
    if (this.allDisplayed) {
      return this.user.toDoList;
    }
    //return this.user.toDoList.filter((toDoList) => !toDoList.action);
    return this.user.toDoList.filter((toDoList) => toDoList.action == false);

  }

  addItem() {
    if (this.inputText != '') {
      this.user.toDoList.push(new ToDoItem(this.inputText, false));
      this.inputText = "";
    } else {
      alert("Please enter a task");
    }
  }

  displayCount() {
    return this.user.toDoList.filter(todoitem => todoitem.action).length;
  }

  getButtonClasses() {
    return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-success': this.inputText.length > 0
    }
  }
}
