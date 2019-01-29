import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name:string="Parent Child Demonstration";
   things:string[]=["Vegetables","Fruits","Spices"]
   stock:string[][]=
   [
     ['Carrot','Onion',"Tomato","Plantain"],
     ["Orange","Apple","Banana","Cherry"],
     ["Cinnamon","Mustard","Pepper","Cummin"]
   ];
   message:string;


   receiveData(message,index){
      this.message=message;
      this.stock[index].push(message);
   }
}
