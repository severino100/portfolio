import { Component, inject, signal, computed, OnInit, OnDestroy, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from './core/i18n.service';
import { ThemeService } from './core/theme.service';
import { prefersReducedMotion } from './core/reduced-motion';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  readonly i18n = inject(I18nService);
  readonly themeService = inject(ThemeService);
  readonly loaded = signal(false);

  readonly bootLines = ['$ git checkout ruben-severino', '$ npm run build --prod', '✓ ready in 428ms'];
  readonly typedLines = signal<string[]>(this.bootLines.map(() => ''));
  readonly bootDone = signal(false);

  readonly railSections = [
    { id: 'about', num: '01' },
    { id: 'work', num: '02' },
    { id: 'projects', num: '03' },
    { id: 'life', num: '04' },
    { id: 'skills', num: '05' },
  ];
  readonly sectionIds = ['hero', 'about', 'work', 'projects', 'life', 'skills', 'contact'];
  readonly activeSection = signal('hero');
  readonly isFirstSection = computed(() => this.sectionIds.indexOf(this.activeSection()) <= 0);
  readonly isLastSection = computed(() => this.sectionIds.indexOf(this.activeSection()) >= this.sectionIds.length - 1);

  private observer!: IntersectionObserver;
  private sectionObserver!: IntersectionObserver;
  private bootTimer?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.themeService.theme());
    this.runBoot();
  }

  ngAfterViewInit() {
    this.setupReveal();
    this.setupSectionSpy();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.sectionObserver?.disconnect();
    clearTimeout(this.bootTimer);
  }

  private runBoot() {
    if (prefersReducedMotion()) {
      this.typedLines.set([...this.bootLines]);
      this.bootDone.set(true);
      this.bootTimer = setTimeout(() => this.loaded.set(true), 150);
      return;
    }

    let line = 0;
    let char = 0;
    const tick = () => {
      if (line >= this.bootLines.length) {
        this.bootDone.set(true);
        this.bootTimer = setTimeout(() => this.loaded.set(true), 250);
        return;
      }
      const text = this.bootLines[line];
      char++;
      this.typedLines.update(lines => {
        const next = [...lines];
        next[line] = text.slice(0, char);
        return next;
      });
      if (char >= text.length) {
        line++;
        char = 0;
        this.bootTimer = setTimeout(tick, 140);
      } else {
        this.bootTimer = setTimeout(tick, 8 + Math.random() * 14);
      }
    };
    this.bootTimer = setTimeout(tick, 120);
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

  private setupSectionSpy() {
    this.sectionObserver = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) this.activeSection.set(e.target.id);
      }),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    this.sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.sectionObserver.observe(el);
    });
  }

  goToSection(delta: number) {
    const idx = this.sectionIds.indexOf(this.activeSection());
    const nextIdx = Math.min(Math.max(idx + delta, 0), this.sectionIds.length - 1);
    const el = document.getElementById(this.sectionIds[nextIdx]);
    el?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }
}
