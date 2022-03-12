import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
