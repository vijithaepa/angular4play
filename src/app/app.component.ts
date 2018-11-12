import { Component } from '@angular/core';
import { DataService} from "./data.service";
import { trigger,state, style, transition,animate,keyframes} from "@angular/animations";

@Component({
  selector: 'app-root',
  // template: '<h2>Hi Guys</h2><p>What\'s up</p>',   //This is inline, instead of html template
  templateUrl: './app.component.html',
  // styles:[`h3 { text-decoration: underline; }`],
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myFirstAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      // transition('small <=> large', animate('400ms ease-in', style( {
      //     transform: 'translateY(40px)',
      //   }))),
      transition('small <=> large', animate('400ms ease-in', keyframes([
        style({opacity:0, transform:'translateY(-75%)', offset:0}),
        style({opacity:.5, transform:'translateY(35px)', offset:0.5}),
        style({opacity:1, transform:'translateY(0)', offset:1})
      ]))),
    ]),
  ]
})
export class AppComponent {

  state: string = 'small';


  constructor(private dataService:DataService) {

  }

  someProp:string = '';

  ngOnInit() {
    console.log(this.dataService.employees);
    this.someProp = this.dataService.getData();
  }

  title = 'app works!';
  myObject = {
    id:23,
    age: 34,
    location: 'AU'
  }

  myArr = ["blue", 'Yellow', 'Black'];

  angularLogo = "assets/angular.png";
  btnStatus = true;
  btnEnable = "enables";

  buttonEvent(event) {
    console.log(event);
  }

  mouseEnterEvent(event) {
    console.log(event);
  }

  btnClass = 'text-red';
  isBttunRed = false;

  headerClasses = {
    'text-red':true,
    'text-large':true
  }

  imgStyle = false;

  imgStyles = {
    'width': '150px',
    'border' : '1px solid blue'
  }

  animateMe() {
    this.state = (this.state==='small' ? 'large' : 'small');
  }
}

