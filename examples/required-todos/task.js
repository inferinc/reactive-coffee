// Generated by CoffeeScript 1.6.3
(function() {
  define(['reactive-coffee'], function(rx) {
    var Task;
    return Task = (function() {
      function Task(title) {
        this.title = rx.cell(title);
        this.isEditing = rx.cell(false);
        this.isCompleted = rx.cell(false);
      }

      return Task;

    })();
  });

}).call(this);
