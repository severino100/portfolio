import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { HOBBIES, ACADEMY } from '../../core/data/life.data';
import { TiltDirective } from '../../core/tilt.directive';
import { TypewriterDirective } from '../../core/typewriter.directive';

@Component({
  selector: 'app-life',
  standalone: true,
  imports: [CommonModule, TiltDirective, TypewriterDirective],
  templateUrl: './life.component.html',
  styleUrl: './life.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeComponent {
  readonly i18n = inject(I18nService);
  readonly hobbies = HOBBIES;
  readonly academy = ACADEMY;
}
