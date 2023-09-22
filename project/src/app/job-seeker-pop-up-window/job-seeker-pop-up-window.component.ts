import { Component, Input,OnInit ,OnChanges, SimpleChanges,Output,EventEmitter } from '@angular/core';
import { JobService } from "./../job.service"

@Component({
  selector: 'app-job-seeker-pop-up-window',
  templateUrl: './job-seeker-pop-up-window.component.html',
  styleUrls: ['./job-seeker-pop-up-window.component.css']
})
export class JobSeekerPopUpWindowComponent implements OnInit {

  visible:any = false
  jobSeeker:any = []
  @Input()popUpComponentClick;
  
  popUpTextFunction(){
    this.visible = this.popUpComponentClick

  }
  
  ngOnInit(){
    console.log("noOnInit")
  }
  

  



  // constructor(private JService:JobService){}


}
