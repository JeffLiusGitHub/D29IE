//var showing = [1, 0, 0, 0, 0];
var allQuestions = ["q0", "q1", "q2", "q3", "q4"];
var _questionIndex = 0;
var _totalQuestion = 5;
var _rate = (100 / _totalQuestion);

allQuestions.sort(() => Math.random() - 0.5);

var questions = allQuestions.slice(0, _totalQuestion);

function next() {
    /*
  var qElems = [];
  for (var i = 0; i < questions.length; i++) {
  
      qElems.push(document.getElementById(questions[i]));
  }
  for (var i = 0; i < showing.length; i++) {
    if (showing[i] == 1) {
      qElems[i].style.display = "none";
      showing[i] = 0;
      if (i == showing.length - 1) {
        qElems[0].style.display = "block";
        showing[0] = 1;
      } else {
        qElems[i + 1].style.display = "block";
        showing[i + 1] = 1;
      }
      break;
    }
  }
  */

    var _index = _questionIndex + 1;

    $('#questions .ftco-section').hide();
    $('#' + questions[_questionIndex]).show()
        .find('.question-num').html(_index);

    _questionIndex++;
}

$(function () {
    next();
});
