import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/interfaces/FormField';

@Component({
  selector: 'app-form-conta-usuario',
  templateUrl: './form-conta-usuario.component.html',
  styleUrls: ['./form-conta-usuario.component.css']
})
export class FormContaUsuarioComponent {
  @Input() fields: FormField[] = [];

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
    this.fields.forEach(field => {
      const control = new FormControl({ value: field.value || '', disabled: field.disabled });
      this.formGroup.addControl(field.controlName, control);
    });
  }

  getFormData(): any {
    return this.formGroup.value;
  }
}
