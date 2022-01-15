import { Injectable, NotFoundException } from "@nestjs/common";
import { runInThisContext } from "vm";
import {Task} from "./task.model"
@Injectable()
export class TaskService {
    tasks: Task[] = []
    id =0;

    addTasks(desc: string, res: string){
        const newtask = new Task(this.id, desc,res,new Date());
        this.tasks.push(newtask);
        this.id ++;
        return newtask;
    }

    allTasks(){
        return [...this.tasks];
    }

    oneTask(id:number){
        const task = this.tasks.find((task) => task.id == id);
        if (!task){
            throw new NotFoundException('Task not found');
        }
        else{
            return {...task};
        }
    }

    updateTask(id: number, desc: string, res: string){
        const task = this.tasks.find((task) => task.id == id);
        if (!task){
            throw new NotFoundException('Task not found');
        }
        else{
            id = this.tasks.indexOf(task)
           if(desc){
               this.tasks[id].description = desc;
           }
           if(res){
               this.tasks[id].responsible = res;
           }
           return {...this.tasks[id]};
        }
    }

    delete(id:number){
        const task = this.tasks.find((task) => task.id == id);
        if (!task){
            throw new NotFoundException('Task not found');
        }
        else{
            id = this.tasks.indexOf(task)
           this.tasks.splice(id,1);
        }
    }
}