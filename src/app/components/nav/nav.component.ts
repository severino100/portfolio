import { Component, ChangeDetectionStrategy, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/i18n.service';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly i18n = inject(I18nService);
  readonly themeService = inject(ThemeService);
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }

  toggleMenu() {
    this.menuOpen.update(v => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleLang() { this.i18n.toggle(); }
  toggleTheme() { this.themeService.toggle(); }

  readonly navLinks = [
    { href: '#about',    num: '01', key: 'about'    as const },
    { href: '#work',     num: '02', key: 'work'     as const },
    { href: '#projects', num: '03', key: 'projects' as const },
    { href: '#life',     num: '04', key: 'life'     as const },
    { href: '#skills',   num: '05', key: 'skills'   as const },
  ];
}
