import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Profession {
  name: string;
}

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})

export class BuscarEmpleadoComponent implements OnInit {

  myControl = new FormControl();
  options: Profession[] = [
    {name: 'Arquitecto'},
    {name: 'Industrial'},
    {name: 'Sistemas'}
  ];
  filteredOptions: Observable<Profession[]>;

  ngOnInit() {
  	this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Profession>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(profession?: Profession): string | undefined {
    return profession ? profession.name : undefined;
  }

  private _filter(name: string): Profession[] {
    const filterValue = name.toLowerCase();
  	return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}