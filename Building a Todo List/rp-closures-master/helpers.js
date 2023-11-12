// =============================================================================
// HELPER FUNCTIONS

// Numbers

/**
 * Returns a random number between `a` and `b`.
 * If `b` is not supplied, returns a random number between 0 and `a`.
 */
function randN(a, b) {
  if (b === undefined) {
    return Math.random() * a;
  }
  return (Math.random() * (b - a)) + a;
}

/**
 * Like randN, but returns a random *integer*.
 */
function randInt(a, b) {
  if (b === undefined) {
    return Math.floor(randN(a + 1));
  }
  return Math.floor(randN(a, b + 1));
}

// Collections
function reduce(array, f, acc) {
  if (array.length === 0) {
    return acc;
  }
  return reduce(rest(array), f, f(acc, first(array)));
}

function filter(array, predicate) {
  return reduce(array, function(acc, x) {
    if (predicate(x)) {
      return conj(acc, x);
    }
    return acc;
  }, []);
}

function map(array, f) {
  return reduce(array, function(acc, x) {
    return conj(acc, f(x));
  }, []);
}

function each(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i], i);
  }
}

function take(xs, n) {
  return xs.slice(0, n);
}

function range(n) {
  return n < 0 ? [] : conj(range(n - 1), n);
}

function conj(xs, x) {
  xs.push(x);
  return xs;
}

function randElt(xs) {
  return xs[randInt(xs.length - 1)];
}

function cons(x, xs) {
  xs.unshift(x);
  return xs;
}

function rest(xs) {
  return xs.slice(1);
}

function first(xs) {
  return xs[0];
}
