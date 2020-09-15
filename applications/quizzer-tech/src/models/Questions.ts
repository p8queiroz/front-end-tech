export interface Question {
  id: number;
  answer: string;
  description: string;
  isActive: string;
  level: string;
  picture: string;
  technology: string;
}

export interface ScheduleGroup {
  time: string;
  sessions: Session[];
}

export interface Session {
  id: number;
  timeStart: string;
  timeEnd: string;
  name: string;
  location: string;
  description: string;
  speakerNames: string[];
  tracks: string[];
}
