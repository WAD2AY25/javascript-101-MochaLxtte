function ex1() {
  /*
        TODO: return the value of newperson.firstName and the value of newcars[0] as a concatenated string
    */
  var cars = ["Saab", "Volvo", "BMW"];
  var newcars = cars;
  var person = { firstName: "Yournal", lastName: "Drunk", age: 50 };
  var newperson = person;
  person.firstName = "Jun";
  cars[0] = "what";

  return newperson.firstName + newcars[0]; // e.g., "YournalSaab"
}

function ex2() {
  /*
        TODO: 
            - run the given Javascript expression in JavaScript console 
            - return all the results together as a concatenated string

            console.log(5 + "34"); 
            console.log("Bob" - "bill")
            console.log(5 - "4")      
            console.log(5 % 10)
            console.log(true + true)
            console.log(false - true)
            console.log(5 >= 1)
            console.log("A" > "B")
            console.log("a" > "A")
            console.log(true != true)

    */
  const a = String(5 + "34");
  const b = String("Bob" - "bill");
  const c = String(5 - "4");
  const d = String(5 % 10);
  const e = String(true + true);
  const f = String(false - true);
  const g = String(5 >= 1);
  const h = String("A" > "B");
  const i = String("a" > "A");
  const j = String(true != true);

  return a + b + c + d + e + f + g + h + i + j; // e.g., the result of the first two expressions is "534NaN"
}

function ex3(firstNumber, secondNumber) {
  /*
        TODO:
            - validate if both firstNumber and secondNumber are Numbers
            - if yes, return the sum of the two numbers
            - else return the string "NaN"
    
    */
  n1 = Number(firstNumber);
  n2 = Number(secondNumber);

  if (isNaN(n1) || isNaN(n2)) {
    return "NaN";
  } else {
    return n1 + n2;
  }
}

function ex4(persons) {
  /*
        TODO:
            - Given persons list, loop through the list
            - find the Youngest person called “The Chosen One”
            - return his age 
               

        // data structure of persons (example)
        var persons = [ 
            {name: "The Forgotten One", age: 50},
            {name: "The Special One", age: 55},
            {name: "The Happy One", age: 58},
            {name: "The Chosen One", age: 54},
            {name: "The Babyface One", age: 48},
            {name: "The Chosen One", age: 44},
        ]

        (in this example, the function return 44)
    */
  for (let person of persons) {
    if (person.name == "The Chosen One") {
      return person.age;
    }
  }
}

function ex5(str) {
  /*
     TODO:
            - Given a string, check whether the string is a palindrome or not.
            - if yes, return the Boolean true
            - else, return false 

        **A palindrome is a string which reads the same backward as forward. For example, “Race Car” and “Anna” are palindromes. “Apple Pie” and “John” are not. Ignore spaces in deciding a palindrome.

    */

  str = str.toLowerCase().replaceAll(" ", "");
  reversed_str = str.split("").reverse().join("");
  return reversed_str == str;
}

function computeAverageScore(students) {
  /*
    TODO: Complete computeAverageScore function so that it
        - calculate average score of students
        - return average score

    // data structure of students (example)
        const students = [
            { name: "Alice", score: 65 },
            { name: "Bob", score: 47 },
            { name: "Charlie", score: 88 }
            { name: "Don", score: 40 }
        ]

        (in this example, the function return 60)

    */
  let result = 0;
  for (let student of students) {
    result += student.score;
  }

  return result / students.length;
}

function checkStatus(student) {
  /*
    Complete checkStatus function so that it
        - check the score of a given student
        - return "Pass" if the score is >= 50; otherwise "Fail"

    // data structure of a student (example)
        const student = { name: "Alice", score: 65 }
          
        (in this example, the function return 'Pass')
*/
  return student.score >= 50 ? "Pass" : "Fail";
}

module.exports = { ex1, ex2, ex3, ex4, ex5, computeAverageScore, checkStatus };
