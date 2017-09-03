import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Business } from '../Business';
import { Category } from '../Category';

@Injectable()
export class FirebaseService{
    businesses: FirebaseListObservable<Business[]>;
    cateogories: FirebaseListObservable<Category[]>;

    constructor(private _ad: AngularFireDatabase){

    }

    getBusinesses(){
        this.businesses = this._ad.list('/businesses') as FirebaseListObservable<Business[]>;
        return this.businesses;
    }

    getCategories(){
        this.cateogories = this._ad.list('/categories') as FirebaseListObservable<Category[]>;
        return this.cateogories;
    }

}