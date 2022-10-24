// export class TodoItem {
//     description:string;
//     action:string;

//     constructor(description:string, action:string){
//         this.description = description;
//         this.action = action;
//     }
// }

// export class TodoItem {
//     // eğer public/private tanımlaması yapılırsa bu şekilde baştan yukarıdaki gibi tanımlamaya gerek kalmaz.
//     constructor(public description:string, public action:string){
//         this.description = description;
//         this.action = action;
//     }
// }
export interface TodoItem {
  description: string;
  action: boolean;
}
