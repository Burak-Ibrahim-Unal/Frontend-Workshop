import { Router } from '@angular/router';
import { AlertifyService } from './../services/alertify.service';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [
    CategoryService,
    MovieService,
  ]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, desc: any, img: any, categoryId: any) {
    if (title.value === "" || desc.value === "" || img.value === "" || categoryId.value === "-1") {
      this.alertifyService.error("There are empty fields...");
      return;
    }

    const imgExtensions = ["jpg", "jpeg", "png"];
    if (imgExtensions.indexOf(img.value.split(".").pop()) === -1) {
      this.alertifyService.error("Only jpg,jpeg,png formats allowed")
      return;
    }

    const movie = {
      id: 0,
      title: title.value,
      desc: desc.value,
      imgUrl: img.value,
      categoryId: categoryId.value,
      isPopular: false,
      releaseDate: new Date().getTime(), // milliseconds
    }
    this.movieService.createMovie(movie).subscribe(data => {
      // console.log(data);
      this.alertifyService.success(movie.title + " is added successfuly")
      // this.router.navigate(["/movies"])
      this.router.navigate(["/movies", data.id])
    });
  }

}
