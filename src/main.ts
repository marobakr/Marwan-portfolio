import { APP_INITIALIZER, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: () => () => {
          inject({ mode: isDevMode() ? 'development' : 'production' });
        },
        multi: true,
        
      },
    ],
  })
  .catch((err) => console.error(err));
