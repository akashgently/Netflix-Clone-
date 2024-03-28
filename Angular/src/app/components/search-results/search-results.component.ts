import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  movies: AppComponent[] = [];
  searchTerm: string = '';
  showDropdownsAfterSearch: boolean = false;
  showDropdown: boolean = false;
  selectedGenre: string = '';
  selectedCategory: string = '';
  selectedLanguage: string = '';
  selectedItems: string = '';
  genres: string[] = ['Action', 'Thriller', 'Comedy', 'Romantic'];
  categories: string[] = ['series', 'Movie'];
  languages: string[] = ['English', 'Spanish', 'French', 'Tamil'];
  showGenreDropdown: boolean = false;
  showCategoryDropdown: boolean = false;
  showLanguageDropdown: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.authService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  search(): void {
    this.showDropdownsAfterSearch = true;
    if (this.searchTerm.trim() !== '') {
      this.authService.searchMovies(this.searchTerm).subscribe((movies) => {
        this.movies = movies;
      });
    } else {
      this.fetchMovies();
      this.showDropdownsAfterSearch = false;
    }
  }

  showDropdowns() {
    this.showDropdown = !this.showDropdown;
  }

  selectGenre(genre: string) {
    this.selectedGenre = genre;
    this.filterMovies();
    this.updateSelectedItems();
    this.showGenreDropdown = false;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterMovies();
    this.updateSelectedItems();
    this.showCategoryDropdown = false;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.filterMovies();
    this.updateSelectedItems();
    this.showLanguageDropdown = false;
  }

  filterMovies() {
    this.movies = this.movies.filter((movie) => {
      let genreMatch =
        !this.selectedGenre || movie.genre === this.selectedGenre;
      let categoryMatch =
        !this.selectedCategory || movie.category === this.selectedCategory;
      let languageMatch =
        !this.selectedLanguage || movie.language === this.selectedLanguage;
      return genreMatch && categoryMatch && languageMatch;
    });
  }

  selectedItemsText(): string {
    let selectedItems = [];
    if (this.selectedGenre) {
      selectedItems.push(`Genre: ${this.selectedGenre}`);
    }
    if (this.selectedCategory) {
      selectedItems.push(`Category: ${this.selectedCategory}`);
    }
    if (this.selectedLanguage) {
      selectedItems.push(`Language: ${this.selectedLanguage}`);
    }
    return selectedItems.join(', ');
  }
  updateSelectedItems() {
    let selectedItems = [];
    if (this.selectedGenre) {
      selectedItems.push(`Genre: ${this.selectedGenre}`);
    }
    if (this.selectedCategory) {
      selectedItems.push(`Category: ${this.selectedCategory}`);
    }
    if (this.selectedLanguage) {
      selectedItems.push(`Language: ${this.selectedLanguage}`);
    }
    this.selectedItems = selectedItems.join(', ');
  }
  toggleGenreDropdown(): void {
    this.showGenreDropdown = !this.showGenreDropdown;
  }

  toggleCategoryDropdown(): void {
    this.showCategoryDropdown = !this.showCategoryDropdown;
  }

  toggleLanguageDropdown(): void {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }
  clear(): void {
    this.selectedGenre = '';
    this.selectedCategory = '';
    this.selectedLanguage = '';
    this.updateSelectedItems();
    this.fetchMovies();
  }
}
