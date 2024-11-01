import { Component } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-admin-hospitais',
  templateUrl: './admin-hospitais.component.html',
  styleUrls: ['./admin-hospitais.component.css']
})
export class AdminHospitaisComponent {
  hospitais: HospitalResponseContract[] = [];

  constructor(public hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.getAll().subscribe((data: HospitalResponseContract[]) => {
      this.hospitais = data;
    });
  }
}
