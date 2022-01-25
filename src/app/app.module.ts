import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DefaultItemComponent } from './default-item/default-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustompipePipe } from './custompipe.pipe';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeroJobAdComponent } from './dynamic-component/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-component/hero-profile.component';
import { DynamicComponentDirective } from './dynamic-component/dynamic-component.directive';
import { AdComponent } from './dynamic-component/ad.component';
import { DynamicComponent } from './dynamic-component/dynamic.component';
import { DetailsComponent } from './details/details.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddUserComponent,
    ContactDetailsComponent,
    DefaultItemComponent,
    CustomDirectiveDirective,
    LoginComponent,
    NotFoundComponent,
    CustompipePipe,
    HeroJobAdComponent,
    HeroProfileComponent,
    DynamicComponentDirective,
    DynamicComponent,
    DetailsComponent,
    ViewCartComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
