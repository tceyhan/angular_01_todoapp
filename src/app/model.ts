import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Tarık';
    this.items = [
      { description: 'Kahvaltı', action: 'yes' },
      { description: 'Spor', action: 'no' },
      { description: 'Alışveriş', action: 'yes' },
    ];
  }
}
