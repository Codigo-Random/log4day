import { Task } from "./task";

export interface DayTasks {
    date: Date;
    isCurrentMonth: boolean;
    tasks: Array<Task>;
}
