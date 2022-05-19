// Working with some low-level observable
const { Observable } = Rx;
const { tap, share } = RxOperators;

const observable = new Observable((subscriber) => {
  // throw the value 1 into the pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);


  setTimeout(() => {
    subscriber.next(4);
  }, 500);

  // subscriber.complete(); // no return of value here

  // subscriber.error(new Error('Oops! Something went wrong'));
}).pipe (
  tap(value => console.log(value)),
  share()
);

observable.subscribe(
  (value) => console.log('Next Value ',value),
  (err) => console.error('Oops! Something went wrong', err.message),
  () => console.log('Complete!')
)

new observable(() => {});
