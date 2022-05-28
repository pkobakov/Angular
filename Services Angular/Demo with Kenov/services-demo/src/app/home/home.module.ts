import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home.component";
import { HomeService } from "../Services/homeService";
import { AboutComponent } from "../about/about.component";



@NgModule({
    declarations:[
        HomeComponent,
        AboutComponent],

    imports: [
        CommonModule,
        HttpClientModule],

    exports:[HomeComponent],

    providers: [HomeService]
})

export class HomeModule {
 constructor(){ 
     
 }
}