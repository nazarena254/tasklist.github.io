export class Task {
    // id!: number;
    // name!: string;
    // description!:string;
    showDescription:boolean;
    constructor(public id: number,public name: string,public description: string){
       this.showDescription = false;
    }
}
