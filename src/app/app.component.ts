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
  dogTitle = 'Dog title from Parent Component';
  dogNames: string[] = ['Caesar', 'Scooby', 'Stark'];

  ngOnInit(): void {
    this.doggies = this.fetchDoggos();
  }

  fetchDoggos(): Dog[] {
    let doggos : Dog[] = [];

    doggos.push(new Dog('Jack', 'Dober', 'Run faster'));
    doggos.push(new Dog('Julie', 'Alsheshian', 'Eats well'));

    return doggos;
  }

  bark(): void {
    alert("Wooff! Woff!");
  }

  addDog() {
    this.doggies.push(new Dog('Harry', 'German sheperd', 'Run faster than all'));
  }
}
