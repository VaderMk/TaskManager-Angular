import { Component, } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  task: Task = {
    title: '',
    subject: '',
    published: false
  }
  submitted = false;

  constructor(private taskService: TaskService) { }

  saveTask(): void {
    const data = {
      title: this.task.title,
      subject: this.task.subject
    };

    this.taskService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      title: '',
      subject: '',
      published: false
    };
  }
}
