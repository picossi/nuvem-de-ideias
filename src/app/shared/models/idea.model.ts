import { User } from './user.model';
import { Commentary } from './commentary.model';
import * as firebase from 'firebase/app';

export class Idea {

  public get asJson(): string { return JSON.parse(JSON.stringify(this)); }

  constructor(
    public Id?: string,
    public Title?: string,
    public Description?: string,
    public UpVote?: number,
    public DownVote?: number,
    public Author?: firebase.User,
    public Comments?: boolean,
    public Removed?: boolean,
    public Votes?: any
  ) { }
}
