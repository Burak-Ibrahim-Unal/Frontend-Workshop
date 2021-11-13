
import { Component } from '@angular/core';
import { ProgressBar } from './Models/progressBar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  title = 'Create Random Character';
  letters = '0123456789ABCDEF';
  color = '#';

  colorAntenna = '#';
  colorEyes = '#';
  colorEars = '#';
  colorHead = '#';
  colorBody = '#';
  colorArms = '#';
  colorLegs = '#';

  strength = 10;
  dexterity = 8;
  intelligence = 10;
  vitality = 9;
  agility = 8;
  maxPower = 45;
  minpower = 20;

  progressBars: ProgressBar[] = [{
    progress: 0
  }];

  addProgressBar() {
    this.progressBars.push({
      progress: 0
    });
  }

  updateProgressBar(progressBar: ProgressBar, value: number) {
    progressBar.progress = value;
  }


  getRandomColor(randomColor: string) {
    this.color = '#';
    this.colorAntenna = '#';
    this.colorEyes = '#';
    this.colorEars = '#';
    this.colorHead = '#';
    this.colorBody = '#';
    this.colorArms = '#';
    this.colorLegs = '#';
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
      this.colorAntenna += this.letters[Math.floor(Math.random() * 16)];
      this.colorEyes += this.letters[Math.floor(Math.random() * 16)];
      this.colorEars += this.letters[Math.floor(Math.random() * 16)];
      this.colorHead += this.letters[Math.floor(Math.random() * 16)];
      this.colorBody += this.letters[Math.floor(Math.random() * 16)];
      this.colorArms += this.letters[Math.floor(Math.random() * 16)];
      this.colorLegs += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  getRandomPower() {
    var sum = 0;
    for (let i = 0; i < 5; i++) {
      let myNumber = Math.floor(Math.random() * 20);
      while (myNumber < 7 || myNumber > 15) {
        myNumber = Math.floor(Math.random() * 20);
      }
      sum += myNumber;
      switch (i) {
        case 0:
          this.strength = myNumber;
          break;
        case 1:
          this.intelligence = myNumber;
          break;
        case 2:
          this.vitality = myNumber;
          break;
        case 3:
          this.dexterity = myNumber;
          break;
        case 4:
          this.agility = myNumber;
          break;

        default:
          break;
      }

      if (sum < this.minpower) {
        sum += 20;
        i--;
      }
      if (sum > this.maxPower) {
        sum -= 20;
        i--;
      }
    }
    console.log(sum);
    console.log(this.strength);
    console.log(this.vitality);
    console.log(this.agility);
    console.log(this.intelligence);
    console.log(this.dexterity);
    return sum;
  }

}

