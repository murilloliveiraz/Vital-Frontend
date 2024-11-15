import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospitais-slider',
  templateUrl: './hospitais-slider.component.html',
  styleUrls: ['./hospitais-slider.component.css']
})
export class HospitaisSliderComponent {
  hospitais: HospitalResponseContract[] = [];
  selectedHospitalId: number;

  constructor(public hospitalService: HospitalService) {}

  ngAfterViewInit(): void {
    this.hospitalService.getAll().subscribe((data: HospitalResponseContract[]) => {
      this.hospitais = data;
    });
  }

  selectHospital(hospitalId: number) {
    this.selectedHospitalId = hospitalId;
  }

  getHospitalSelecionado() {
    return this.hospitais.find(hospital => hospital.hospitalId === this.selectedHospitalId);
  }
}
