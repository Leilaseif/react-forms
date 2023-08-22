import React from "react";

export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
  });

  function eventhandler(event) {
    setformData((prevSetFormData) => {
      return {
        ...prevSetFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}
