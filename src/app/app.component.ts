import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-project';
  serverElements = [{ type: "server", name: "testServer", content: "server content test" }];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }  
  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = "changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0 , 1);
  }

}
