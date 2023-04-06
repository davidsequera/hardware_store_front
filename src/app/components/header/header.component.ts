import { Component, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  jwt: string | null = null;

  constructor(private userContext: UserContextService) {
    userContext.jwt$.subscribe(jwt => this.jwt = jwt);
  }

  ngOnInit(): void {
  }
}
