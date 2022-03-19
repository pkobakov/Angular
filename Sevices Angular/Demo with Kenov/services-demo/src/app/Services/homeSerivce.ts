import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
    getData(){
        return 'Welcome to my home service';
    }
}