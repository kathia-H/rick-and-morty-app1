import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  
  standalone: true,
  imports: [CommonModule],
   selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent {
  characters: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {
    this.rickAndMortyService.getAllCharacters().subscribe(data => {
      this.characters = data.results;
    });
  }
}
