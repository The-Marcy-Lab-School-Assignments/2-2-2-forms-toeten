/** GENERAL FEEDBACK:
 * Your code is super clean, great job! I also love that you are using debugger to debug your code!
 */

const handleSubmit = (event) => {
  event.preventDefault()
  const form = event.target
  debugger;
  const formValues = Object.fromEntries(new FormData(form));
  console.log(formValues)
  document.getElementById("results-username").textContent = formValues.username
  document.getElementById("results-coding-level").textContent = formValues.codingLevel
  document.getElementById("results-location").textContent = formValues.location
  document.getElementById("results-did-like-assignment").textContent = formValues.didLikeAssignment ? "Yes" : "No"


  form.reset();
};



/** FEEDBACK: IS THIS A RUNNER FUNCTION!!!!! AHHHHH  */
const main = () => {
  document.querySelector('form').addEventListener('submit', handleSubmit)
};

main();
