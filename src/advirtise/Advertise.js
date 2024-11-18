// Advertise.js
import React, { useState } from "react";
import FirstAdvertise from "./FirstAdvertise";
import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";
import Stepper from "./Stepper";
import SecondAdvertise from "./SecondAdvertise";

const steps = ["Add", "Details", "Contact", "Confirmation"];

const Advertise = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <FirstAdvertise nextStep={nextStep} />;
      case 1:
        return <SecondAdvertise nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <ContactForm nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <SuccessMessage />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="border rounded-lg p-4 my-4">{renderStepContent()}</div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`bg-red-500 text-white p-2 px-4 rounded ${
            currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className={`bg-red-500 text-white p-2 px-4 rounded ${
            currentStep === steps.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Advertise;
