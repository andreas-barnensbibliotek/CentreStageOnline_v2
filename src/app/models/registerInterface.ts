import { Injectable } from '@angular/core';

export interface registeruser {
    post_title : string;
    language: string;
    gender : string;
    befattning : string
}

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export abstract class registerusersformdata{

    abstract registerdata():registeruser   

}