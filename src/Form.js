import React from "react";

export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    reWritePassword: "",
    getNews: true,
  });

  function eventhandler(event) {
    const { name, value, type, checked } = event.target;
    setformData((prevSetFormData) => {
      return {
        ...prevSetFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    formData.password === formData.reWritePassword
      ? console.log("thats it!!")
      : console.log("wrong password");
    formData.getNews === true ? console.log("thanks") : console.log("okk");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="firstName"
          type="firstName"
          placeholder="firsName"
          name="firstName"
          onChange={eventhandler}
        />

        <input
          className="lastName"
          type="lastName"
          placeholder="lastName"
          name="lastName"
          onChange={eventhandler}
        />
        <input
          className="password"
          type="password"
          placeholder="password"
          name="password"
          onChange={eventhandler}
        />
        <input
          className="reWritePassword"
          type="reWritePassword"
          placeholder="reWritePassword"
          name="reWritePassword"
          onChange={eventhandler}
        />
        <input
          type="checkbox"
          id="getNews"
          name="getNews"
          onChange={eventhandler}
          checked={formData.getNews}
        />

        <label htmlFor="getNews">do you want to get the news? </label>
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}
