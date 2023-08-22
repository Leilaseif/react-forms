import React from "react";

export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
  });

  function eventhandeler(event) {
    setformData(event.target.value);
  }
  console.log(firstName, lastName);
  return (
    <div>
      <form>
        <input
          className="firstName"
          type="firstName"
          placeholder="firsName"
          name="firstName"
          onChange={eventhandeler}
        />

        <input
          className="lastName"
          type="lastName"
          placeholder="lastName"
          name="lastName"
          onChange={eventhandeler}
        />
      </form>
    </div>
  );
}
