import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.css']
})
export class SignInButtonComponent implements OnInit {
  isMobile = false;
  pathname = '';

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.checkWindowWidth();
    this.renderer.listen('window', 'resize', () => {
      this.checkWindowWidth();
    });
    this.router.events.subscribe(() => {
      this.pathname = this.router.url;
    });
  }

  toSignIn(): void {
    this.router.navigate(['/login']);
  }

  private checkWindowWidth(): void {
    this.isMobile = window.innerWidth < 768;
  }
}
