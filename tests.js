mocha.setup("bdd")
var assert = chai.assert
var should = chai.should()

//Correct the following tests without modifying the assert line
//The it's are descriptions of how to solve rather than normal behavior strings.

describe('`let` vs. `var`', () => {


  it('update scoping of the variables', () => {
    let flag;
    if (true) {
      flag = true
    }

    assert.equal(flag, true) //do NOT modify this line

  })


  it('update scoping of the variables', () => {

    if (true) {
      let flag = true
    }

    assert.throws(() => console.log(flag)) //do NOT modify this line

  })

})

describe('spread operators', function () {


  it('extract each item from the array', function () {

    const [a, b] = [...[1, 2]]


    assert.equal(a, 1) //do NOT modify this line
    assert.equal(b, 2) //do NOT modify this line

  })


  it('assign correct values to the variables using spread', function () {

    const [, a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]] // DO NOT modify RHS


    assert.equal(a, 1) //do NOT modify this line
    assert.equal(b, 2) //do NOT modify this line

    assert.deepEqual(rest, [3, 4, 5]) //do NOT modify this line

  })


  it('update to work with both spread and rest', function () {

    const [, ...rest] = [...[, 1, 2, 3, 4, 5]] // DO NOT modify RHS

    assert.deepEqual(rest, [1, 2, 3, 4, 5]) //do NOT modify this line

  })

})

describe('template strings', function () {


  it('create a simple template string', function () {

    let str = `like a string`


    assert.equal(str, 'like a string') //do NOT modify this line

  })


  it('update a template string to print a variable', function () {

    let x = 99
    let evaluated = `x=${x}`


    assert.equal(evaluated, 'x=99') //do NOT modify this line

  })


  it('update a template string to print multiple variables', function () {

    let x = 10
    let y = 20
    let evaluated = `${x}+${y}`


    assert.equal(evaluated, x + '+' + y) //do NOT modify this line

  })

})

describe('destructuring', function () {


  it('swap two variables in one operation', () => {

    let [y, x] = ['ax', 'why'] // DO NOT modify this line


    assert.deepEqual([x, y], ['why', 'ax']) //do NOT modify this line

  })

  it('make destruct work with leading comma operators', () => {

    const all = ['ax', 'why', 'zet']
    const [, , z] = all


    assert.equal(z, 'zet') //do NOT modify this line

  })
})

describe('arrow functions', function () {


  it('one parameter in a function can be written without parenthesis. Use the "p" parameter to fix the test', () => {

    var func = p => p + 1

    assert.equal(func(23), 24) //do NOT modify this line

  })


  it('many params require parenthesis', () => {

    var func = (p1, p2) => p1 + p2

    assert.equal(func(23, 42), 23 + 42) //do NOT modify this line

  })


  it('use `=>` ', function () {

    this.foo = 'bar'
    var fn = () => this.foo

    fn()

    assert.strictEqual(fn(), 'bar') //do NOT modify this line

  })


  it('`arguments` doesnt work inside arrow functions', function () {

    let fn = (x, y) => {
      return [x, y] //modify this line to return something that will satisfy the assertion
    }

    assert.equal(fn(1, 2).length, 2) //do NOT modify this line

  })
})

describe('class creation', () => {


  it('create a simple class named TestClass using Class notation', function () {

    class TestClass { }
    const instance = new TestClass()

    assert.equal(typeof instance, 'object') //do NOT modify this line

  })


  it('update constructor to store `id` on the class', function () {

    class User {
      constructor(id) {
        this.id = id;
      }
    }

    const user = new User(42)


    assert.equal(user.id, 42) //do NOT modify this line

  })


  it('define a method `writesTests` on the class and return false', function () {

    class User {
      writesTests() {
        return false
      }
    }

    const notATester = new User()
    assert.equal(notATester.writesTests(), false) //do NOT modify this line

  })


  it('create a class with multiple methods', function () {

    class User {
      constructor() {
        this.everWroteATest = false
      }
      wroteATest() {
        this.everWroteATest = true
      }

      isLazy() {
        return !this.everWroteATest
      }
    }

    const tester = new User()

    assert.equal(tester.isLazy(), true) //do NOT modify this line
    tester.wroteATest() //do NOT modify this line
    assert.equal(tester.isLazy(), false) //do NOT modify this line

  })


  it('create an anonymous class', () => {
    const classType = typeof class { }

    assert.equal(classType, 'function') //do NOT modify this line

  })


  it("Use 'async/await' method to resolve data from 'fetchStatus' method", (done) => {

    function fetchStatus() {
      return false
    }

    function testAsyncAwait() {
      let state = false // DO NOT CHANGE

      state = !fetchStatus()

      assert.equal(state, true) // DO NOT CHANGE
      done() // DO NOT CHANGE
    }

    testAsyncAwait()

  })

  it('"Generator functions" should yield first 3 values using generator', () => {

    // As part of this test, create a generator function `take`  which
    // accepts the count and an array, and yields values from
    // array till the count reaches.
    // Example: take(count, array) {}

    function* take(counr, array) {
      for (i = 0; i < array.length; i++) {
        yield array[i];
      }
    }

    const iterator = take(3, ['A', 'B', 'C']);

    // Do not modify any assertions
    assert.equal(iterator.next().value, 'A')
    assert.equal(iterator.next().value, 'B')
    assert.equal(iterator.next().value, 'C')
    assert.equal(iterator.next().value, undefined)
    assert.equal(iterator.next().done, true)
  })
})

// Run all our test suites.  Only necessary in the browser.
mocha.run()
