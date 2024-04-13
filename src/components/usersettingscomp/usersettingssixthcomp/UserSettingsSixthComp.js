import React from "react";
import "./style.css";
import Card from "../shared/Card";
import PurpleButton from "../shared/PurpleButton";

const cardName = "Deactivate your profile";
const description= "Deactivating your profile will hide it on Buyers Folio and prevent you from being matched with our agents. You can reactivate your profile at any time."

export default function UserSettingsSixthComp() {
  return (
    <>
      <div className="user-settings-sixth-comp-container">
        <Card name={cardName}>
          <div className="user-settings-sixth-comp-document-item-desciption">
            {description}
          </div>
          <div className="user-settings-sixth-comp-document-item-button">
            <PurpleButton text="Deactivate your profile" width="18em"/>
          </div>
        </Card>
      </div>
    </>
  );
}
