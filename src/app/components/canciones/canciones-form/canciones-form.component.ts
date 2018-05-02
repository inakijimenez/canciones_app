import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cancion } from '../../../models/cancion';
import { CancionesService } from '../../../providers/canciones.service';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-canciones-form',
  templateUrl: './canciones-form.component.html',
  styleUrls: ['./canciones-form.component.scss']
})

export class CancionesFormComponent implements OnInit {

  @Input('cancion') cancion: Cancion;
  @Input('canciones') canciones: Cancion[];
  @Input('crearbtn') crearbtn: boolean;

  @Output() done = new EventEmitter;

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

    console.log(cancion);
    
    if (this.formulario.controls.nombre.value != '') {
      this.cancion.nombre = this.formulario.controls.nombre.value;
      this.cancion.nombre = this.cancion.nombre.trim();
      this.cancionesService.putCancion(cancion).subscribe(data => {
        this.cancion = data;
        this.doneEvent(event);
      }, error => {
        console.warn(`Error al modificar ${error}`);
      });
    } else {
      console.warn('El nombre no puede estar vacio');
    }
  }

  eliminar(id: number) {
    if (confirm('Realmente desea eliminar la cancion?')) {
      this.cancionesService.deleteCancion(id).subscribe(data => {
        this.cancionesService.getCanciones().subscribe(data => {
          this.limpiarForm();
          this.doneEvent(event);
        }, error => {
          console.warn(`Error al eliminar ${error}`);
        });
      });
    }
  }

  submit(e) {
    this.cancion = new Cancion();
    console.log('nueva cancion %o', this.cancion);
    
    this.cancion.nombre = this.formulario.controls.nombre.value;
    this.cancion.nombre = this.cancion.nombre.trim();
    if (this.cancion.nombre != '') {
      this.cancionesService.postCancion(this.cancion).subscribe(data => {
        this.cancionesService.getCanciones().subscribe(data => {
          this.canciones = data;
          this.limpiarForm();
          this.doneEvent(event);
        }, error => {
          console.warn('Error al crear %o', error);
        });
      });
    } else {
      console.warn('El nombre no puede estar vacio');
    }
  }

  doneEvent(e) {
    this.done.emit(e);
  }
}
