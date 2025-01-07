import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationsService {
  private readonly _translateService = inject(TranslateService);
  private _renderer2!: Renderer2;
  private readonly _platId = inject(PLATFORM_ID);
  private isBrowser!: boolean;

  constructor(rendererFactory: RendererFactory2) {
    this.isBrowser = isPlatformBrowser(this._platId); // Check once if it's the browser
    this._renderer2 = rendererFactory.createRenderer(null, null);
    /* Check if a language is already set in localStorage */
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        /* Use the saved language */
        this._translateService.use(savedLang);
      } else {
        /* Set the default language to 'en' if no language is saved */
        this._translateService.setDefaultLang('en');
        localStorage.setItem('lang', 'en');
        this._translateService.use('en');
      }
      /* Change direction based on the language */
      this.changeDirection();
    } else {
      /* Set the default language to 'en' on the server side */
      this._translateService.setDefaultLang('en');
    }
  }

  changeDirection(): void {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'ar') {
        this._renderer2.setAttribute(document.documentElement, 'dir', 'rtl');
        this._renderer2.setAttribute(document.documentElement, 'lang', 'ar');
      } else if (savedLang === 'en') {
        this._renderer2.setAttribute(document.documentElement, 'dir', 'ltr');
        this._renderer2.setAttribute(document.documentElement, 'lang', 'en');
      }
    }
  }

  changeLang(lang: string): void {
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
      this._translateService.use(lang);
      this.changeDirection();
    }
  }
}
