import { Component, OnInit,ViewChild} from '@angular/core';
import { CompanyGuide } from '../company_guide.model';
import { CompanyGuideService } from '../company_guide.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from "@angular/router";
import { DialogService } from 'primeng/dynamicdialog';
import { ShareProfileComponent } from '../share_profile/share_profile.component';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-company_guide_view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']

})
export class CompanyGuideViewComponent  implements OnInit {
  
  public id = 0;
  public socialLinks;
  public city;
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

  
  constructor(private company_guide: CompanyGuideService,private route: ActivatedRoute,private  messageService: MessageService,
    public dialogService: DialogService) {}
    public center;

   display: any;
    
    zoom = 4;
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    markerPositions: google.maps.LatLngLiteral[] = [];

  ngOnInit(): void { 

    this.id = this.route.snapshot.params['id'];
    this.company_guide.get(this.id).subscribe({next: (data) => {
        this.item = data.item;
        this.city = data.item.city.name;
        this.socialLinks = data.socialLinks;
        this.center = {
            lat: parseFloat(data.item.location_latitude),
            lng: parseFloat(data.item.location_longitude)
        };

    }});

  }
    
    
    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow != undefined) this.infoWindow.open(marker);
    }

  shareSocialMedia() {
    const ref = this.dialogService.open(ShareProfileComponent, {
        header: 'Share Profile',
        width: '30%'
    }); 
  }


}
