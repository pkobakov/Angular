import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

 

  ngOnInit(): void {
    
  }

  public readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  
  public toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === "Show Image"? "Hide Image": "Show Image";
  }

  public hideDesc(): void {
    this.descToShow = " ";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }




}
