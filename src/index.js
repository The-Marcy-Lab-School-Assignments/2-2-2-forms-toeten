/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  event.preventDefault()
  const form = event.target
  debugger;
  const formValues = Object.fromEntries(new FormData(form));
};

document.querySelector('form').addEventListener('submit', handleSubmit)
