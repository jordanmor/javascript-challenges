var SpeedTest = function(testImplement,testParams,repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function() {
    // console.log("Test to make sure param introduction is success \n"); // Test to make sure the parameters are introduced correctly into the startTest
    // console.log(this.testParams);
    if (this.testImplement(this.testParams) === false) {
      alert('Test failed with those parameters.');
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
      beginTime = +new Date();
      this.testImplement(this.testParams);
      endTime = +new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    console.log('Average execution across ' + this.repetitions + ': ' + this.average + '\n');
    return console.log(this.testImplement(this.testParams)); // Test to make sure speedtest is outputting correct results
  }
};

const param = '';
const speedTest1 = new SpeedTest(/*functionGoesHere*/, param);
const speedTest2 = new SpeedTest(/*functionGoesHere*/, param);
speedTest1.startTest();
speedTest2.startTest();