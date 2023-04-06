import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent {
tools: any[] = [{"name":'hammer', "description": "aja","link": "google.com"}, {"name":'screwdriver', "description": "aja","link": "google.com"}, {"name":"wrench", "description": "aja","link": "google.com"}];

}
