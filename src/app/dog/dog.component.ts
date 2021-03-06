import {Component, Input, OnInit} from '@angular/core';
import { Dog } from '../model/Dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() sharedTitle: string = '';
  @Input() items: string[] = [];
  @Input() doggies: Dog[] = [];

  showVaccinated : boolean = false;
  vaccinatedDogs : string[] = [];
  unvaccinatedDogs : string[] = ['Dalmatian', 'Bull dog', 'Dober'];
  titleUnvaccinated = 'Unvaccinated Dogs';

  constructor() { }

  ngOnInit(): void {
    this.vaccinatedDogs.push('German shepperd');
    this.vaccinatedDogs.push('Alsheshian');
  }

  changeMyHeading(): void {
    this.titleUnvaccinated = 'Those dogs are not vaccinated'
  }
}
