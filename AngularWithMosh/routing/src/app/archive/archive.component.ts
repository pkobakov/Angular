import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  year!: number;
  month!: number;

  ngOnInit(): void {
    let params =this.route.snapshot.paramMap;
    this.year = Number(params.get('year'));
    this.month = Number(params.get('month'));
  }

  viewAll(){
    this.router.navigate(['/']);
  }

}
