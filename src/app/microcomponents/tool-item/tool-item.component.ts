import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-item',
  templateUrl: './tool-item.component.html',
  styleUrls: ['./tool-item.component.css']
})
export class ToolItemComponent {
  @Input() title?: string ;
  @Input() description?: string ;
  @Input() link?: string ;
}
