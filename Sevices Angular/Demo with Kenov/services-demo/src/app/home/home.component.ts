
import { Component, OnInit} from '@angular/core';
import { HomeService } from '../Services/homeSerivce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  somedata!: string;

  constructor(private homeService: HomeService){

    this.somedata = homeService.getData();
    
  }


  ngOnInit(): void {
  }

}
