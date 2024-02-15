import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private _HttpClient: HttpClient) { }

  getdata(): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US`,
      {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2FhNzYxZmQwMWJlOTM5YTFhNjk0NDk2YTJhNzVjMCIsInN1YiI6IjY1Y2Q4ZDYxZDdkY2QyMDE3YzFlNzA3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJsiATUCZRu0fZ-_3dIdqCVJwSBviXGmX5EVgJgKlYQ'
        }
      })
  }





}
