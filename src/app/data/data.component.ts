import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component ({
    selector: 'data-component',
    template: '<div *ngIf="!Isshow"><h2>Cricker Info</h2><input [(ngModel)]="pname"><h3>Player Name:{{pname}}</h3></div>'
	+'<button *ngIf="!Isshow" (click)="showMore()">Showmore</button>'
	+'<div *ngIf="Isshow"><h2>Cricker Info</h2><input [(ngModel)]="pname"><h3>Player Name:{{pname}}</h3><h3>Player jersy no:{{playerjersyno}}</h3><h3>Player Dob:{{playerdateofbirth}}</h3>'
     +'<hr>'
     +'<table class="table"><thead><th>Player Name</th><th>Player Average</th><th>Rankings</th></thead><tbody><tr *ngFor="let cricketer of posts"><td>{{cricketer.playername}}</td><td>{{cricketer.Avg}}</td><td>{{cricketer.Rankings}}</td></tr></tbody></table>'
    +'</div>'
	+'<button *ngIf="Isshow" (click)="showLess()">Showless</button>',
    providers:[PostService]
})

export class DataComponent {
    Isshow:boolean =false;
        pname:string ="Virat kholi";
        playerjersyno:number=17;
        playerdateofbirth:string="16/03/1989";
        posts:post[];

        constructor(private postservice:PostService){ 
            this.postservice.getposts().subscribe(posts => {
            this.posts=posts;
        });
  }
	showMore(){
		this.Isshow = true;
	}
	showLess(){
		this.Isshow = false;
	}
}
interface post{
    playername:string;
    Avg:number;
    Rankings:number;
}