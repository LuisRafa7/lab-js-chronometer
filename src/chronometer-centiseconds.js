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
      }
    }, 10)
    this.intervalId = startInter;
  }

  getMinutes() {
    let seconds = 0;
    seconds = this.currentTime / 100;
    let minutes = 0;
    minutes = Math.floor(seconds / 60);
    return minutes;
  }

  getSeconds() {
    let minutes = this.getMinutes() * 60;
    let seconds = 0;
    seconds = Math.floor((this.currentTime / 100) - minutes);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = 0;
    centiseconds = Math.floor(this.currentTime % 100);
    return centiseconds;
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
    let centiseconds1 = this.getCentiseconds();
    let centiseconds2 = this.computeTwoDigitNumber(centiseconds1);
    let formatTime = `${minutes2}:${seconds2}.${centiseconds2}`;
    return formatTime;
  }
}
