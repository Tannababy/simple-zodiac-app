const form = document.getElementById("zodiacForm") as HTMLFormElement;
const resultSectn = document.getElementById("result") as HTMLElement;

// submit eventListener logic
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = getFormData(form);
  console.log(formData);
});

// function that gets form data
const getFormData = (form: HTMLFormElement) => {
  // instantiate browser API FormData to read form contents with .get method
  const formInfo = new FormData(form);

  // returns form content needed as an object, using the name attributes of the inputed data
  return {
    name: formInfo.get("name") as string,
    birthday: formInfo.get("birthday") as string,
  };
};

// function that sends POST request to backend
// async because it always returns a Promise

const submitFormData = async (data: { name: string; birthday: string }) => {

  try {
      // HTTP request using browser API fetch() takes URL and object
      // must send object with fetch else it will default to GET request
    const response = await fetch("URl", {
      method: "POST",
      // headers contain metadata like 'Content-Type' that tell server what format body is in
      headers: { "Content-Type": "application/json" },
      //POST request - the body must be a JSON string not an object in fetch
      body: JSON.stringify(data),
    });
      
      // checks status of request and returns json reponse if ok
      if (!response.ok) { throw new Error(`Server error: ${response.status}`); }
      else { return await response.json(); }

  } catch(err) {
      // catch block handles any errors thrown
      console.log(`The following error occured when submitting form: ${err}`);
      return { name: '', zodiac: 'Error' } // default object
  }
};
