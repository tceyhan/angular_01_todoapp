import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

// import { TodoItem } from '../todoitem';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}
  //! model içerisinde var olduğu için ihtiyacımız yok buna
  // private name: string = 'Tarık';

  // items = [
  //   "item 1","item 2","item 3", "item 4"
  // ];

  // ! model oluşturunca aşağıdaki items kısmını tamamen kaldırabiliyoruz.
  // items: TodoItem[] = [

  //   //! interface olarak yapınca bu şekilde olması yeterli
  //   {  description: 'Kahvaltı', action: 'yes' },
  //   {  description: 'Spor', action: 'no' },
  //   {  description: 'Alışveriş', action: 'yes' },

  //   //! class tanımlamasında aşağıdaki gibi olmalı
  //   // new TodoItem("kahvaltı", "yes"),
  //   // new TodoItem("spor", "no"),
  //   // new TodoItem("ders", "yes"),
  //   // new TodoItem("alışveriş", "no"),
  // ];

  model = new Model();

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }
}
