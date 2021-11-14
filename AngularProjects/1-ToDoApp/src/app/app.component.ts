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

  constructor() {
    this.user.toDoList = this.getItemsFromLocalStorage();
  }

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
      let data = new ToDoItem(this.inputText, false);
      this.user.toDoList.push(data);

      let dataItems = this.getItemsFromLocalStorage();
      dataItems.push(data);
      localStorage.setItem("items", JSON.stringify(dataItems));
      this.inputText = "";
    } else {
      alert("Please enter a task");
    }
  }

  removeItem(item: ToDoItem) {
    let items = this.getItemsFromLocalStorage();
    localStorage.clear();
    items.forEach(i => {
      if (i.description == item.description) {
        items.splice(items.indexOf(i), 1);
        console.log(item.description);
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
  }

  getItemsFromLocalStorage() {
    let items: ToDoItem[] = [];
    let lsItems = localStorage.getItem("items");
    if (lsItems != null) {
      items = JSON.parse(lsItems);
    }
    return items;
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

  onLocalStorageChanged(item: ToDoItem) {
    let items = this.getItemsFromLocalStorage();
    localStorage.clear();
    items.forEach(i => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
  }
}
