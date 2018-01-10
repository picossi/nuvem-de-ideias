
import * as firebase from 'firebase/app';
export class User {

  public get asJson(): string { return JSON.parse(JSON.stringify(this)); }

  constructor(
    public isLogged?: boolean,
    public Id?: string,
    public Name?: string,
    public Email?: string,
    public photoURL?: string,
  ) { }

  public static fromFirebase(user: firebase.User, isLogged: boolean): User {
    return new User(isLogged, user.displayName, user.email, user.photoURL);
  }
}
