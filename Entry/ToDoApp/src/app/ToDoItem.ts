export class ToDoItem {
  description: String;
  action: Boolean;

  constructor(desc: String, act: Boolean) {
    this.description = desc;
    this.action = act;
  }
}
