import { Component,OnInit } from '@angular/core';
import { JobService } from "./job.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[JobService]
})
export class AppComponent implements OnInit{
  showDefaultPage:boolean = false
  jobSeekers:any[] = []
  resultJobSeekers:any[] = []
  jobSeeker = {}
  courseId:string = ""
  jobSeekerTable :any = []
  technology: any;


  goBack(){
    this.showDefaultPage = true
  }

  getJobSeeker(technology:string) {
    this.technology = technology  
    this.showDefaultPage = true
  }

  getJobSeekersListReact(){
    this.showDefaultPage = false
    this.jobSeekers = this.JServic.getJobSeeker()
    for (const jobSeeker of this.jobSeekers) {
      if ('name' in jobSeeker) {
        if (jobSeeker.courseId == "react"){
          this.resultJobSeekers = [...this.resultJobSeekers,jobSeeker]
          console.log(this.resultJobSeekers)
          this.jobSeekerTable = this.resultJobSeekers

        }
      }
    }
  }
  getAngularJobSeekerList(){
    this.showDefaultPage = false 
    this.jobSeekers = this.JServic.getJobSeeker()
    for (const jobSeeker of this.jobSeekers){
      if ("name" in jobSeeker){
        if(jobSeeker.courseId == "angular"){
          this.resultJobSeekers = [...this.resultJobSeekers,jobSeeker]
          this.jobSeekerTable = this.resultJobSeekers
        }
      }
    }
  }
  constructor(private JServic:JobService){

  }
  ngOnInit(): void {
    
  }
  fromJobSeekerValueReceived(valueReceived:boolean){
    this.showDefaultPage = valueReceived
  }
  clickOnProfile(){
    this.showDefaultPage = false
    
  }
}
