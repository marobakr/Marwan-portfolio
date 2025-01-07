import { APP_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { AppModule } from './app/app.module';

export function initializeApp(): () => Promise<void> {
  return (): Promise<void> =>
    new Promise<void>((resolve) => {
      // Inject Speed Insights
      injectSpeedInsights();
      resolve();
    });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        multi: true,
      },
    ],
  })
  .catch((err) => console.error(err));
