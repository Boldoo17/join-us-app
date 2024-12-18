import React, { useState } from "react";

export default function StepTwo({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.phoneNumber.match(/^\d{8}$/)) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    if (!formData.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      newErrors.password = "Password must include letters and numbers.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match. Please try again.";
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

      <p className="mb-4 text-gray-600">
        Please provide all current information accurately.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700">Email*</label>
        <input
          type="text"
          placeholder="Placeholder"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Phone number*</label>
        <input
          type="text"
          placeholder="Placeholder"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className={`w-full p-2 border ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Password*</label>
        <input
          type="password"
          placeholder="Placeholder"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className={`w-full p-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Confirm password*</label>
        <input
          type="password"
          placeholder="Placeholder"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className={`w-full p-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Continue 2/3
        </button>
      </div>
    </form>
  );
}
