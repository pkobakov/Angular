
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../Services/homeService';
import { GithubProfile } from './github-profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  somedata!: string;
  profile!: GithubProfile

  constructor(private homeService: HomeService,
    private httpClient: HttpClient,
    private router: Router){

    this.somedata = homeService.getData();
    
  }


  ngOnInit(): void {
    this.homeService
        .getGithubProfile('pkobakov')
        .subscribe(data => this.profile = data);
  }

}
