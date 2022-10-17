import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { SharedServiceModule } from '@ado-bcp-ui/shared-service';
import { LoginComponent } from './components/login.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '1ed13e1b-5411-401c-8802-3adfd7974f1a',
      redirectUri: 'http://localhost:4200',
    },
  });
}
@NgModule({
  imports: [CommonModule, MsalModule, SharedServiceModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
})
export class LoginModule {}
