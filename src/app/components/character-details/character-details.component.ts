import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-details.component.html',
})
export class CharacterDetailsComponent {
  id!: number;
  character: any;
  errorMessage = '';
  loading = false;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  search() {
    if (!Number.isInteger(this.id) || this.id <= 0) {
      this.errorMessage = 'Veuillez entrer un ID entier positif.';
      this.character = null;
      return;
    }

    this.errorMessage = '';
    this.loading = true;
    this.rickAndMortyService.getCharacterById(this.id).subscribe({
      next: (data: any) => {
        this.character = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Personnage non trouvé.";
        this.character = null;
        this.loading = false;
      },
    });
  }
}
