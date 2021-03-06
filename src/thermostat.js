"use strict";

function Thermostat () {
this.temperature = 20;
this.powerSavingMode = true;
this.displayColour = "yellow";
// this.maxTemperature = 32;
}

Thermostat.prototype =  {
  getCurrentTemperature: function() {
    return this.temperature;
  },
  setColour: function() {
    if (this.temperature < 18) {
      this.displayColour = "green";
    }
    else if (this.temperature < 25){
      this.displayColour = "yellow";
    }
    else {
      this.displayColour = "red";
    }
  },
  maxTemperature: function() {
    if (this.powerSavingMode === true) {
      return 25;
    } else {
      return 32;
    }
  },
  increaseTemperature: function(value) {
    if (this.temperature + value > this.maxTemperature()) {
      this.temperature = this.maxTemperature();
    }
    else {
      this.temperature += value;
      this.setColour();
    }
  },
  decreaseTemperature: function(value) {
    if (this.temperature - value < 10) {
      this.temperature = 10;
    }
    else {
      this.temperature -= value;
      this.setColour();
    }
  },
  setPowerSavingModeOn: function() {
    this.powerSavingMode = true;
    if (this.temperature > 25) {
      this.temperature = 25;
    }
    // this.maxTemperature = 25;
  },
  setPowerSavingModeOff: function() {
    this.powerSavingMode = false;
    // this.maxTemperature = 32;
  },
  reset: function() {
    this.temperature = 20;
  }
};
