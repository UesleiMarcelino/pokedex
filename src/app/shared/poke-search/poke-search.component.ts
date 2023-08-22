import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearched: any = new EventEmitter();

  constructor(){ }
  ngOnInit(): void {
   
  }

  public searchPokemon(value: string){
      this.emmitSearched.emit(value);
    }
}
