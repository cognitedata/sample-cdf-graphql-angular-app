import { Component, OnInit } from '@angular/core';
import { CogniteAuthService } from '../../cognite-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  apiKey = localStorage.getItem('API_KEY') || '';
  cogniteAuthService: CogniteAuthService;

  constructor(cogniteAuthService: CogniteAuthService) {
    this.cogniteAuthService = cogniteAuthService;
  }

  ngOnInit(): void {
    if (localStorage.getItem('API_KEY')) {
      this.onLogin();
    }
  }

  async onLogin() {
    await this.cogniteAuthService.login(this.apiKey);
    localStorage.setItem('API_KEY', this.apiKey);
    await this.cogniteAuthService.getSdk().login.status();
  }
}
