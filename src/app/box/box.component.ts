import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
 @Input('title') type:string="Not Initialized";
 @Input('things') items:string[]=["item1","item2","item3","item4"];
 myclass:string="theme1";
  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){

    this.myclass=this.myclass=="theme1"?"theme2":"theme1";
  }

}
