import { Component, ChangeDetectionStrategy, ElementRef, OnInit, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { prefersReducedMotion } from '../../core/reduced-motion';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  @ViewChild('portrait') portraitRef!: ElementRef<HTMLDivElement>;
  scrollY = signal(0);

  private onScroll = () => {
    const el = this.portraitRef?.nativeElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    this.scrollY.set((r.top + r.height / 2 - window.innerHeight / 2) * -0.08);
  };

  ngOnInit() {
    if (prefersReducedMotion()) return;
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }
  ngOnDestroy() { window.removeEventListener('scroll', this.onScroll); }
}
