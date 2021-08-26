import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
  selector:"movies",  //.movies > it must be called class -- #movies > it must be called at id -- movies it must be called with tag <movies></movies>
  //template: "<h1>All Movies</h1>"
  templateUrl: "movies.component.html",
})
export class MoviesComponent{


}
