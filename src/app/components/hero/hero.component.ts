import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { prefersReducedMotion } from '../../core/reduced-motion';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  phase = signal(0);
  roleIdx = signal(0);
  mouseX = signal(0);
  mouseY = signal(0);

  private timers: ReturnType<typeof setTimeout>[] = [];
  private roleInterval?: ReturnType<typeof setInterval>;

  readonly letters = (text: string) => text.split('');

  ngOnInit() {
    this.timers = [
      setTimeout(() => this.phase.set(1), 250),
      setTimeout(() => this.phase.set(2), 1100),
      setTimeout(() => this.phase.set(3), 2000),
      setTimeout(() => this.phase.set(4), 2700),
    ];
    this.roleInterval = setInterval(() => {
      this.roleIdx.update(i => (i + 1) % this.i18n.t().hero.roles.length);
    }, 2400);
  }

  ngOnDestroy() {
    this.timers.forEach(clearTimeout);
    if (this.roleInterval) clearInterval(this.roleInterval);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (prefersReducedMotion()) return;
    const el = document.querySelector('.hero') as HTMLElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    this.mouseX.set((e.clientX - r.left - r.width / 2) / r.width);
    this.mouseY.set((e.clientY - r.top - r.height / 2) / r.height);
  }
}
