import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Tarık';
    this.items = [
      { description: 'Kahvaltı', action: true },
      { description: 'Spor', action: false},
      { description: 'Alışveriş', action: true},
    ];
  }
}
