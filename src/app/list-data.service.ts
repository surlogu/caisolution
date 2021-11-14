

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ListDataService {

    constructor(private _http: HttpClient){}

    getData(){
        return this._http.get("http://jsonplaceholder.typicode.com/posts")


    }

}
