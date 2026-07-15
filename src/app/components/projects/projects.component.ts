import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { PERSONAL_PROJECTS } from '../../core/data/life.data';
import { TiltDirective } from '../../core/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  readonly projects = PERSONAL_PROJECTS;

  getName(p: typeof PERSONAL_PROJECTS[0]) {
    return typeof p.name === 'string' ? p.name : p.name[this.i18n.lang()];
  }

  padNum(i: number) { return String(i + 1).padStart(2, '0'); }
}
