import { Component } from "@angular/core";

interface Game {
    title: string;
    price: number;
    img: string;
}

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent {
    games: Game[] = [
        {title: 'Minecraft', price: 4.50, img: 'https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP'},
        {title: 'Candy Crash', price: 7.89, img: 'https://media.pocketgamer.biz/2014/8/20830/candy-crush-art-r225x.jpg'},
        {title:'Counter Strike', price: 12.33, img: 'https://www.mobygames.com/images/shots/l/83832-counter-strike-condition-zero-windows-screenshot-title-screen.jpg'},
    ]

    handleExpandContentClick(): void{
        alert('Expand Clicked');
    }
}