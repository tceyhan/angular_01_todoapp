import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

// import { TodoItem } from '../todoitem';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {

  displayAll: boolean = false;
  inputText: string = '';

  constructor() {
    this.model.items = this.getItemsFromLS();
  }

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

  // addItem(textItem: any) {
  //   console.log(textItem.value);
  // }
  addItem() {
    if (this.inputText != '') {
      let data = {
        description: this.inputText,
        action: false,
      };
      this.model.items.push(data);
      let items = this.getItemsFromLS();
      items.push(data)
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = '';
    } else {
      return alert('Herhangi bir bilgi giriniz.!');
    }
  }

  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem("items");
    if(value != null) {
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChange(item: TodoItem) {
    let items = this.getItemsFromLS();
    localStorage.clear();
    items.forEach(i => {
      if(i.description==item.description){
        i.action = item.action;
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
    console.log(item)
  }
  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0,
    };
  }
}
