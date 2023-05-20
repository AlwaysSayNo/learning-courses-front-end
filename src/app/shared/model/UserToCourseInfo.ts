import {User} from "./User";
import {Course} from "./Course";

export interface UserToCourseInfo {

  mark: number;
  isPassed: boolean;
  finalFeedback: string;
  user: User;
  course: Course;

}
