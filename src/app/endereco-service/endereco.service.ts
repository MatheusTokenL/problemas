import { Cidades } from './../Classes/Cidades';
import { Observable } from 'rxjs';
import { Estado } from '../Classes/Estados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  estados$: Observable<Estado[]>;
  cidades$: Observable<Cidades[]>;
    
  constructor(private http : HttpClient){
    this.estados$ = this.http.get<Estado[]>('../../assets/estados.json')

    this.cidades$ = this.http.get<Cidades[]>('../../assets/cidades.json')
  }
}
