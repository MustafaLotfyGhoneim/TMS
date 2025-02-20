import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    status: 'To Do',
    dueDate: new Date().toISOString().slice(0, 10) 
  };
  isEditMode = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id'); 
    if (taskId) {
      this.isEditMode = true;
      this.taskService.getTask(+taskId).subscribe(task => this.task = task);
    }
  }

  saveTask() {
    if (this.isEditMode) {
      this.taskService.updateTask(this.task.id!, this.task).subscribe(() => {
        this.router.navigate(['/tasks']); 
      });
    } else {
      this.taskService.createTask(this.task).subscribe(() => {
        this.router.navigate(['/tasks']); 
      });
    }
  }
}
