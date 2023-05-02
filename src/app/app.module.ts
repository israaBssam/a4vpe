import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy ,CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeVideoComponent } from './pages/home/video/home_video.component';
import { CompanyGuideComponent } from './pages/company_guide/index/index.component';
import { CompanyGuideFormComponent } from './pages/company_guide/form/form.component';
import { CompanyGuideViewComponent } from './pages/company_guide/view/view.component';
import { ShareProfileComponent } from './pages/company_guide/share_profile/share_profile.component';
import { SuccessStoryComponent } from './pages/success_story/index/index.component';
import { SuccessStoryViewComponent } from './pages/success_story/view/view.component';
import { AboutUsComponent } from './pages/about_us/index/index.component';
import { DirectorComponent } from './pages/about_us/director_details/director_details.component';
import { ContactUsComponent } from './pages/contact_us/contact_us.component';
import { ForOurPartnerComponent } from './pages/for_our_partner/for_our_partner.component';
import { JoinUsComponent } from './pages/join_us/join_us.component';
import { DonateComponent } from './pages/donate/donate.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';

import { MajorInvestmentComponent } from './pages/resources/major_investments/major_investments.component';

import { TimeFormat } from './pipes/time12h.pipe';

// Import containers
import {
  WebsiteFooterComponent,
  WebsiteHeaderComponent,
  HomeLayoutComponent,
} from './containers';

const WEBSITE_CONTAINERS = [
  WebsiteFooterComponent,
  WebsiteHeaderComponent,
  HomeLayoutComponent,
];

const COMPONENTS = [
  HomeComponent,
  CompanyGuideComponent,
  CompanyGuideFormComponent,
  CompanyGuideViewComponent,
  ShareProfileComponent,
  SuccessStoryComponent,
  SuccessStoryViewComponent,
  AboutUsComponent,
  DirectorComponent,
  ContactUsComponent,
  ForOurPartnerComponent,
  MajorInvestmentComponent,
  JoinUsComponent,
  DonateComponent,
  VolunteerComponent
];

import { AppRoutingModule } from './app-routing.module';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { primeNgModules, primeServices } from './primeng.modules';
import { FormsModule } from '@angular/forms';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [
    AppComponent,
    WEBSITE_CONTAINERS,
    COMPONENTS,
    TimeFormat

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    primeNgModules,
    BrowserAnimationsModule,
    FormsModule,
    ShareButtonsModule,
    ShareIconsModule,
    GoogleMapsModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    primeServices
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//     return new TranslateHttpLoader(http);
// }