import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-admins-control',
  templateUrl: './admins-control.component.html',
  styleUrls: ['./admins-control.component.css']
})
export class AdminsControlComponent implements OnInit {
  admins: any


  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    return this.backend.getAdmins().subscribe((admins) => {
      this.admins = admins;
      console.log(this.admins)
    })
  }


}
