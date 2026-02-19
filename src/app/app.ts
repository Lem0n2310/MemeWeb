import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {Container} from './container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MemeApp');
}
