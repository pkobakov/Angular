import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
   let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    // this.route.paramMap
    //           .subscribe(params => {
    //            let id = +(params.get('id'))!;
    //            console.log(id);
    //           })

    // console.log('GithubProfile OnInit');
  }

  submit(){
    this.router.navigate(['/followers'], {queryParams: {page: 1, order: 'newest'}
    });
  }

}
