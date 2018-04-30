import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cancion } from '../../../models/cancion';
import { CancionesService } from '../../../providers/canciones.service';

@Component({
  selector: 'app-canciones-form',
  templateUrl: './canciones-form.component.html',
  styleUrls: ['./canciones-form.component.scss']
})

export class CancionesFormComponent implements OnInit {

  @Input('cancion') cancion: Cancion;
  @Input('canciones') canciones: Cancion[];
  @Input('crearbtn') crearbtn: boolean;
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private cancionesService: CancionesService) {
    this.limpiarForm();
  }

  ngOnInit() {
  }

  limpiarForm() {
    this.formulario = this.fb.group({
      nombre: ['']
    });
  }

  modificar(cancion: Cancion) {
    this.cancion.nombre = this.cancion.nombre = this.formulario.controls.nombre.value;
    this.cancionesService.putCancion(cancion).subscribe(data => {
      this.cancion = data;
    });
  }

  eliminar(id: number) {
    this.cancionesService.deleteCancion(id).subscribe(data => {
      this.cancionesService.getCanciones().subscribe(data => {
        this.canciones = data;
      });
    });
  }

  submit(e) {
    this.cancion = new Cancion();
    this.cancion.nombre = this.formulario.controls.nombre.value;
    this.cancionesService.postCancion(this.cancion).subscribe(data => {
      this.cancionesService.getCanciones().subscribe(data => {
        this.canciones = data;
        console.log(this.canciones);
        
      });
    });

  }
}
