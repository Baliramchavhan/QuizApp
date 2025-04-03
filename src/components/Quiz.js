import React, { useState } from "react";
import "./Quiz.css"; 

const questions = [
  {q: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Manager", "Java Visual Machine", "Java Verification Module"]},
            {q: "Which keyword is used to define a class in Java?", options: ["define", "class", "struct", "new"]},
            {q: "Which of these is not a primitive data type in Java?", options: ["int", "float", "String", "boolean"]},
            {q: "What is the default value of a char variable in Java?", options: ["'0'", "'\\u0000'", "null", "empty space"]},
            {q: "Which package is automatically imported in every Java program?", options: ["java.io", "java.util", "java.lang", "java.net"]},
            {q: "Which method is called first in a Java application?", options: ["main", "start", "run", "init"]},
            {q: "Which of these access modifiers makes a variable accessible only within the same class?", options: ["public", "private", "protected", "default"]},
            {q: "Which loop is best suited when the number of iterations is known?", options: ["for", "while", "do-while", "switch"]},
            {q: "Which keyword is used to inherit a class in Java?", options: ["this", "super", "extends", "implements"]},
            {q: "Which exception is thrown when dividing by zero?", options: ["ArithmeticException", "NullPointerException", "NumberFormatException", "ArrayIndexOutOfBoundsException"]},
            {q: "What is method overloading?", options: ["Using multiple methods with the same name but different parameters", "Using methods in multiple classes", "Defining methods inside a constructor", "None of the above"]},
            {q: "What is method overriding?", options: ["Redefining a method in a subclass", "Using a method multiple times", "Creating multiple methods with the same name", "None of the above"]},
            {q: "Which keyword is used to call the parent class constructor?", options: ["this", "super", "extends", "parent"]},
            {q: "Which principle of OOP allows one class to derive properties from another?", options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"]},
            {q: "Which type of polymorphism is achieved at compile time?", options: ["Method overriding", "Method overloading", "Both", "None"]},
            {q: "Which keyword is used to restrict a class from being extended?", options: ["static", "final", "abstract", "private"]},
            {q: "What is an abstract class?", options: ["A class with no methods", "A class that cannot be instantiated", "A class that has only abstract methods", "None of the above"]},
            {q: "Which interface in Java is used to define a functional interface?", options: ["@FunctionalInterface", "@Interface", "@Override", "@Abstract"]},
            {q: "Which OOP concept binds data and methods together?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"]},
            {q: "What is the access modifier of an interface method by default?", options: ["private", "protected", "public", "default"]},
            {q: "What does the 'instanceof' keyword check?", options: ["If an object is an instance of a specific class", "If a class is instantiated", "If a method exists in a class", "None of the above"]},
            {q: "Which class is the superclass of all classes in Java?", options: ["Object", "Main", "Super", "Parent"]},
            {q: "What does the 'this' keyword refer to?", options: ["Current class object", "Parent class object", "Static variable", "None of the above"]},
            {q: "Which design principle is used to achieve abstraction?", options: ["Encapsulation", "Interfaces and Abstract Classes", "Inheritance", "Polymorphism"]},
            {q: "What is the purpose of a constructor in Java?", options: ["To create objects", "To define methods", "To inherit classes", "To override methods"]},
            {q: "Can an abstract class have constructors?", options: ["Yes", "No", "Only in child classes", "Depends on implementation"]},
            {q: "Can an interface have a constructor?", options: ["Yes", "No", "Only in Java 8 and later", "Only if it extends another interface"]},
            {q: "Which keyword is used to implement an interface in Java?", options: ["implements", "extends", "inherits", "interface"]},
            {q: "What is a static method in Java?", options: ["A method that belongs to the class rather than an instance", "A method that is final", "A method that overrides another method", "None of the above"]},
            {q: "What is the main advantage of encapsulation?", options: ["Hiding implementation details", "Faster execution", "Increased memory usage", "Easier debugging"]}
];

let correctAnswers = ["Java Virtual Machine", "class", "String", "'\\u0000'", "java.lang", "main", "private", "for", "extends", "ArithmeticException", "Using multiple methods with the same name but different parameters", "Redefining a method in a subclass", "super", "Inheritance", "Method overloading", "final", "A class that cannot be instantiated", "@FunctionalInterface", "Encapsulation", "public", "If an object is an instance of a specific class", "Object", "Current class object", "Interfaces and Abstract Classes", "To create objects", "Yes", "No", "implements", "A method that belongs to the class rather than an instance", "Hiding implementation details"];



function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  function saveAnswer(index, answer) {
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
  }

  function nextQuestions() {
    if (currentIndex + 4 < questions.length) {
      setCurrentIndex(currentIndex + 4);
    }
  }

  function prevQuestions() {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  }

  function submitQuiz() {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === correctAnswers[index]) {
        newScore += 2;
      }
    });
   
   alert(score >= 40 
      ? ` <p className="result-message"> 🎉 Congratulations! You passed with ${newScore} points!</p>` 
      : ` <p className="result-message">😞 You scored ${newScore} points. Better luck next time!</p>`);
    
  setIsDisabled(true);
  setTimeout(() => setIsDisabled(false), 1 * 60 * 1000);

  }

  return (
    <div className="quiz-container">
      <h2>Java Quiz</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.slice(currentIndex, currentIndex + 4).map((q, index) => (
          <div key={index} className="question">
            <p>{currentIndex + index + 1}) {q.q}</p>
            {q.options.map((option, i) => (
              <span key={i}>
                <label>
                  <input
                    type="radio"
                    name={`q${currentIndex + index}`}
                    value={option}
                    checked={selectedAnswers[currentIndex + index] === option}
                    onChange={() => saveAnswer(currentIndex + index, option)}
                  /> {option}
                </label>
                <br/>
                
              </span>
            ))}
          </div>
        ))}
        <div className="nav-buttons">
          <button type="button" disabled={currentIndex === 0} onClick={prevQuestions}>Previous</button>
          <button type="button" disabled={currentIndex + 4 >= questions.length} onClick={nextQuestions}>Next</button>
        </div>
       <button id="submitBtn" onClick={submitQuiz} disabled={isDisabled}>
                Submit Quiz
            </button>
      </form>
    
    </div>
  );
}

export default Quiz;
