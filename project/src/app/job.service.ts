import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  getJobSeeker(){
    return [
      {
        courseId:"react",
        name:"a",
        desingation:"developer",
        city:"hyderabad"
      },
      {
        courseId:"angular",
        name:"b",
        desingation:"developer",
        city:"hyderabad"
      },
      {
        courseId:"react",
        name:"c",
        desingation:"developer",
        city:"hyderabad"
      },
      {
        courseId:"react",
        name:"d",
        desingation:"developer",
        city:"hyderabad"
      },
      {
        courseId:"react",
        name:"e",
        desingation:"developer",
        city:"hyderabad"
      },
      {
        courseId:"react",
        name:"f",
        desingation:"developer",
        city:"hyderabad"
      },
      {
        courseId:"react",
        name:"abc",
        desingation:"developer",
        city:"hyderabad"
      },
    ]
  }

  getProductsSmall(){
    return Promise.resolve(this.getJobSeeker())
  }


  constructor() { }
}
