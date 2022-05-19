const { fromEvent } = Rx;
// import addEventListener from RxJs library
const { map, pluck } = RxOperators
// operators from Rx library

const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input);
// the input is being placed in a container

const observable = fromEvent(input, 'input');
// building a pipeline from our operators
  .pipe(
    pluck('target', 'value'), //<-- pluck()-- maps each source value to it's specified nested property
    map(value => parseInt(value)),
    map(value => {
      if(isNaN(value)) {
        throw new Error('Enter a new value!')
      }
      return value;
    })
  )
  // building the observer
  observable.subscribe({
    next(value) {
      console.log(`Your value is ${value}`);
    },
    error() {
      console.error('Oops! bad thing just happen')
    }
  }); // either you pass in a function or object

observable; // <-- We created an observable here if we are in the Rxjs Environment
