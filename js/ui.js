"use strict";

(function() {
  var UNSEEN = 0;
  var FAILED = -1;
  var PASSED = 1;

  function LocalStorage(name) {
    this.name = name;

    this.reset = function() {
      localStorage.removeItem(this.name);
    };

    this.store = function(exerciseList) {
      var list = exerciseList.exercises;
      localStorage.setItem(this.name, JSON.stringify(
        list.map(function(exercise) {
          return {
            id: exercise.id,
            question: exercise.question,
            answer: exercise.answer,
            status: exercise.status
          };
        }))
      );
    };

    this.load = function() {
      var list = localStorage.getItem(this.name);
      list = JSON.parse(list);

      if (list) {
        return list.map(function(exercise) {
          return new Exercise(exercise.id, exercise.question, exercise.answer, exercise.status);
        });
      }
    };
  }

  function JSONStorage(json) {
    this.json = json;

    this.load = function() {
      var that = this;
      var keys = Object.keys(this.json);
      return keys.map(function(key) {
        var exercise = that.json[key];
        return new Exercise(key, exercise.q, exercise.a);
      });
    };
  }

  function Exercise(id, question, answer, status) {
    this.status = status || UNSEEN;
    this.id = id;
    this.question = question;
    this.answer = answer;

    this.unsee = function() {
      this.status = UNSEEN;
    };

    this.pass = function() {
      this.status = PASSED;
    };

    this.fail = function() {
      this.status = FAILED;
    };
  }

  function ExerciseList() {
    this.exercises = [];

    this.isEmpty = function() {
      return this.exercises.length === 0;
    };

    this.getAllByStatus = function(status) {
      return this.exercises.filter(function(exercise) {
        return exercise.status === status;
      });
    };

    this.count = function(status) {
      if (status) {
        return this.getAllByStatus(status).length;
      }
      else {
        return this.exercises.length;
      }
    };

    this.addExercise = function(exercise) {
      this.exercises.push(exercise);
      this.exercises.sort(function(i1, i2) {
         return i1.id - i2.id;
      });
    };

    this.removeExercise = function(exercise) {
      var index = -1;
      this.exercises.find(function(item, i) {
        if (item.id === exercise.id) {
          index = i;
          return true;
        }
      });

      if (index > -1) {
        this.exercises.splice(index, 1);
      }
      else {
        throw new Error('Cannot remove exercise: not found');
      }
    };

    this.getExercise = function(exercise) {
      return this.exercises.find(function(item) {
        return item.id === exercise.id;
      });
    };

    this.unseeExercise = function(exercise) {
      this.getExercise(exercise).unsee();
    };

    this.passExercise = function(exercise) {
      this.getExercise(exercise).pass();
    };

    this.failExercise = function(exercise) {
      this.getExercise(exercise).fail();
    };

    this.unseeAll = function() {
      this.exercises.forEach(function(exercise) {
        exercise.unsee();
      });
    };

    this.getStatus = function() {
      var unseenCount = 0;
      var passedCount = 0;
      var failedCount = 0;

      this.exercises.forEach(function(exercise) {
        switch (exercise.status) {
          case UNSEEN:
            unseenCount++;
            break;
          case PASSED:
            passedCount++;
            break;
          case FAILED:
            failedCount++;
            break;
        }
      });

      return {
        unseen: unseenCount,
        passed: passedCount,
        failed: failedCount
      };
    };

    this.getRandomExercise = function(status) {
      var candidates = this.getAllByStatus(status);

      if (candidates.length > 0) {
        var randomIndex = Math.floor(Math.random() * candidates.length);
        return candidates[randomIndex];
      }
      else {
        return false;
      }
    };

    this.forEach = function(fn) {
      return this.exercises.forEach(fn);
    };

    this.loadFromStorage = function(storage) {
      this.exercises = storage.load();
    };
  }

  function StatusBar(exerciseList) {
    this.exerciseList = exerciseList;

    this.getStatus = function() {
      return this.exerciseList.getStatus();
    };
  }

  function StatusBarToggle(statusBars) {
    this.statusBars = statusBars;
    this.current = 0;

    this.toggle = function() {
      this.current = (this.current + 1) % this.statusBars.length;
    };

    this.getStatus = function() {
      return this.statusBars[this.current].getStatus();
    };
  }

  function Vocable(onFinish) {
    this.exercises = new ExerciseList();
    this.combo = new ExerciseList();
    this.onFinish = onFinish;

    this.exercisesStorage = new LocalStorage('exercises');
    this.comboStorage = new LocalStorage('combo');
    var jsonStorage = new JSONStorage(require('./exercises.js'));

    // initialize the table from data in storage
    this.exercises.exercises = this.exercisesStorage.load() || jsonStorage.load();
    this.combo.exercises = this.comboStorage.load() || [];

    this.getAllExercises = function() {
      return this.exercises;
    };

    this.getRandomExercise = function() {
      if (this.combo.isEmpty()) {
        this.initCombo();
      }
      return this.combo.getRandomExercise(UNSEEN) || this.combo.getRandomExercise(FAILED);
    };

    this.initCombo = function() {
      var randomExercise = this.exercises.getRandomExercise(UNSEEN);
      this.combo.addExercise(randomExercise);
    };

    this.reset = function() {
      this.combo = new ExerciseList();
      this.exercises.unseeAll();
      this.exercisesStorage.reset();
      this.comboStorage.reset();
    };

    this.getStatus = function() {
      return this.exercises.getStatus();
    };

    this.getComboStatus = function() {
      return this.combo.getStatus();
    };

    this.passExercise = function(exercise) {
      this.exercises.passExercise(exercise);
      this.combo.removeExercise(exercise);

      if (this.combo.isEmpty()) {
        var passedCount = this.exercises.count(PASSED);
        var totalCount = this.exercises.count();

        if (passedCount === totalCount) {
          return this.onFinish();
        }

        var unseenList = new ExerciseList();
        unseenList.exercises = this.exercises.getAllByStatus(UNSEEN);
        var newComboCount = Math.min(passedCount, unseenList.count());

        for (var i = 0; i < newComboCount; ++i) {
          var unseenExercise = unseenList.getRandomExercise(UNSEEN);
          this.combo.addExercise(unseenExercise);
          unseenList.removeExercise(unseenExercise);
        }

        var that = this;
        var passedExercises = this.exercises.getAllByStatus(PASSED);
        passedExercises.forEach(function(passedExercise) {
          passedExercise.unsee();
          that.combo.addExercise(passedExercise);
        });
      }

      this.exercisesStorage.store(this.exercises);
      this.comboStorage.store(this.combo);

      return this.combo.getRandomExercise(UNSEEN) || this.combo.getRandomExercise(FAILED);
    };

    this.failExercise = function(exercise) {
      this.exercises.failExercise(exercise);
      this.combo.failExercise(exercise);

      this.exercisesStorage.store(this.exercises);
      this.comboStorage.store(this.combo);

      return this.combo.getRandomExercise(UNSEEN) || this.combo.getRandomExercise(FAILED);
    };
  }

  function Button(buttonClass, iconClass, onClick) {
    var button = document.createElement('button');
    var icon = document.createElement('icon');

    button.setAttribute('type', 'button');
    button.setAttribute('class', buttonClass);
    icon.setAttribute('class', iconClass);
    button.appendChild(icon);
    button.onclick = onClick;

    return button;
  }

  function Page(options, vocable) {
    this.leftButton = options.leftButton;
    this.rightButton = options.rightButton;
    this.statusBars = options.statusBars;
    this.header = options.header;
    this.content = options.content;
    this.vocable = vocable;

    this.onLeftButtonClick = function() {
      console.log(this);
    };

    this.onRightButtonClick = function() {
      console.log(this);
    };

    this.onStatusBarClick = function() {
      var barToggle = this.statusBars.bars;

      barToggle.toggle();
      this.updateStatus();
    };

    this.statusBars.wrapper.onclick = this.onStatusBarClick.bind(this);

    this.updateStatus = function() {
      var status = this.statusBars.bars.getStatus();
      var bars = this.statusBars.wrapper.children;
      var successBar = bars[0];
      var failBar = bars[1];
      var unseenBar = bars[2];

      var total = status.unseen + status.passed + status.failed;
      var unseen = status.unseen;
      var passed = status.passed;
      var failed = status.failed;

      unseenBar.innerText = unseen;
      successBar.innerText = passed;
      failBar.innerText = failed;

      var unseenPerc = total ? Math.round(100 * unseen / total) : 0;
      var passedPerc = total ? Math.round(100 * passed / total) : 0;
      var failedPerc = total ? Math.round(100 * failed / total) : 0;
      var rest = unseenPerc + passedPerc + failedPerc - 100;

      if (rest !== 0) {
        if (unseenPerc === 0) {
          failedPerc -= rest;
        }
        else {
          unseenPerc -= rest;
        }
      }

      unseenBar.style.width = unseenPerc + '%';
      successBar.style.width = passedPerc + '%';
      failBar.style.width = failedPerc + '%';
    };

    this.showContent = function() {};
  }

  function ExercisesPage(options, vocable, onStart) {
    Page.call(this, options, vocable);
    this.onStart = onStart;

    this.onLeftButtonClick = function() {
      this.vocable.reset();
      this.showContent();
      this.updateStatus();
    };

    this.onRightButtonClick = function() {
      this.onStart(this.vocable.getRandomExercise());
    };

    this.showContent = function() {
      this.header.innerHTML = '';
      this.content.innerHTML = '';

      // setup buttons
      this.leftButton.innerHTML = '';
      this.leftButton.appendChild(new Button(
        'btn btn-default',
        'fa fa-repeat',
        this.onLeftButtonClick.bind(this)
      ));
      this.rightButton.innerHTML = '';
      this.rightButton.appendChild(new Button(
        'btn btn-default',
        'fa fa-random',
        this.onRightButtonClick.bind(this)
      ));

      // setup title
      var title = document.createElement('h1');
      title.innerHTML = 'Exercises';
      this.header.appendChild(title);

      // setup exercise bubbles
      var that = this;
      this.vocable.exercises.forEach(function(exercise) {
        var bubble = document.createElement('span');

        if (exercise.status === PASSED) {
          bubble.style.backgroundColor = '#5cb85c';
        }
        if (exercise.status === FAILED) {
          bubble.style.backgroundColor = '#d9534f';
        }

        bubble.className = 'table-item badge';
        bubble.innerHTML = exercise.id;
        bubble.onclick = function() {
          if (that.vocable.combo.isEmpty()) {
            that.vocable.combo.addExercise(exercise);
            that.onStart(exercise);
          }
        };
        that.content.appendChild(bubble);
      });
    };
  }

  function ExercisePage(options, vocable, onExit) {
    Page.call(this, options, vocable);
    this.onExit = onExit;

    this.showContent = function(exercise) {
      var that = this;

      this.header.innerHTML = '';
      this.content.innerHTML = '';

      // setup buttons
      this.leftButton.innerHTML = '';
      this.leftButton.appendChild(new Button(
        'btn btn-danger',
        'fa fa-thumbs-down',
        function() {
          that.showContent(that.vocable.failExercise(exercise));
          that.updateStatus();
        }
      ));
      this.rightButton.innerHTML = '';
      this.rightButton.appendChild(new Button(
        'btn btn-success',
        'fa fa-thumbs-up',
        function() {
          that.showContent(that.vocable.passExercise(exercise));
          that.updateStatus();
        }
      ));

      // setup title
      var container = document.createElement('p');
      var title = document.createElement('span');
      var exit = document.createElement('i');

      container.className = 'lead';
      exit.className = 'fa fa-chevron-left';
      title.innerHTML = 'Question ' + exercise.id;

      exit.onclick = function() {
        that.onExit();
      };

      container.appendChild(exit);
      container.appendChild(title);
      this.header.appendChild(container);

      // setup question and answer
      var question = document.createElement('h3');
      var answer = document.createElement('p');
      var toggleQA = Math.random() >= 0.5;

      if (toggleQA) {
        question.innerHTML = exercise.question;
        answer.innerHTML = exercise.answer;
      }
      else {
        question.innerHTML = exercise.answer;
        answer.innerHTML = exercise.question;
      }

      // make answer blurry at first
      answer.style.color = 'transparent';
      answer.style.textShadow = '0 0 15px rgba(0, 0, 0, 0.5)';

      // remove blur on click
      answer.onclick = function() {
        answer.style.color = 'black';
        answer.style.textShadow = 'none';
      };

      this.content.appendChild(question);
      this.content.appendChild(answer);
    };
  }

  ExercisesPage.prototype = Object.create(Page.prototype);
  ExercisePage.prototype = Object.create(Page.prototype);

  function init() {
    var vocable = new Vocable();
    var options = {
      leftButton: document.getElementById('leftButton'),
      rightButton: document.getElementById('rightButton'),
      statusBars: {
        wrapper: document.getElementById('statusBar'),
        bars: new StatusBarToggle([
          new StatusBar(vocable.exercises),
          new StatusBar(vocable.combo)
        ])
      },
      content: document.getElementById('content'),
      header: document.getElementById('header')
    };
    var exercisesPage = new ExercisesPage(options, vocable, function(exercise) {
      exercisePage.showContent(exercise);
    });
    var exercisePage = new ExercisePage(options, vocable, function() {
      exercisesPage.showContent();
    });

    exercisesPage.updateStatus();
    exercisesPage.showContent();
  }

  init();
})();
