import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Notes} from '../Notes';

@Injectable()
export class NotesService {

  urlNotes:string = 'http://localhost:3000/notes';
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http:Http) { }

  getNotes():Promise<Notes[]> {
    return this._http
            .get(this.urlNotes)
            .toPromise()
            .then((response: Response) => response.json() as Notes[])
            .catch(this.handleError);
  }

  create(newNotes: Notes){
    return this._http
              .post(this.urlNotes, JSON.stringify(newNotes), {headers: this.headers})
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError);
  }

  delete(id:number){
    return this._http
            .delete(this.urlNotes + '/' + id, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
  

}
