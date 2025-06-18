import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html'
})
export class CharacterDetailsComponent {
  id: number = 0;
  character: any = null;
  errorMessage: string = '';
  loading = false;

  constructor(private api: RickAndMortyService) {}

  fetchCharacter() {
    this.errorMessage = '';
    this.character = null;

    if (this.id <= 0 || !Number.isInteger(this.id)) {
      this.errorMessage = 'Veuillez entrer un ID entier positif.';
      return;
    }

    this.loading = true;
    this.api.getCharacterById(this.id).subscribe({
      next: data => {
        this.character = data;
        this.loading = false;
      },
      error: err => {
        this.errorMessage = 'Personnage introuvable.';
        this.loading = false;
      }
    });
  }
}
