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
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form--input"
          type="firstName"
          placeholder="firsName"
          name="firstName"
          onChange={eventhandler}
        />

        <input
          className="form--input"
          type="lastName"
          placeholder="lastName"
          name="lastName"
          onChange={eventhandler}
        />
        <input
          className="form--input"
          type="password"
          placeholder="password"
          name="password"
          onChange={eventhandler}
        />
        <input
          className="form--input"
          type="reWritePassword"
          placeholder="reWritePassword"
          name="reWritePassword"
          onChange={eventhandler}
        />
        <br />
        <br />
        <div className="form--marketing">
          <input
            type="checkbox"
            id="getNews"
            name="getNews"
            onChange={eventhandler}
            checked={formData.getNews}
          />

          <label htmlFor="getNews">do you want to get the news? </label>
        </div>
        <br />
        <br />
        <button className="form--submit">submit</button>
      </form>
    </div>
  );
}
