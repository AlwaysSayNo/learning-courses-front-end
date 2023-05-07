import { Injectable } from '@angular/core';
import {CourseTemplate} from "../../shared/model/CourseTemplate";

@Injectable({
  providedIn: 'root'
})
export class CourseTemplateService {

  constructor() { }

  getAll(): CourseTemplate[] {
    return [
      {
        id: 1,
        title: 'C++ super course',
        description: 'This course will help you to learn basics of such language as C++.'
      },
      {
        id: 2,
        title: 'JavaRush course',
        description: 'The Java course is divided into 40 levels. You can move to the next level only if you have solved most of the problems of the current level.'
      },
      {
        id: 3,
        title: 'Docker from zero to hero',
        description: 'Work out at your own pace, with the regularity that suits you. You do not have to wait for a group to get together and adjust to a rigid schedule.'
      }
    ]
  }

}
