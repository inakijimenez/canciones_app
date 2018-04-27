import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-canciones-form',
  templateUrl: './canciones-form.component.html',
  styleUrls: ['./canciones-form.component.scss']
})
export class CancionesFormComponent implements OnInit {

  formulario : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.limpiarForm();
  }

  ngOnInit() {
  }

  limpiarForm() {
    this.formulario = this.fb.group({
      nombre: ['']
    });
  }
}
