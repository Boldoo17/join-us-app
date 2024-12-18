"use client";
import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

export default function Page() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleNext = (data) => {
    setUserData({ ...userData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && (
        <StepTwo onPrevious={handlePrevious} onNext={() => setStep(3)} />
      )}
      {step === 3 && (
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Success!</h2>
          <p className="text-gray-600">
            You’ve successfully completed the process. 🎉
          </p>
        </div>
      )}
    </div>
  );
}
