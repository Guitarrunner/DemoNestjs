export class Task {
    id: number;
    description: string;
    responsible: string;
    date: Date;
    constructor(id: number, description: string, responsible: string, date:Date){
        this.id = id;
        this.description = description
        this.responsible = responsible;
        this.date = date;
    };
}