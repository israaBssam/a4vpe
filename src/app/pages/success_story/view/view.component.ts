import { Component, OnInit,ViewChild} from '@angular/core';
import { SuccessStory } from '../success_story.model';
import { SuccessStoryService } from '../success_story.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from "@angular/router";
import { DialogService } from 'primeng/dynamicdialog';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-success_story_view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']

})
export class SuccessStoryViewComponent  implements OnInit {
  
  public id = 0;
  public socialLinks;
  public item:SuccessStory= {
    title: '',
    description: '',
    job_title: '',
    image: '',
    social_links: {},
    published_date:'',
    publisher:'',
    
    
  };

  
  constructor(private success_story: SuccessStoryService,private route: ActivatedRoute) {}

  ngOnInit(): void { 

    this.id = this.route.snapshot.params['id'];
    this.success_story.get(this.id).subscribe({next: (data) => {
        this.item = data.item;
        this.socialLinks = data.socialLinks;

    }});

  }



}
