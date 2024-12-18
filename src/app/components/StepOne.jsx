import React, { useState } from "react";

export default function StepOne({ onNext }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }

    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onNext(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
      <img src="logo.png" className="w-[60px] h-[60px]" />
      <h2 className="text-2xl mb-4 text-black">Join Us! 🏀</h2>

      <p className="mb-4 text-gray-400">
        Please provide all current information accurately.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700">First name*</label>
        <input
          type="text"
          placeholder="Placeholder"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className={`w-full p-2 border ${
            errors.firstName ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Last name*</label>
        <input
          type="text"
          placeholder="Placeholder"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className={`w-full p-2 border ${
            errors.lastName ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Username*</label>
        <input
          type="text"
          placeholder="Placeholder"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className={`w-full p-2 border ${
            errors.username ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Continue 1/3
        </button>
      </div>
    </form>
  );
}
