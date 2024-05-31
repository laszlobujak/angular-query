import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzLayoutModule,
    // 👇 Import Devtools
    AngularQueryDevtools
  ],
  styleUrls: ['./app.component.scss'],
  template: `
    <nz-layout class="app-layout">
    <div class="inner-content">
      <router-outlet></router-outlet>
    </div>
  </nz-layout>

  <!-- 👇 Add the component -->
  <angular-query-devtools />
`,
})
export class AppComponent {
  
}
