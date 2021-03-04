export function createStore(reducer){
  let State = { count:0 }
  let observers = []               
  const getState = function() {
    return State
  }

  const dispatch = function(action) {
    State = reducer(State, action)
    observers.forEach(fn => fn())
  }

  function subscribe(fn) {
    observers.push(fn)
  }

  return { getState, subscribe, dispatch }
}