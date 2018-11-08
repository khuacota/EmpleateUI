
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputLanguagesComponent } from "../../languages/input-languages/input-languages.component";
import { InputSkillsComponent } from "../../skills/input-skills/input-skills.component";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {


  foods: Food[] = [
    { value: 'Alimenticio', viewValue: 'Alimenticio' },
    { value: 'Automovilistico', viewValue: 'Automovilistico' },
    { value: 'Social', viewValue: 'Social' }
  ];

  /**visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  languages: string[] = ['español'];
  alllanguages: string[] = ['español', 'ingles', 'frances', 'ruso', 'quechua', 'aymara', 'guarani'];

  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;*/
  @ViewChild(InputLanguagesComponent) languageChild;
  private languages = [];

  @ViewChild(InputSkillsComponent) skillChild;
  private skills = [];
  empresaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empresaForm = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9 ]+')
      ])],
      telefono: ['', Validators.compose([
        Validators.required, Validators.max(99999999), Validators.min(9999999)

      ])],
      descripcion: ['', Validators.compose([
        Validators.required

      ])],

      rubro: ['', Validators.compose([
        Validators.required
      ])],

      direccion: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])],


      correo: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}")
      ])],

      imagen: ['', Validators.compose([
        Validators.required
      ])],

      url: ['', Validators.compose([
        Validators.required,
        Validators.pattern("(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?")
      ])]

      //  Inicio: ['', Validators.required],
      //  Fin: ['', Validators.required],
    });
    /**this.filteredLanguages = this.languageCtrl.valueChanges.pipe(
    startWith(null),
    map((language: string | null) => language ? this._filter(language) : this.alllanguages.slice()));*/
  }

  /*add(event: MatChipInputEvent): void {
    // Add language only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our language
      if ((value || '').trim()) {
        this.languages.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.languageCtrl.setValue(null);
    }
  }

  remove(language: string): void {
    const index = this.languages.indexOf(language);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languages.push(event.option.viewValue);
    this.languageInput.nativeElement.value = '';
    this.languageCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alllanguages.filter(language => language.toLowerCase().indexOf(filterValue) === 0);
  }*/
  /*
    ngOnInit() {
    }*/


  ngOnInit() {
  }

  registrar() {
    var nombre: string = this.empresaForm.get('nombre').value;
    var descripcion: string = this.empresaForm.get('descripcion').value;
    var rubro: string = this.empresaForm.get('rubro').value;
    var direccion: string = this.empresaForm.get('direccion').value;
    var telefono: string = this.empresaForm.get('telefono').value;
    var correo: string = this.empresaForm.get('correo').value;
    var web: string = this.empresaForm.get('url').value;
    var imagen: string = this.empresaForm.get('imagen').value;
    
    console.log(this.empresaForm.value);
  }
}
