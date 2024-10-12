import { Component, Input } from '@angular/core';
import { FormField } from 'src/app/interfaces/FormField';

@Component({
  selector: 'app-form-conta-usuario',
  templateUrl: './form-conta-usuario.component.html',
  styleUrls: ['./form-conta-usuario.component.css']
})
export class FormContaUsuarioComponent {
  @Input() fields: FormField[] = [];
}
