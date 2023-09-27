import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  constructor(private sharedService: SharedDataService) {}

  tokenState: boolean = false;

  getAccess(): void {
    this.tokenState = true;
    this.sharedService.generateToken();
  }

  revokeAcces(): void {
    this.tokenState = false;
    this.sharedService.removeToken();
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.tokenState = true;
    }
  }
}
