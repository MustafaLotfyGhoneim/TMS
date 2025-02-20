import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TaskListComponent = class TaskListComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.tasks = [];
    }
    ngOnInit() {
        this.loadTasks();
    }
    loadTasks() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
    deleteTask(id) {
        this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
};
TaskListComponent = __decorate([
    Component({
        selector: 'app-task-list',
        templateUrl: './task-list.component.html',
        styleUrls: ['./task-list.component.css']
    })
], TaskListComponent);
export { TaskListComponent };
//# sourceMappingURL=task-list.component.js.map