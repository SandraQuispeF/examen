var model = {
    user: "Sandra",
    items: [
      { action: "Correos por responder", done: false },
      { action: "Trabajos", done: false },
      { action: "Llamar mamá", done: true },
    ]
  };
  
  export class Model {
    user;
    items;
    constructor() {
      this.user = "Sandra Quispe";
      this.items = [
        new TodoItem("Correos por responder", false),
        new TodoItem("Trabajos", false),
        new TodoItem("Llamar mamá", false)
      ];
    }
  }
  export class TodoItem {
    action;
    done;
    constructor(action: string, done: boolean) {
      this.action = action;
      this.done = done;
    }
  }