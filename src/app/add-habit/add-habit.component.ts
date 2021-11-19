import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.css']
})
export class AddHabitComponent implements OnInit {
  habit: Habit = new Habit();
  submitted = false;

  constructor(private habitService: HabitService,
    private router: Router) { }

  ngOnInit() {
  }

  newHabit(): void {
    this.submitted = false;
    this.habit = new Habit();
  }

  save() {
    this.habitService
    .addHabit(this.habit).subscribe(data => {
      console.log(data)
      this.habit = new Habit();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/habits']);
  }
}