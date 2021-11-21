import { ToDoItem } from "./ToDoItem";

export class Model {
  name: String;
  toDoList=[new ToDoItem("",false)];

  constructor() {
    this.name = "Burak Ibrahim Unal";
    this.toDoList = [
      new ToDoItem("Get-Up",true),
      new ToDoItem("Wash your face",true),
      new ToDoItem("Have a breakfast",true),
      new ToDoItem("Caress and Feed Cats",false),
      new ToDoItem("Go to Job",false),
      new ToDoItem("Do Asp.Net Tasks",false),
      new ToDoItem("Come Home and Sleep",false),
      // { description: "Get-Up", action: "No" },
      // { description: "Wash your face", action: "No" },
      // { description: "Have a breakfast", action: "No" },
      // { description: "Caress and Feed Cats", action: "No" },
      // { description: "Go to Job", action: "No" },
      // { description: "Do Asp.Net Tasks", action: "No" },
      // { description: "Come Home and Sleep", action: "No" },
    ];
  }
}



