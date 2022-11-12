import { Component, ViewChild } from "@angular/core";
import { Model, TodoItem } from "../model";
@Component({
  selector: "todo-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }

  getTodoItems() {
    //return this.model.items;
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }

   //Cronometro
   mensaje = '';

   actualizar(t: number) {
     this.mensaje = t + '(se actualiza cada 10 segundos)';
   }
}
