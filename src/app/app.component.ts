import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  login = false
  constructor(private backend: BackendService) {
    backend.loginChange$.subscribe(login => this.login = login);
  }

  title = 'Concesionario';

  logout() {
    this.backend.borrarToken();
  }

}
