import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  names: Array<String> = ['Nedal'];

  constructor() { 
    console.log("in constructor!!!!!!");
    this.names.push('Rokia');
  }

  ngOnInit(): void {
    console.log("ngOnInit!!!!!!")
    this.names.push('Hussein');

  }


}
