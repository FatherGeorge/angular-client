import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  response: {};

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getAll().subscribe(data => {
      this.response = data;
    });
  }

}
