import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  habits: Observable<Habit[]>;

  constructor(private habitService: HabitService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.habits = this.habitService.getHabitsList();
  }

  deleteHabit(id: number) {
    this.habitService.deleteHabit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  habitDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateHabit(id: number){
    this.router.navigate(['update', id]);
  }

}
