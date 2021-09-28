import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}
  getAllPhotos() {
    this.http.get('http://localhost:8080/api/photos');
  }
}
