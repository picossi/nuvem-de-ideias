export class User{
    constructor(
        public isLogged : boolean = false,
        public Id?: string,
        public Name?: string,
        public Email?: string,
        public photoURL?: string
    ){}
}