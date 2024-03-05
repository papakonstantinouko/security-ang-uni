import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="l-header">
      <ul class="top-menu disable-link-styles">
        <li class="logo-small-container">
          <a class="v-center-block-parent">
            <img
              class="v-center-block logo-small angular-university-logo"
              src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png"
              alt="Angular University Security Course"
            />
          </a>
        </li>
        <li>
          <a routerLink="lessons">Lessons</a>
        </li>
        <li>
          <a routerLink="signup">Sign Up</a>
        </li>
        <li>
          <a routerLink="login">Login</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </header>

    <main>
      <div class="course-header">
        <h3>Angular Security MasterClass</h3>
        <img
          class="course-logo"
          alt="Angular University Logo"
          src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-security-thumbnail.png"
        />
      </div>

      <router-outlet />
    </main>
  `,
  styles: [
    `
      .l-header {
        display: block;
      }

      main {
        padding-top: 50px;
        margin: 0 auto;
        width: 300px;
      }

      .course-header {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
      }

      .course-header h3 {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'security-ang-uni';
}
