import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:7112/api/tasks';
    }
    getTasks() {
        return this.http.get(this.apiUrl);
    }
    getTask(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    createTask(task) {
        return this.http.post(this.apiUrl, task);
    }
    updateTask(id, task) {
        return this.http.put(`${this.apiUrl}/${id}`, task);
    }
    deleteTask(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
};
TaskService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TaskService);
export { TaskService };
//# sourceMappingURL=task.service.js.map