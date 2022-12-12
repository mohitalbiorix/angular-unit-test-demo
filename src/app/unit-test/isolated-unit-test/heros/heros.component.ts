import { Component, OnInit } from '@angular/core';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit{

  heroes : [] = [];
  constructor(
    private heroService: HeroService){

  }
  ngOnInit(): void {
  
  }

}
