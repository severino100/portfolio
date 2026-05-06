import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div #dot class="cursor-dot" aria-hidden="true"></div>
    <div #ring class="cursor-ring" aria-hidden="true"></div>
  `,
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dot') dotRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ring') ringRef!: ElementRef<HTMLDivElement>;

  private dx = 0; private dy = 0; private rx = 0; private ry = 0;
  private raf = 0;
  private onMove = (e: MouseEvent) => { this.dx = e.clientX; this.dy = e.clientY; };

  ngAfterViewInit() {
    window.addEventListener('mousemove', this.onMove);
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
    cancelAnimationFrame(this.raf);
  }
}
