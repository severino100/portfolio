import { Directive, ElementRef, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { prefersReducedMotion } from './reduced-motion';

@Directive({
  selector: '[appTypewriter]',
  standalone: true,
})
export class TypewriterDirective implements OnChanges, OnDestroy {
  @Input('appTypewriter') text = '';

  private readonly el = inject(ElementRef<HTMLElement>).nativeElement;
  private observer?: IntersectionObserver;
  private timer?: ReturnType<typeof setTimeout>;
  private started = false;

  ngOnChanges() {
    if (this.started || !this.text) return;
    this.el.textContent = '';

    if (prefersReducedMotion()) {
      this.el.textContent = this.text;
      this.started = true;
      return;
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !this.started) {
          this.started = true;
          this.type();
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.6 });
    this.observer.observe(this.el);
  }

  private type() {
    let i = 0;
    const tick = () => {
      i++;
      this.el.textContent = this.text.slice(0, i);
      if (i < this.text.length) {
        this.timer = setTimeout(tick, 28 + Math.random() * 32);
      }
    };
    tick();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    clearTimeout(this.timer);
  }
}
