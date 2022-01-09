import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  data: any;
  nome = "Gabriel Castro";
  sexo = "M";
  @Input() pathImage:string;
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    const response = localStorage.getItem("user");
    if(response){
      this.data = JSON.parse(response);
      console.log(this.data)
    }

  }

  public get icon(){
    return this.sexo == 'M'? 'assets/images/icons/user-man.svg': 'assets/images/icons/user-woman.svg'
  }

}
