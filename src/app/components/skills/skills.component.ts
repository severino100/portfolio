import { Component, ChangeDetectionStrategy, ElementRef, OnDestroy, inject, signal, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { SKILL_GROUPS, LANGUAGES, SkillItem, LangItem } from '../../core/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  readonly i18n = inject(I18nService);
  readonly groups = SKILL_GROUPS;
  readonly langs = LANGUAGES;

  readonly barLevels = signal(new Map<string, number>());
  private observers: IntersectionObserver[] = [];

  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.skillBars.forEach((ref, idx) => {
      const allItems = [...this.groups.flatMap(g => g.items), ...this.langs];
      const item = allItems[idx];
      if (!item) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setTimeout(() => {
              const pct = typeof item.level === 'number' ? item.level : (item as LangItem).pct;
              this.barLevels.update(levels => new Map(levels).set(item.name, pct));
            }, 80);
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(ref.nativeElement);
      this.observers.push(io);
    });
  }

  ngOnDestroy() { this.observers.forEach(o => o.disconnect()); }

  getLevel(name: string) { return this.barLevels().get(name) ?? 0; }
  ticks = Array.from({ length: 24 });
}
