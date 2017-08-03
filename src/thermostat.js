function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temp;
};

Thermostat.prototype.tempIncrease = function () {
  if (this.temp === this.getMaxTemp()) {
    throw 'Maximum temp reached'
  } else {
    this.temp++
  }
};

Thermostat.prototype.tempDecrease = function () {
  if (this.temp === 10) {
    throw 'Minimum temp reached!'
  } else {
    this.temp--
  }
};

Thermostat.prototype.getMaxTemp = function () {
  if (this.powerSavingMode) {
    return this.MAX_LIMIT_PSM_ON
  } else {
    return this.MAX_LIMIT_PSM_OFF
  }
};

Thermostat.prototype.changePowerSavingMode = function () {
  this.powerSavingMode = !this.powerSavingMode
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.reset = function () {
  this.temp = this.DEFAULT_TEMP
};

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temp < 18) {
    return 'low'
  } else if (this.temp < 25) {
    return 'medium'
  } else {
    return 'high'
  }
};
