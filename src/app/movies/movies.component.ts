import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  datalist: any[] = [];
  constructor(private _ApidataService: ApidataService) {

    this._ApidataService.getdata().subscribe((data) => {
      this.datalist = data.results
      console.log(this.datalist)
    })
  }

}
