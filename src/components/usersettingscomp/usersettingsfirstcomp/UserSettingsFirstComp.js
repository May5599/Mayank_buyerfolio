import React from "react";
import "./style.css";
import profileEdit from "../../../assets/images/user-settings-profile-edit.svg";
import { IconButton, TextField } from "@mui/material";
import CardTitle from "../shared/CardTitle";
import NormalTitle from "../shared/NormalTitle";
import VerifiedFlag from "../shared/VerifiedFlag";
import PurpleButton from "../shared/PurpleButton";
import formData from "./profileFormData";

const CardName = "Judy Garcia";

const InputField = ({ placeholder }) => {
  return (
    <TextField
      className="user-settings-first-comp-textfield"
      value={placeholder}
    />
  );
};

const FormItem = ({ titleName, disableFlag, flagStatus, placeholder, emailTip }) => {
  return (
    <div className="user-settings-first-comp-profile-form-item">
      <div className="user-settings-first-comp-profile-form-title-line">
        <NormalTitle name={titleName} />
        {!disableFlag && <VerifiedFlag status={flagStatus} />}
      </div>
      <InputField placeholder={placeholder} />
      {emailTip && <EmailTip />}
    </div>
  );
};

const ProfileForm = ({ data }) => {
  return (
    <div className="user-settings-first-comp-profile-form">
      {data.map((item, index) => (
        <FormItem
          key={index}
          titleName={item.titleName}
          flagStatus={item.flagStatus}
          placeholder={item.placeholder}
          disableFlag={item.disableFlag}
          emailTip={item.emailTip}
        />
      ))}
    </div>
  );
};

const EmailTip = () => {
  return (
    <div className="user-settings-first-comp-email-tip">
      <div> {"Don't want any emails? \u00a0"} </div>
      <a style={{ color: "#7731E4", fontWeight: "700" }}>Unsubscribe.</a>
    </div>
  );
};

export default function UserSettingsFirstComp() {
  return (
    <>
      <div className="user-settings-first-comp-container">
        <div className="user-settings-first-comp-upper-rectangle"></div>

        <ProfileForm data={formData} />
        <div className="user-settings-first-comp-save-button">
          <PurpleButton
            text="Save Updates"
            width="10em"
          />
        </div>
        <div className="user-settings-first-comp-profile-image-and-name-and-edit">
          <div className="user-settings-first-comp-profile-image-and-name">
            <div className="user-settings-first-comp-image-overlay"></div>
            <div className="user-settings-first-comp-profile-name">
              <CardTitle name={CardName} />
            </div>
          </div>
          <div className="user-settings-first-comp-profile-edit">
            <IconButton>
              <img src={profileEdit} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
