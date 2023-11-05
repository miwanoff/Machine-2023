"use strict";
class Machine {
  constructor(name) {
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }

  run() {
    this.state = "started";
    document.write("Починаю роботу...");
    document.write("Час приготування - " + this.time + " ");
    this.interval = setInterval(() => {
      document.write(" | ");
    }, 1000);
    this.timer = setTimeout(this.onReady, this.time);
    document.write(this.state);
  }

  onReady = () => {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Готово! ");
    this.state = "stopped";
    document.write(this.state);
  };

  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Примусове вимикання! ");
    this.state = "stopped";
    document.write(this.state);
  }
}

let machine = new Machine();
machine.run();
