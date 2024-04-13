import React from "react";
import "./style.css";
import cancleIcon from "../../../assets/images/cancle-icon.svg";
import Card from "../shared/Card";
import PurpleButton from "../shared/PurpleButton";

const cardName = "Group Settings";

const cardDescription =
  "Share your favorites, comments and saved searches with others.";

const FriendCard = () => {
  return (
    <div className="user-settings-fourth-comp-friend-card">
      <div className="user-settings-fourth-comp-friend-card-send">
        Sent Co-buyer Invite
      </div>
      <div className="user-settings-fourth-comp-friend-card-email">
        juliebrownn@gmail.com
      </div>
      <img src={cancleIcon}></img>
    </div>
  );
};

export default function UserSettingsFourthComp() {
  return (
    <>
      <div className="user-settings-fourth-comp-container">
        <Card name={cardName}>
          <div className="user-settings-fourth-comp-description">
            {cardDescription}
          </div>
          <div className="user-settings-fourth-comp-friend-card-group">
            <FriendCard />
            <FriendCard />
            <FriendCard />
          </div>
          <div className="user-settings-fourth-comp-button-group">
            <div className="user-settings-fourth-comp-button">
              <PurpleButton text="Add your Co-buyer" />
            </div>
            <div className="user-settings-fourth-comp-button">
              <PurpleButton text="Add your friend" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
