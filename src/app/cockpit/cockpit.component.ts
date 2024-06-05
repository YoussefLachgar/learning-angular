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
  // newServerName = "";
  // newServerContent = "";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onServerAdded(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }  
  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: contentInput.value
    });
  }
}
