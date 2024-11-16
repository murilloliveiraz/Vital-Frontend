import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hospital-card',
  templateUrl: './hospital-card.component.html',
  styleUrls: ['./hospital-card.component.css']
})
export class HospitalCardComponent {
  @Input() hospital: HospitalResponseContract;
  constructor(private router: Router, private authService: AuthService){}

  acessarHospital(hospitalId:number){
    if(this.authService.isAdmin()){
      this.router.navigate([`/admin/hospitais/${hospitalId}`]);
    } else {
      this.router.navigate([`/paciente/hospitais/${hospitalId}`]);
    }
  }
}
