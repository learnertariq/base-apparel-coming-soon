import React, { useState } from "react";
import Joi from "joi";

function Input({ type = "text" }) {
  const [error, setError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();

    const { error } = validate(e.target.firstChild.value);
    if (error) return setError(error.details[0].message);

    setError(null);
  }

  return (
    <div className='input-wrapper'>
      <form className="input-group" onSubmit={handleSubmit}>
        <input placeholder="Email Address" class="input" type={type} />
        <button className="btn btn-input">
          <i className="fa fa-chevron-right"></i>
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

function validate(email) {
  const schema = Joi.object().keys({
    email: Joi.string().email({ tlds: { allow: false } }).label('Email'),
  });

  return schema.validate({ email });
}

export default Input;
