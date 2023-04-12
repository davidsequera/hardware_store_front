import { Component, HostListener, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account-button',
  templateUrl: './account-button.component.html',
  styleUrls: ['./account-button.component.css']
})
export class AccountButtonComponent implements OnInit {
  accountMenuOn = false;

  isMinWidth768px = window.innerWidth >= 768;
  // Rest of the component code

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.isMinWidth768px = window.innerWidth >= 768;
  }

  @ViewChild('menuRef', { static: true }) menuRef?: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'mousedown', (event) => {
      if (!this.menuRef?.nativeElement.contains(event.target)) {
        this.accountMenuOn = false;
      }
    });
  }

  toggleAccountMenu(): void {
    this.accountMenuOn = !this.accountMenuOn;
  }
}




