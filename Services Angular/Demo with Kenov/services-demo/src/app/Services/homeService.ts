import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GithubProfile } from "../home/github-profile";

@Injectable()
export class HomeService {

    constructor(private httpClient: HttpClient){

    }
    getData(){
        return 'Welcome to my home service';
    }

    getGithubProfile(profile: string){
     const url = `https://api.github.com/users/${profile}`   
     return this.httpClient.get<GithubProfile>(url);
    }
}



