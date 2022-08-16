import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/persona";

  public save(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url+"/save", persona, this.httpOptions);
  }

  public findById(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Persona>{
    return this.http.delete<Persona>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"/findAll", this.httpOptions);
  }

}
