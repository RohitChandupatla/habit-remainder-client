import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Habit} from './habit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
//private baseUrl = 'http://localhost:8080/';
private baseUrl = 'https://habit-remainder-backend.herokuapp.com/';


constructor(private http:HttpClient) { }
getHabit(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}

addHabit(habit: Object): Observable<any> {
  return this.http.post("http://localhost:8080/habit", habit);
}

updateHabit(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteHabit(id: number): Observable<any> {
  return this.http.delete("http://localhost:8080/habit/"+id, { responseType: 'text' });
}

getHabitsList(): Observable<any> {
  return this.http.get(`${this.baseUrl}/allHabits`);
}
}
