// With our new knowledge of the DOM, Web APIs and event listeners, we've got everything we need to build a front-end web app!

// Let's build a good old todo list! It'll need to look something like this when we're done https://coderacademyedu.github.io/resources/vanilla_js_todo_demo.html

// Here are the requirements:

// 1. Add an input box and a button to your app.
// 2. When the user clicks the button, make a new todo item appear on the page.
// 3. Set the input box back to an empty value when a task is added.
// 4. Show the total number of tasks somewhere.
// 5. We should be using forms with our input! Wrap your input box and button in a form. Make sure the button is a submit button. You'll need to update your event listener from `on button click` to `on form submit`. Pro tip: preventDefault will be helpful here.
// 6. We can remove the button. Pressing enter will submit the form.
// 7. Add some style to make it look similar to what is in the demo above

// Extra:

// 1. Allow tasks to be marked as complete.
// 2. Add a progress bar to show % of tasks completed.
// 3. Allow tasks to be removed.
// 4. Update the input functionality. It should also search the tasks as a user types.
// 5. Refreshing the page wipes all our data! Find a way to persist data.

const countDisplay = document.querySelector(".count");
const form = document.querySelector("form");
const list = document.querySelector(".list");

let count = [];
let total = 0;
countDisplay.innerHTML = total;


function GetUserInput() {
  let userInput = document.getElementById("to-do").value;
  count.push(userInput);
  total = count.length;
  countDisplay.innerHTML = total;
 
  return userInput;
}
 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  list.insertAdjacentHTML(
    "afterend",
    `<div id="detail">${GetUserInput()}
    <div class="button-layout">
    <button id="status">Doing</button> 
    <button id="remove"> Delete </button></div> </div>`
  );
  form.reset();

  const detail = document.querySelector("#detail");
  const status = document.querySelector("#status");
  const remove = document.querySelector("#remove");

  status.addEventListener("click", (event) => {
    
    status.innerText = 'Done';
    status.style.color = 'orange';
    let index = detail.innerText[0];
    count.splice(index,1);
    countDisplay.innerHTML = count.length;
  });

  remove.addEventListener('click',(event)=> {
    detail.remove();
  })
});




// form.style.color = 'green';
// form.style.textAlign = 'center';
