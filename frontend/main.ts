const form = document.getElementById("zodiacForm") as HTMLFormElement;
const resultSectn = document.getElementById("result") as HTMLElement;


form.addEventListener("submit", async (event) => {
  event.preventDefault();

    const formData = getFormData(form);
    const splitDate = birthdaySplitter(formData);
    console.log(splitDate)
//   const formResult = await submitFormData();
//   displayResult(formResult);
});


const getFormData = (form: HTMLFormElement) => {
  // instantiate browser API FormData to read form contents with .get method
  const formInfo = new FormData(form);

  // returns form content needed as an object, using the name attributes of the inputed data
  return {
    name: formInfo.get("name") as string,
    birthday: formInfo.get("birthday") as string,
    birthTime: formInfo.get("birthTime") as string,
    location: formInfo.get("city") as string,
  };
};

const birthdaySplitter = (formData: {name: string, birthday: string, birthTime: string, location: string}) => {

    for (const [key, value] of Object.entries(formData)) {
      if (key == 'birthday') {
        console.log(`Birthday is: ${value}`);
      }
    }
}


type DataStructure = {
  name: string;
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  latitude: number; //London
  longitude: number;
  timezone: number;
  config: {
    observation_point: string; // geocentric or topocentric
    ayanamsha: string; // tropical or sayana or lahiri
    language: string;
  };
};
// function that sends POST request to backend
// async because it always returns a Promise
const submitFormData = async (data: DataStructure) => {
  try {
    // HTTP request using browser API fetch() takes URL and object
    // must send object with fetch else it will default to GET request
    // const params = new URLSearchParams({
    //   birthday: "1995-05-20",
    //   name: "Lota",
    // });
    const API_KEY = "";
    const response = await fetch(
      `https://json.freeastrologyapi.com/western/planets`,
      {
        method: "POST",
        // headers contain metadata like 'Content-Type' that tell server what format body is in
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        //POST request - the body must be a JSON string not an object in fetch
        body: JSON.stringify(data),
      }
    );

    // checks status of request and return json reponse if ok
    if (!response.ok) {
      throw new Error(`Server at error: ${response.status}`);
    } else {
      return await response.json();
    }
  } catch (err) {
    // catch block handles any errors thrown
    console.log(`The following error occured when submitting form: ${err}`);
    return { name: "", zodiac: "Error" }; // default object so app does not break
  }
};

const displayResult = (formResult: { name: string; zodiac: string }) => {
  // changes result Section innterText to display what was sent
  resultSectn.innerText = `Hi ${formResult.name}, your sun sign is ${formResult.zodiac}, your moon sign is ${formResult.zodiac} and rising sign is ${formResult.zodiac}`;
};

// const dummyData = {
//   name: "Lotanna",
//   year: 1994,
//   month: 10,
//   date: 5,
//   hours: 13,
//   minutes: 10,
//   seconds: 0,
//   latitude: 51.5072, //London
//   longitude: 0.1276,
//   timezone: 1.0,
//   config: {
//     observation_point: "topocentric", // geocentric or topocentric
//     ayanamsha: "tropical", // tropical or sayana or lahiri
//     language: "en",
//   },
// };


