import { Component, OnInit} from '@angular/core';
import { SuccessStoryService } from '../success_story.service';
import { environment } from 'src/environments/environment';
import { SuccessStory } from '../success_story.model';

@Component({
  selector: 'app-success_story',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']

})
export class SuccessStoryComponent  implements OnInit {

  rows = environment.table_rows;
  details: SuccessStory[] = [];
  cols: any[] = [];
  totalRecords: number =0;
  first: number=0;
  last: number=0;
  current_page: number=1;
  loading:boolean=true;
  public socialLinks:any=[];

  constructor(private success_story: SuccessStoryService) {}

  ngOnInit(): void {
    this.success_story.getOptions().subscribe({next: (data) => {
        this.socialLinks = data.socialLinks;
    }});
    this.success_story.getAll({params:{page:this.current_page,perPage:this.rows}}).subscribe({next: (data) => {
          this.details = data.data;
          this.totalRecords =  data.total;
          this.first = data.from;
          this.last = data.to;
          this.rows = data.per_page;
          this.current_page = data.current_page;
          this.loading = false;
        }
    });
  }

}
