import { useState, useEffect } from "react";
import firebase from "../../fire"

import { SurveySteps1 } from "./SurveySteps1";
import { SurveySteps2 } from "./SurveySteps2";
import { SurveySteps3 } from "./SurveySteps3";
import { SurveySteps4 } from "./SurveySteps4";
import { SurveyNavBtns } from "./SurveyNavBtns";
import { Step1 } from "./Step1";
import { Step1Image } from "./Step1Image";
import { Step1Name } from "./Step1Name";
import { Step2 } from "./Step2";
import { Step2Github } from "./Step2Github";
import { Step2LinkedIn } from "./Step2LinkedIn";
import { Step3 } from "./Step3";
import { Step3Projects } from "./Step3Projects";
import { Step4 } from "./Step4";
import { Step4Location } from "./Step4Location";

export const WizardForm = () => {

  const [userUid, setUserUid] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [step, setStep] = useState(1);
  const [step1Values, setStep1Values] = useState({});
  const [step1NameValues, setStep1Name] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [step2Values, setStep2Values] = useState({});
  const [step2GithubValues, setStep2GithubValues] = useState('');
  const [step2LinkedInValues, setStep2LinkedInValues] = useState('');
  const [step3Values, setStep3Values] = useState({});
  const [step3ProjectsValues, setStep3ProjectsValues] = useState('');
  const [step4Values, setStep4Values] = useState('');
  const [step4LocationValues, setStep4LocationValues] = useState('');

  useEffect(() => {
    setUserUid(firebase.auth().currentUser.uid)
    setUserEmail(firebase.auth().currentUser.email)
  }, [userUid]);

  const surveyAnswers = [
    step1NameValues,
    step1Values,
    step2Values,
    step3Values,
    step4Values,
    step4LocationValues,
    step3ProjectsValues,
    avatarUrl,
    step2GithubValues,
    step2LinkedInValues,
    userUid,
    userEmail
  ];

  const handleStep1Change = (event) => {
    setStep1Values({ [event.target.id]: event.target.checked });
  };
  const handleStep1NameChange = (event) => {
    setStep1Name(event.target.value);
  };
  const handleStep2Change = (event) => {
    setStep2Values({ ...step2Values, [event.target.id]: event.target.checked });
  };
  const handleStep2GithubChange = (event) => {
    setStep2GithubValues(event.target.value);
  };
  const handleStep2LinkedInChange = (event) => {
    setStep2LinkedInValues(event.target.value);
  };
  const handleStep3Change = (event) => {
    setStep3Values({ [event.target.id]: event.target.checked });
  };
  const handleStep3ProjectsChange = (event) => {
    setStep3ProjectsValues(event.target.value);
  };
  const handleStep4Change = (event) => {
    setStep4Values(event.target.value);
  };
  const handleStep4LocationChange = (event) => {
    setStep4LocationValues(event.target.value);
  };

  return (
    <>
      {step === 1 && <SurveySteps1 />}
      {step === 2 && <SurveySteps2 />}
      {step === 3 && <SurveySteps3 />}
      {step === 4 && <SurveySteps4 />}
      <form>
        {step === 1 && (
          <div className="survey-section">
            <div className="name-image-row">
              <Step1Name
                state={step1NameValues}
                onChange={handleStep1NameChange}
              />
              <Step1Image
                currentAvatarUrl={avatarUrl}
                changeAvatarUrl={setAvatarUrl}
              />
            </div>
            <Step1 state={step1Values} onChange={handleStep1Change} />
          </div>
        )}
        {step === 2 && (
          <div className="survey-section">
            <Step2 state={step2Values} onChange={handleStep2Change} />
          </div>
        )}
        {step === 3 && (
          <div className="survey-section">
            <Step3 state={step3Values} onChange={handleStep3Change} />
            <Step3Projects
              state={step3ProjectsValues}
              onChange={handleStep3ProjectsChange}
            />
          </div>
        )}
        {step === 4 && (
          <div className="survey-section">
            <Step4 state={step4Values} onChange={handleStep4Change} />
            <div className="github-linkedin-section">
              <Step4Location
                state={step4LocationValues}
                onChange={handleStep4LocationChange}
              />
              <Step2Github
                state={step2GithubValues}
                onChange={handleStep2GithubChange}
              />
              <Step2LinkedIn
                state={step2LinkedInValues}
                onChange={handleStep2LinkedInChange}
              />
            </div>
          </div>
        )}
      </form>
      {step !== 5 && (
        <SurveyNavBtns
          currentStep={step}
          onClick={setStep}
          answers={surveyAnswers}
        />
      )}
    </>
  );
};