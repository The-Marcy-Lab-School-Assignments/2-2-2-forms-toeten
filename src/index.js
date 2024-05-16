/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  event.preventDefault()
  const form = event.target
  debugger;
  const formValues = Object.fromEntries(new FormData(form));

  form.reset();
};




const main = () => {
  document.querySelector('form').addEventListener('submit', handleSubmit)
};

main();
