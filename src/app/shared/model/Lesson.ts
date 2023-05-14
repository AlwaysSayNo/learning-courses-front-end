export interface Lesson {

  id: number;
  title: string;
  description: string;
  number: number;
  isFinished: boolean;
  maxMark: number;
  successMark: number;
  chapterId: number;
  courseId: number;

}
