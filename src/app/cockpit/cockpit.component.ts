import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements: Array<Object> = [];
  newServerName = "";
  newServerContent = "";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddServer() {
    this.serverElements.push({
      tyep: "server",
      name: this.newServerName,
      content: this.newServerContent
    })
  }  
  onAddBlueprint() {
    this.serverElements.push({
      tyep: "blueprint",
      name: this.newServerName,
      content: this.newServerContent
    })
  }
}
