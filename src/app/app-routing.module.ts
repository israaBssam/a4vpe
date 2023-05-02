import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//website imports
import { HomeLayoutComponent } from './containers';
import { HomeComponent } from './pages/home/home.component';
import { CompanyGuideComponent } from './pages/company_guide/index/index.component';
import { CompanyGuideFormComponent } from './pages/company_guide/form/form.component';
import { CompanyGuideViewComponent } from './pages/company_guide/view/view.component';
import { SuccessStoryComponent } from './pages/success_story/index/index.component';
import { SuccessStoryViewComponent } from './pages/success_story/view/view.component';
import { AboutUsComponent } from './pages/about_us/index/index.component';
import { DirectorComponent } from './pages/about_us/director_details/director_details.component';
import { ContactUsComponent } from './pages/contact_us/contact_us.component';
import { ForOurPartnerComponent } from './pages/for_our_partner/for_our_partner.component';
import { MajorInvestmentComponent } from './pages/resources/major_investments/major_investments.component';
import { JoinUsComponent } from './pages/join_us/join_us.component';
import { DonateComponent } from './pages/donate/donate.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'companies-guides',
        title:'Company Guide Page',
        component: CompanyGuideComponent
      },
      {
        path: 'add-company',
        title:'Add Company Page',
        component: CompanyGuideFormComponent
      },
      {
        path: 'company-guide/:id',
        title:'Company Guide',
        component: CompanyGuideViewComponent
      },
      {
        path: 'success-stories',
        title:'Success Stories',
        component: SuccessStoryComponent
      },
      {
        path: 'success-story/:id',
        title:'Success Story',
        component: SuccessStoryViewComponent
      },
      {
        path: 'about_us',
        title:'About Us',
        component: AboutUsComponent
      },
      {
        path: 'director/:id',
        title:'Operations Team',
        component: DirectorComponent
      },
      {
        path: 'contact_us',
        title:'Contact Us',
        component: ContactUsComponent
      },
      {
        path: 'for_our_partners',
        title:'For Our Partners',
        component: ForOurPartnerComponent
      },
      {
        path: 'resources',
        title:'Resources',
        component: MajorInvestmentComponent
      },
      {
        path: 'join_us',
        title:'Join Us',
        component: JoinUsComponent
      },
      {
        path: 'donate',
        title:'Donate',
        component: DonateComponent
      },{
        path: 'volunteer',
        title:'Volunteer',
        component: VolunteerComponent
      },
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
       useHash: true,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
