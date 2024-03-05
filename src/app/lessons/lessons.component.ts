import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Lesson } from '../model/lesson';
import { LessonsService } from '../services/lessons.service';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgForOf],
  template: `
    <h2>All Lessons</h2>

    <div class="lessons-list-container v-h-center-block-parent">
      <table class="table lessons-list card card-strong">
        <tbody>
          <tr
            *ngFor="let lesson of lessons$ | async"
            [routerLink]="['/lessons', lesson.id]"
          >
            <td class="lesson-title">{{ lesson.description }}</td>
            <td class="duration">
              <i class="md-icon duration-icon">access_time</i>
              <span>{{ lesson.duration }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: `h2 {
    text-align: center;
}`,
})
export class LessonsComponent {
  lessons$!: Observable<Lesson[]>;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessons$ = this.lessonsService.loadAllLessons();
  }
}
