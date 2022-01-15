import {Controller, Post, Body, HttpStatus, Res, Get, Param, Put, Patch, Delete} from "@nestjs/common"
import { Response } from 'express';
import { TaskService } from "./tasks.service"

@Controller('tasks')
export class TasksController{
    constructor(private readonly tasksService: TaskService) {}
    @Post()
    addTask(@Body('description') desc:string, @Body('responsible') resp:string, @Res() res: Response ){
        const task = this.tasksService.addTasks(desc,resp);
        res.status(HttpStatus.OK).json([task]);
    }

    @Get()
    getAll(@Res() res: Response){
        const tasks = this.tasksService.allTasks();
        res.status(HttpStatus.OK).json([tasks]);
        return tasks;
    }

    @Get(':id')
    getOne(@Param('id') id:number, @Res() res: Response){
        const task = this.tasksService.oneTask(id);
        res.status(HttpStatus.OK).json([task]);
        return task;
    }
    
    @Patch(':id')
    updateTask(@Param('id') id:number, @Body('description') desc:string, @Body('responsible') resp:string,@Res() res: Response){
        const task = this.tasksService.updateTask(id, desc, resp);
        res.status(HttpStatus.OK).json([task]);
        return task;
    }

    @Delete(':id')
    removeTask(@Param('id') id:number, @Res() res: Response){
        this.tasksService.delete(id);
        res.status(HttpStatus.OK).json([]);
        return {};
    }
}