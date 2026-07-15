import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { prefersReducedMotion } from '../../core/reduced-motion';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  readonly i18n = inject(I18nService);
  @ViewChild('mailBtn') mailRef!: ElementRef<HTMLAnchorElement>;
  tr = signal({ x: 0, y: 0 });

  private onMove = (e: MouseEvent) => {
    const el = this.mailRef?.nativeElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const dist = Math.hypot(dx, dy);
    const max = 220;
    this.tr.set(dist < max ? { x: dx * (1 - dist / max) * 0.25, y: dy * (1 - dist / max) * 0.25 } : { x: 0, y: 0 });
  };

  ngAfterViewInit() {
    if (prefersReducedMotion()) return;
    window.addEventListener('mousemove', this.onMove);
  }
  ngOnDestroy() { window.removeEventListener('mousemove', this.onMove); }
}
