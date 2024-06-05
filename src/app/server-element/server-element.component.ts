import { Component , Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is the default value and you kan switch to None or ShadowDom
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string, name: string, content: string };

  constructor() {}
  ngOnInit(): void {}

}
