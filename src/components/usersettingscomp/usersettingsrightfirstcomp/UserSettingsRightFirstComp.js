import React from "react";
import "./style.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import checkboxicon from "../../../assets/images/checkbox.svg";

function CheckboxListSecondary() {
  return (
    <List
      dense
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        padding: 0,
        margin: 0,
      }}
    >
      {[
        { id: 0, text: "Profile information" },
        { id: 1, text: "Saved Searches Settings" },
        { id: 2, text: "Group Settings" },
        { id: 3, text: "Upload Documents" },
      ].map((item) => {
        const labelId = `checkbox-list-secondary-label-${item.id}`;
        return (
          <ListItem
            className="user-settings-right-first-comp-item"
            key={item.id}
            secondaryAction={<img className="user-settings-right-first-comp-icon" src={checkboxicon} />}
            disablePadding
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
              height: "25%",
              "&:last-of-type": {
                borderBottom: "none",
              },
              padding:"0",
            }}
          >
            <ListItemButton className="user-settings-right-first-comp-button">
              <ListItemText className="user-settings-right-first-comp-text" id={labelId} primary={item.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default function UserSettingsRightFirstComp() {
  return (
    <>
      <div className="user-settings-right-first-comp-container">
        <CheckboxListSecondary />
      </div>
    </>
  );
}
