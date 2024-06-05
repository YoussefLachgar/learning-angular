import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // serverElements: Array<Object> = [];
  @Output('SRcreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('BRcreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  newServerName = "";
  newServerContent = "";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onServerAdded() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }  
  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    });
  }
}
