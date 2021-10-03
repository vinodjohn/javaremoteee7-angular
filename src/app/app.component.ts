import { Component, OnInit} from '@angular/core';
import {Dog} from "./model/Dog";

@Component({
  selector: 'app-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My first app!';
  doggies: Dog[] = [];

  ngOnInit(): void {
    this.doggies.push(new Dog('Jack', 'Dober', 'Run faster'));
    // this.doggies.push(new Dog('Julie', 'Alsheshian', 'Eats well'));
  }
  bark(): void {
    alert("Wooff! Woff!");
  }

  addDog() {
    this.doggies.push(new Dog('Harry', 'German sheperd', 'Run faster than all'));
  }
}
