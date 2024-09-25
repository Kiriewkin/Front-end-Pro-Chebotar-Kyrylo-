let ladder = {
    step: 6,
    up: function () {
      this.step++;
      return this;
    },
    down: function () {
      this.step--;
      return this;
    },
    showStep: function () {
      console.log(this.step);
      return this;
    }
  };

  ladder.up();
  ladder.up();
  ladder.up();
  ladder.up();
  ladder.down();
  ladder.up();
  ladder.showStep(); //10
