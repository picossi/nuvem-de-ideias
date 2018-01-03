import { User } from './user.model';

export class Commentary{

    public get asJson() : string { return JSON.parse(JSON.stringify(this)); }

    constructor(
        public Id?: string,
        public Text?: string,
        public Author?: User,
        public Date?: number
    ){
        this.Date = this.getCurrentDate();
    }

    getCurrentDate() : number {
        return Date.now();
    }

}

