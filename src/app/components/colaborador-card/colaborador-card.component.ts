import { Component, Input } from '@angular/core';
import { AdminResponseContract } from 'src/app/models/administrador/adminResponseContract';

@Component({
  selector: 'app-colaborador-card',
  templateUrl: './colaborador-card.component.html',
  styleUrls: ['./colaborador-card.component.css']
})
export class ColaboradorCardComponent {
  @Input() colaborador: AdminResponseContract;
}
