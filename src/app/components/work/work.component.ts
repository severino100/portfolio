import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { WORK, WorkEntry } from '../../core/data/work.data';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  readonly i18n = inject(I18nService);
  readonly entries = WORK;
  openStates = signal<boolean[]>(WORK.map((_, i) => i <= 1));

  toggle(idx: number) {
    this.openStates.update(states => {
      const next = [...states];
      next[idx] = !next[idx];
      return next;
    });
  }

  initials(client: string) { return (client || '?').slice(0, 2).toUpperCase(); }
}
