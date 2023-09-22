import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, asNativeElements } from '@angular/core';
import { JobService } from "./../job.service"

@Component({
  selector: 'app-job-seekers',
  templateUrl: './job-seekers.component.html',
  styleUrls: ['./job-seekers.component.css']
})
export class JobSeekersComponent implements OnInit {
  popUpComponentClick:boolean = false
  jobSeekers: any[] = []
  resultJobSeekers: any[] = []
  jobSeekerTable: any = []
  isPersonClicked: boolean = false
  popUpText:string;

  @Input() technology: any

  cols!: any[];


  constructor(private JServic: JobService) { 
  }

  ngOnInit(): void {
    this.jobSeekers = this.JServic.getJobSeeker()
    this.jobSeekerTable = this.jobSeekers.filter(obj => obj.courseId == this.technology)
    // this.showTechnology(
    
    
  }

  showTechnology() {


    // for (const jobSeeker of this.jobSeekers) {
    //   if ('name' in jobSeeker) {
    //     if (jobSeeker.courseId == this.technology){
    //       this.resultJobSeekers = [...this.resultJobSeekers,jobSeeker]
    //       console.log(this.resultJobSeekers)
    //       this.jobSeekerTable = this.resultJobSeekers

    //     }
    //   }
    // }
  }

  fromJobSeekerValue: boolean = false
  @Output() fromJobSeeker = new EventEmitter<boolean>()
  goBackButton() {
    this.fromJobSeeker.emit(this.fromJobSeekerValue)
  }

  // @ViewChild ("courseIdName") courseIdName = ElementRef

  clickedJobSeeker(name:any) {
    this.popUpText = name
    this.popUpComponentClick = true
    console.log(this.popUpComponentClick)
    
  }
  
}
