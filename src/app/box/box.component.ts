import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
 @Input('title') type:string="Not Initialized";
 @Input('things') items:string[]=["item1","item2","item3","item4"];
 @Output('send') sendParent:EventEmitter<string>=new EventEmitter<string>();
 myclass:string="theme1";
 thing:string;
  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){

    this.myclass=this.myclass=="theme1"?"theme2":"theme1";
  }

  handleClick(){
     this.sendParent.emit(this.thing);
  }

  

}
