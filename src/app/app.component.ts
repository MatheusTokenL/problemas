import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { EnderecoService } from './endereco-service/endereco.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Form } from '@angular/forms';
import { Estado } from './Classes/Estados';
import { Cidades } from './Classes/Cidades';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'rxgeiessi';
  form : FormGroup
  estados$: Observable<Estado[]>
  cidades$: Observable<Cidades[]> | undefined
  selectValue$ : Subscription| undefined

  valueselect : any

  arr : Array<any> = [];

  constructor(private endereco : EnderecoService, private formBuilder : FormBuilder){
    this.form = this.formBuilder.group({
      estados: [null],
      cidades: [null]
    })

    this.estados$ = endereco.estados$
    this.cidades$ = endereco.cidades$
    
     
    this.selectValue$ = this.form.get('estados')?.valueChanges.subscribe(
      value => this.valueselect = value
    )

    this.cidades$.pipe(
      map(
        (data)=> data.filter((d)=> {d.id == "2"})))

      }
      

}
