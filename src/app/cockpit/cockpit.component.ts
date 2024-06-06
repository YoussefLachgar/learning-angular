import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
  @ViewChild('contentInput') serverContent : ElementRef;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onServerAdded(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }  
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContent.nativeElement.value
    });
  }
}
