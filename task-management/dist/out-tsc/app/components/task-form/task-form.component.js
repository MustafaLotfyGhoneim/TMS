import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TaskFormComponent = class TaskFormComponent {
    constructor(taskService, route, router) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.task = {
            title: '',
            description: '',
            status: 'To Do',
            dueDate: new Date().toISOString().slice(0, 10)
        };
        this.isEditMode = false;
    }
    ngOnInit() {
        const taskId = this.route.snapshot.paramMap.get('id');
        if (taskId) {
            this.isEditMode = true;
            this.taskService.getTask(+taskId).subscribe(task => this.task = task);
        }
    }
    saveTask() {
        if (this.isEditMode) {
            this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
                this.router.navigate(['/tasks']);
            });
        }
        else {
            this.taskService.createTask(this.task).subscribe(() => {
                this.router.navigate(['/tasks']);
            });
        }
    }
};
TaskFormComponent = __decorate([
    Component({
        selector: 'app-task-form',
        templateUrl: './task-form.component.html',
        styleUrls: ['./task-form.component.css']
    })
], TaskFormComponent);
export { TaskFormComponent };
//# sourceMappingURL=task-form.component.js.map