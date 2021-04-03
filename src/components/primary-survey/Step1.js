import { Typography } from "@material-ui/core";
import "../../styles/ToggleButtons.css";

export const Step1 = ({ state, onChange: handleStep1Change }) => {
  return (
    <>
      <Typography variant="h5" color="primary">
        What are you looking for?
      </Typography>
      <div className="general-info">
        <div className="toggle-button">
          {state === "projectpartner" && (
              <input
                type="radio"
                name="step1"
                id="projectpartner"
                onChange={handleStep1Change}
                checked={state}
              />
          )}
          {state !== "projectpartner" && (
              <input
                type="radio"
                name="step1"
                id="projectpartner"
                onChange={handleStep1Change}
                defaultChecked={state.projectpartner}
              />
          )}
          <label className="toggle-label" htmlFor="projectpartner">
            Project Partner
          </label>
        </div>
        <div className="toggle-button">
          {state === "projecttojoin" && (
              <input
                type="radio"
                name="step1"
                id="projecttojoin"
                onChange={handleStep1Change}
                checked={state}
              />
          )}
          {state !== "projecttojoin" && (
              <input
                type="radio"
                name="step1"
                id="projecttojoin"
                onChange={handleStep1Change}
                defaultChecked={state.projecttojoin}
              />
          )}
          <label htmlFor="projecttojoin">Project To Join</label>
        </div>
        <div className="toggle-button">
          {state === "lookingaround" && (
              <input
                type="radio"
                name="step1"
                id="lookingaround"
                onChange={handleStep1Change}
                checked={state}
              />
          )}
          {state !== "lookingaround" && (
              <input
                type="radio"
                name="step1"
                id="lookingaround"
                onChange={handleStep1Change}
                degfaultChecked={state.lookingaround}
              />
          )}
           <label htmlFor="lookingaround"> Looking Around</label>
        </div>
      </div>
    </>
  );
};