var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      return ('Good' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', I\m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      return ('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', I\m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  } 
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

// In call, the first argument sets this, which is called method borrowing:

console.log(john.presentation.call(emily, 'friendly', 'afternoon'));

// Apply accepts the arguments after the first one as an array, but an array must be expected by the function: 

console.log(john.presentation.call(emily, ['friendly', 'afternoon']));

var johnFriendly = john.presentation.bind(john, 'friendly');

console.log(johnFriendly('morning'));