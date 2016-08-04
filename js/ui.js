"use strict";

(function() {
  var exercises = require('./exercises.json');

  var exercisesPage = document.getElementById('exercises');
  var exercisePage = document.getElementById('exercise');
  var leftButton = document.getElementById('leftButton');
  var rightButton = document.getElementById('rightButton');

  var focusPage;
  var focusExercise;

  function reset() {
    var keys = Object.keys(exercises);

    keys.forEach(function(id) {
      var exercise = exercises[id];

      exercise.passed = false;
      exercise.failed = false;
      exercise.element.style.backgroundColor = '#337ab7';
    });

    showExercises();
  }

  function passExercise(id) {
    var exercise = exercises[id];

    if (!exercise) {
      return console.error('exercise ' + id + ' does not exist');
    }

    exercise.failed = false;
    exercise.passed = true;
    exercise.element.style.backgroundColor = '#5cb85c';
    showExercise();
  }

  function failExercise(id) {
    var exercise = exercises[id];

    if (!exercise) {
      return console.error('exercise ' + id + ' does not exist');
    }

    exercise.failed = true;
    exercise.passed = false;
    exercise.element.style.backgroundColor = '#d9534f';
    showExercise();
  }

  function getFailedExercises() {
    var keys = Object.keys(exercises);
    var result = [];

    keys.forEach(function(id) {
      var exercise = exercises[id];

      if (!exercise.passed && exercise.failed) {
        result.push(id);
      }
    });

    if (!result.length) {
      return undefined;
    }

    return result;
  }

  function getUnseenExercises() {
    var keys = Object.keys(exercises);
    var result = [];

    keys.forEach(function(id) {
      var exercise = exercises[id];

      if (!exercise.passed && !exercise.failed) {
        result.push(id);
      }
    });

    if (!result.length) {
      return undefined;
    }

    return result;
  }

  function getRandomExercise() {
    var source = getUnseenExercises() || getFailedExercises();

    if (!source) {
      return false;
    }

    var randomIndex = Math.floor(Math.random() * source.length);

    return source[randomIndex];
  }

  function updateButtons() {
    var leftIcon = document.createElement('i');
    var rightIcon = document.createElement('i');

    leftButton.innerHTML = '';
    rightButton.innerHTML = '';

    if (focusPage === exercisePage) {
      leftIcon.className = 'fa fa-thumbs-down';
      rightIcon.className = 'fa fa-thumbs-up';
      leftButton.className = 'btn btn-danger';
      rightButton.className = 'btn btn-success';

      leftButton.appendChild(leftIcon);
      rightButton.appendChild(rightIcon);
    }
    else if (focusPage === exercisesPage) {
      leftIcon.className = 'fa fa-repeat';
      rightIcon.className = 'fa fa-random';
      leftButton.className = 'btn btn-default';
      rightButton.className = 'btn btn-default';

      leftButton.appendChild(leftIcon);
      rightButton.appendChild(rightIcon);
    }
  }

  function updateStats() {
    var passCount = document.getElementById('passCount');
    var failCount = document.getElementById('failCount');
    var unseenCount = document.getElementById('unseenCount');

    var keys = Object.keys(exercises);
    var total = keys.length;
    var passed = 0;
    var failed = 0;
    var unseen = 0;

    keys.forEach(function(id) {
      var exercise = exercises[id];

      if (exercise.passed) {
        passed++;
      }
      else if (exercise.failed) {
        failed++;
      }
      else {
        unseen++;
      }
    });

    passCount.style.width = Math.round(100 * passed / total) + '%';
    failCount.style.width = Math.round(100 * failed / total) + '%';
    unseenCount.style.width = Math.round(100 * unseen / total) + '%';

    passCount.innerText = passed;
    failCount.innerText = failed;
    unseenCount.innerText = unseen;
  }

  function showPage(page) {
    if (focusPage) {
      focusPage.style.display = 'none';
    }
    page.style.display = 'block';
    focusPage = page;
    updateStats();
    updateButtons();
  }

  function showExercise(id) {
    var _id = id || getRandomExercise();

    if (!_id) {
      return showExercises();
    }

    var exercise = exercises[_id];
    var questionId = document.getElementById('questionId');
    var question = document.getElementById('question');
    var answer = document.getElementById('answer');

    questionId.innerText = 'Question ' + _id;
    question.innerText = exercise.q;
    answer.innerText = exercise.a;

    focusExercise = _id;

    showPage(exercisePage);
  }

  function showExercises() {
    showPage(exercisesPage);
  }

  function leftButtonClick() {
    if (focusPage === exercisesPage) {
      reset();
    }
    else if (focusPage === exercisePage) {
      failExercise(focusExercise);
    }
  }

  function rightButtonClick() {
    if (focusPage === exercisesPage) {
      showExercise();
    }
    else if (focusPage === exercisePage) {
      passExercise(focusExercise);
    }
  }

  function populateTable() {
    var table = document.getElementById('exercisesTable');
    var count = Object.keys(exercises).length;

    for (var i = 1; i <= count; ++i) {
      var item = document.createElement('span');

      item.className = 'table-item badge';
      item.id = 'exerciseItem_' + i;
      item.innerHTML = i;
      table.appendChild(item);

      var button = document.getElementById('exerciseItem_' + i);
      button.addEventListener('click', function(elem) {
        showExercise(elem.target.innerText);
      });

      exercises[i].element = item;
    }
  }

  function init() {
    var exitButton = document.getElementById('exitButton');

    exercisePage.style.display = 'none';
    exercisesPage.style.display = 'none';

    populateTable();
    showExercises();

    leftButton.addEventListener('click', leftButtonClick);

    rightButton.addEventListener('click', rightButtonClick);

    exitButton.addEventListener('click', function() {
      showExercises();
    });
  }

  init();
})();
