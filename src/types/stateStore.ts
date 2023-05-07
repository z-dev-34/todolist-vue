export interface IState {
    todos:ITodo[];
}

export interface ITodo {
    id:number;
    title:string;
    done:boolean;
}