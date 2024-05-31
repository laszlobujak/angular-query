import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAngularQuery, QueryClient } from '@tanstack/angular-query-experimental';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule), 
    provideAnimationsAsync(),
    provideAngularQuery(new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity
        }
      }
    }))
  ]
};
