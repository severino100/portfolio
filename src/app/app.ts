import { Component, inject, signal, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from './core/i18n.service';
import { CursorComponent } from './components/cursor/cursor.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LifeComponent } from './components/life/life.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CursorComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,
    LifeComponent,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  readonly i18n = inject(I18nService);
  readonly loaded = signal(false);
  readonly theme = signal<'light' | 'dark'>('dark');

  private observer!: IntersectionObserver;

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.theme());
    setTimeout(() => this.loaded.set(true), 80);
  }

  ngAfterViewInit() {
    this.setupReveal();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  toggleTheme() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', this.theme());
  }

  private setupReveal() {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          this.observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal-section').forEach(el => this.observer.observe(el));
  }
}
