import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html'
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];

  constructor(private api: RickAndMortyService) {}

  ngOnInit(): void {
    this.api.getAllCharacters().subscribe(response => {
      this.characters = response.results;
    });
  }
}
