import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-item',
  templateUrl: './tool-item.component.html',
  styleUrls: ['./tool-item.component.css']
})
export class ToolItemComponent {
  @Input() title: string | undefined;
  @Input() link: string | undefined;
}
