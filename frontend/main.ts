const form = document.getElementById("zodiacForm") as HTMLFormElement;
const resultSectn = document.getElementById("result") as HTMLElement;

// submit event listener logic
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = getFormData(form);
    console.log(formData)
})

// function that retrieves form data
const getFormData = (form: HTMLFormElement) => {

    // uses browser API FormData to read form contents 
    const formInfo = new FormData(form);
    return {
        name: formInfo.get('name') as string,
        birthday: formInfo.get('birthday') as string,
    }
};
