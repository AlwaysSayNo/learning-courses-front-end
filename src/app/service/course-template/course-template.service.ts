import {Injectable} from '@angular/core';
import {CourseTemplate} from "../../shared/model/CourseTemplate";
import {removeIf} from "../../utility/array-utility";

@Injectable({
  providedIn: 'root'
})
export class CourseTemplateService {

  templates!: CourseTemplate[];

  constructor() {
    this.init()
  }

  init(): void {
    this.templates = [
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

  getAll(): CourseTemplate[] {
    return this.templates
  }

  getById(id: number): CourseTemplate {
    const filtered = this.templates.filter(t => t.id == id)
    if (filtered.length == 0) {
      throw new Error(`No template with id: ${id}`)
    }

    return filtered[0]
  }

  add(template: CourseTemplate): void {
    this.templates.push(template)
  }

  delete(id: number): void {
    this.templates = removeIf(this.templates, (t) => t.id == id);
  }
}
