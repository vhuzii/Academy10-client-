import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PlaneType } from '../models/planetype';

@Injectable({
  providedIn: 'root'
})
export class PlanetypesService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'planetypes/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public getById(id: number) {
    return this.http.get(this.accessPointUrl + id, {headers: this.headers});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(entity: PlaneType) {
    return this.http.post(this.accessPointUrl, entity, {headers: this.headers});
  }

  public remove(id: Number) {
    return this.http.delete(this.accessPointUrl + id, {headers: this.headers});
  }

  public update(entity: PlaneType) {
    return this.http.put(this.accessPointUrl + entity.id, entity, {headers: this.headers});
  }
}
