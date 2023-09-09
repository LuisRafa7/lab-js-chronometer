class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    let startInter = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback !== undefined) {
        printTimeCallback();
      };
    }, 1000);
    this.intervalId = startInter;
  }

  getMinutes() {
    let minutes = 0
    minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = 0
    seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value.toString();
    }
    else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes1 = this.getMinutes();
    let minutes2 = this.computeTwoDigitNumber(minutes1);
    let seconds1 = this.getSeconds();
    let seconds2 = this.computeTwoDigitNumber(seconds1);
    let formatTime = `${minutes2}:${seconds2}`;
    return formatTime;
  }
}
