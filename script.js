(function() {
  const myQuestions = [
    {
      question: "What is my favorite anime?",
      answers: {
        a: "Gintama",
        b: "Haikyuu!",
        c: "Monster"
       },
      correctAnswer: "a" 
    
    },
    {
      question: "What is my favorite fast food fries?",
      answers: {
        a: "McDonalds",
        b: "Jack In the Box",
        c: "In-N-Out"
      },
      correctAnswer: "c"
    },
    {
      question: "What is my favorite place to visit?",
      answers: {
        a: "France",
        b: "Japan",
        c: "Italy",
       
      },
      correctAnswer: "b"
    },
    {
      question: "Which food ingredient do I hate?",
      answers: {
        a: "Bean sprout",
        b: "Mushroom",
        c: "Green bean",
       
      },
      correctAnswer: "b"
    },
     {
      question: "What is my middle name?",
      answers: {
        a: "Kim",
        b: "Hanh",
        c: "Khanh",
       
      },
      correctAnswer: "c"
    },
     {
      question: "Where was I born?",
      answers: {
        a: "Saigon, Vietnam",
        b: "Ha Noi, Vietnam",
        c: "Nha Trang, Vietnam",
       
      },
      correctAnswer: "a"
    },
     {
      question: "What was my middle school mascot?",
      answers: {
        a: "Lion",
        b: "Dolphin",
        c: "Eagle",
       
      },
      correctAnswer: "c"
    },
     {
      question: "What is my favorite Marvel movie?",
      answers: {
        a: "Avengers: Endgame",
        b: "Doctor Strange",
        c: "Shang-Chi",
       
      },
      correctAnswer: "b"
    },
     {
      question: "What is my favorite meal of the day?",
      answers: {
        a: "Breakfast",
        b: "Lunch",
        c: "Dinner",
       
      },
      correctAnswer: "c"
    },
     {
      question: "How many countries have I traveled to?",
      answers: {
        a: "10",
        b: "11",
        c: "12",
       
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of my favorite manga?",
      answers: {
        a: "Berserk",
        b: "Space Brothers",
        c: "Monster",
       
      },
      correctAnswer: "b"
    },
    {
      question: "Which is my favorite ice cream flavor?",
      answers: {
        a: "Coffee",
        b: "Strawberry",
        c: "Cookies and cream",
       
      },
      correctAnswer: "a"
    },
    {
      question: "How many times did I fail the driving test?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
       
      },
      correctAnswer: "a"
    },
    {
      question: "What is my favorite pizza topping?",
      answers: {
        a: "Spinach",
        b: "Pineapple",
        c: "Onion",
       
      },
      correctAnswer: "b"
    },
    {
      question: "What did I want to be when I was a kid?",
      answers: {
        a: "Nurse",
        b: "Actress",
        c: "Astronaut",
       
      },
      correctAnswer: "c"
    },
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


        
        
   
    
    
    
    
        

