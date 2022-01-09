import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { responseUsers, Users } from 'src/app/core/types/users_d';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data:any;

  constructor() { }

  ngOnInit(): void {
  }



}
