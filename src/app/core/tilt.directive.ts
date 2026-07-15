import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { prefersReducedMotion } from './reduced-motion';

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective {
  private readonly el = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly maxTilt = 6;

  private get enabled(): boolean {
    return matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion();
  }

  @HostListener('mouseenter')
  onEnter() {
    if (!this.enabled) return;
    this.el.style.transition = 'none';
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent) {
    if (!this.enabled) return;
    const r = this.el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = (-py * this.maxTilt).toFixed(2);
    const ry = (px * this.maxTilt).toFixed(2);
    this.el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  @HostListener('mouseleave')
  onLeave() {
    if (!this.enabled) return;
    this.el.style.transition = `transform 500ms var(--ease-out)`;
    this.el.style.transform = '';
    setTimeout(() => { this.el.style.transition = ''; }, 500);
  }
}
