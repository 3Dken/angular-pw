import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'pw';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value:string){
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
  //   console.log (`
  //   About to generate a password with the following:
  //   length: ${this.length}
  //   Includes Letters: ${this.includeLetters}
  //   Includes Numbers: ${this.includeNumbers}
  //   Includes Symbols: ${this.includeSymbols}
  // `);

  //   this.password = 'MY PASSWORD!!!';
    let numbers = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '~!@#$%^&*()';

    let validChars = '';
    
    if (this.includeLetters){
      validChars += letters;
    }

    if (this.includeNumbers){
      validChars += numbers;
    }

    if (this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i<this.length; i++){
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }  // for loop


}
