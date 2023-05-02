import { Component, OnInit} from '@angular/core';
import { CompanyGuide } from '../company_guide.model';
import { CompanyGuideService } from '../company_guide.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-company_guide_form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class CompanyGuideFormComponent  implements OnInit {

  public imageSrc:any;
  public imageFile :any='';
  public socialLinks:any=[];
  public countries:any=[];
  public cities:any=[];
  public item:CompanyGuide= {
    name: '',
    description: '',
    employment: '',
    logo: '',
    social_links: {},
    email:'',
    founded_year:'',
    website:'',
    country_id:'',
    city_id:'',
    street:'',
    address:'',
    phone:'',
    mobile:'',
    location_longitude:'',
    location_latitude:''
  };

  constructor(private company_guide: CompanyGuideService,private  messageService: MessageService) {}
  ngOnInit(): void { 
    this.company_guide.getOptions().subscribe({next: (data) => {
        this.socialLinks = data.socialLinks;
        this.countries = data.countries;
        this.cities = data.cities;
    }});
  }

  submitUpload(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.imageFile = event.target.files[0];
    reader.onload = (_event) => {
      this.imageSrc = reader.result; 
    }
  }

  onSubmit(): void {
    var myFormData = new FormData();
    for (const [key, value] of Object.entries(this.item)) {
      if(key != 'image' && key != 'social_links')
        myFormData.append(key+'', value+'');
    }
      
    myFormData.append('social_links', JSON.stringify(this.item.social_links));

    if(this.imageFile)
      myFormData.append('image', this.imageFile, this.imageFile.name);

    this.company_guide.create(myFormData).subscribe((data) => {
      this.messageService.add({severity:'success', summary:"",detail: data.message+""});
      this.imageSrc = undefined;
    },
    error => {
      if (error.status === 422) {
          var array = error.error.errors;
          Object.keys(array).forEach((key, index) => {
            for (const value of Object.values(array[key])) {
               this.messageService.add({severity:'error', summary:key+"", detail:value+""});
            }
          });
      }
    });

  }

}
