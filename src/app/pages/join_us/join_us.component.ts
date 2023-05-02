import { Component, OnInit,ViewChild} from '@angular/core';
import { JoinUsService } from './join_us.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-join_us',
  templateUrl: './join_us.component.html',
  styleUrls: ['./join_us.component.css']
})
export class JoinUsComponent {
  public details:any={contact_information:''};

   public center;

   display: any;
    
    zoom = 4;
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    markerPositions: google.maps.LatLngLiteral[] = [];
    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow != undefined) this.infoWindow.open(marker);
    }
  public item:any= {first_name: '',last_name: '',email: '',message: ''};

  constructor(private join_us: JoinUsService,private  messageService: MessageService) {}
  ngOnInit() {
      this.join_us.getAll().subscribe({next: (data) => {
          this.details = data;
      }
    });
  }

  onSubmit(): void {
    var myFormData = new FormData();
    for (const [key, value] of Object.entries(this.item)) {
        myFormData.append(key+'', value+'');
    }
      
    this.join_us.create(myFormData).subscribe((data) => {
      this.item = {first_name: '',last_name: '',email: '',message: ''};
      this.messageService.add({severity:'success', summary:"",detail: data.message+""});
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
