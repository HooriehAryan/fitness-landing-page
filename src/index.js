function workout() {
  let name = prompt("Welcome! Before we start, what is your name?");
  while (name.length === 0) {
    name = prompt("Welcome! Before we start, what is your name?");
  }
  let level = prompt(
    "What is your level in exercising? Beginner <1 Year, intermediate 2 Years, or Advanced +3 Years? "
  );
  level = level.toLowerCase().trim();
  if (level === "beginner") {
    alert("No worries. We will set you up with a few starter workouts.");
  } else if (level === "intermediate" || level === "advanced") {
    alert(
      "Great! We will give you some new workouts that will push you to the next level."
    );
  }
  while (
    level != "beginner" &&
    level != "intermediate" &&
    level != "advanced"
  ) {
    level = prompt(
      "What is your level in exercising? Beginner <1 Year, intermediate 2 Years, or Advanced +3 Years? "
    );
  }

  do {
    let email = prompt("What is your email address?");
    if (email.length != 0) {
      if (!validateEmail(email)) {
        {
          alert("you email address is invalid !!!");
        }
      } else break;
    }
  } while (true);
  alert(
    "Thank you " + name + "! We will be in touch for your personal workouts."
  );
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let createButton = document.querySelector(".workoutButton");
createButton.addEventListener("click", workout);

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
