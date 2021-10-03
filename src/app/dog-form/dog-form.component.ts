import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dog } from '../model/Dog';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  dogs: Dog[] = [];
  name: string = '';
  type: string = '';
  property: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addDog(dogForm: NgForm) {
      this.dogs.push(new Dog(this.name, this.type, this.property));
      dogForm.reset();
  }
}
