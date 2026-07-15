import { Component, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { prefersReducedMotion } from '../../core/reduced-motion';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div #dot class="cursor-dot" aria-hidden="true"></div>
    <div #ring class="cursor-ring" aria-hidden="true"></div>
  `,
  styleUrl: './cursor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dot') dotRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ring') ringRef!: ElementRef<HTMLDivElement>;

  private dx = 0; private dy = 0; private rx = 0; private ry = 0;
  private raf = 0;
  private onMove = (e: MouseEvent) => { this.dx = e.clientX; this.dy = e.clientY; };
  private onOver = (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest?.('a, button');
    this.ringRef.nativeElement.classList.toggle('is-active', !!target);
  };

  ngAfterViewInit() {
    const hasFinePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer || prefersReducedMotion()) return;

    window.addEventListener('mousemove', this.onMove);
    window.addEventListener('mouseover', this.onOver);
    const tick = () => {
      this.rx += (this.dx - this.rx) * 0.15;
      this.ry += (this.dy - this.ry) * 0.15;
      this.dotRef.nativeElement.style.transform = `translate(${this.dx - 3}px, ${this.dy - 3}px)`;
      this.ringRef.nativeElement.style.transform = `translate(${this.rx - 18}px, ${this.ry - 18}px)`;
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', this.onMove);
    window.removeEventListener('mouseover', this.onOver);
    cancelAnimationFrame(this.raf);
  }
}
