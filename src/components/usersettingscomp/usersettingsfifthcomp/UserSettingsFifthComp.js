import React from "react";
import "./style.css";
import Card from "../shared/Card";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import editIcon from "../../../assets/images/edit-outline.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import VerifiedFlag from "../shared/VerifiedFlag";
import { documentData } from "./tableData";
import PurpleButton from "../shared/PurpleButton";
import purpleBackgroundEditIcon from "../../../assets/images/purple-background-edit-icon.svg"
import documentIcon from "../../../assets/images/document-icon.svg"

const CardName = "Upload Documents";

const documentItems = [
  {
    title: "Pre-Approval Letter",
    buttonName: "Upload Letter",
    description:
      "Demonstrates your ability to obtain a mortgage for the amount in the offer.",
  },
  {
    title: "Pre-Approval Letter",
    buttonName: "Verify ID",
    description:
      "To ensure the safety of our agents, we need you to verify your identity before we can take you on a home tour.",
  },
];

const DocumentCard = () => {
  return (
    <div className="user-settings-fifth-comp-document-card" style={{ display: "flex", background: "rgba(119, 49, 228, 0.10)", borderRadius: "9px", padding: "0.5em 1em", maxWidth:"20em" }}>
      <div className="user-settings-fifth-comp-document-card-document-icon" style={{ marginRight: "0.6em" }}>
        <img src={documentIcon}></img>
      </div>
      <div className="user-settings-fifth-comp-document-card-text">
        <div className="user-settings-fifth-comp-document-card-title" style={{ fontSize: "0.8em", fontWeight: "700", marginBottom: "0.5em" }}>
          Co-ownership Agreement
        </div>
        <div className="user-settings-fifth-comp-document-card-description-and-date" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "0.8em", fontWeight: "700", marginRight: "0.2em" }}>
          <div className="user-settings-fifth-comp-document-card-description" style={{ fontSize: "0.6em", color: "#616161", width: "70%", fontWeight: "700" }}>
            Mutual Non-Disclosure Agreement
          </div>
          <div className="user-settings-fifth-comp-document-card-date" style={{ fontSize: "0.8em", color: "#616161", fontWeight: "400" }}>
            5/5/2021
          </div>
        </div>
        <div className="user-settings-fifth-comp-document-card-category" style={{ fontSize: "0.4em", fontWeight: "600", color: "#545454", marginTop: "0.5em" }}>
          draft
        </div>
      </div>
      <div className="user-settings-fifth-comp-document-card-edit-icon" style={{ fontSize: "0.8em", fontWeight: "700" }}>
        <img src={purpleBackgroundEditIcon}></img>
      </div>
    </div>
  );
};

const DocumentItem = ({ title, buttonName, description }) => {
  return (
    <div className="user-settings-fifth-comp-document-item">
      <div>
        <div className="user-settings-fifth-comp-document-item-name">
          {title}
        </div>
        <VerifiedFlag status={"Not Verified"} />
      </div>
      <div className="user-settings-fifth-comp-document-item-desciption">
        {description}
      </div>
      <div className="user-settings-fifth-comp-document-item-button">
        <PurpleButton text={buttonName} width="9em" height="2.5em" />
      </div>
    </div>
  );
};

const cellCommonStyles = {

};

const headCellCommonStyles = {
  fontWeight: "700",
};

const headCellTitles = [
  "#",
  "Document Name",
  "Type",
  "Time",
  "Timestamp",
  "",
  "",
];

<TableRow
  sx={{
    borderBottom: "0.25em solid #7152A2",
    backgroundColor: "#E8DCFA",
  }}
>
  {headCellTitles.map((title, index) => (
    <TableCell key={index} sx={{ ...headCellCommonStyles }}>
      {title}
    </TableCell>
  ))}
</TableRow>;

const CustomTable = () => {
  return (
    <TableContainer
      className="usersettings-fifth-comp-table-container"
      component={Paper}
      elevation={0}
      variant="outlined"
    >
      <Table aria-label="custom document table">
        <TableHead>
          <TableRow
            sx={{
              borderBottom: "0.15em solid #7152A2",
              backgroundColor: "#E8DCFA",
            }}
          >
            {headCellTitles.map((title, index) => (
              <TableCell className="usersettings-fifth-comp-table-cell usersettings-fifth-comp-table-head" key={index} sx={{ ...headCellCommonStyles }}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {documentData.map((doc, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="usersettings-fifth-comp-table-cell"
                sx={{
                  ...cellCommonStyles,
                  width: "5%",
                }}
              >
                {index + 1}
              </TableCell>
              <TableCell
                className="usersettings-fifth-comp-table-cell"
                sx={{
                  ...cellCommonStyles,
                  width: "22%",
                }}
              >
                {doc.documentName}
              </TableCell>
              <TableCell
                className="usersettings-fifth-comp-table-cell"
                sx={{
                  ...cellCommonStyles,
                  fontWeight: "700",
                  width: "20%",
                }}
              >
                {doc.type}
              </TableCell>
              <TableCell
                className="usersettings-fifth-comp-table-cell"
                sx={{
                  ...cellCommonStyles,
                  fontWeight: "700",
                  width: "22%",
                }}
              >
                {doc.date}
              </TableCell>
              <TableCell
                className="usersettings-fifth-comp-table-cell"
                sx={{
                  ...cellCommonStyles,
                  fontWeight: "700",
                  width: "22%",
                }}
              >
                {doc.timestamp}
              </TableCell>
              <TableCell align="right" className="usersettings-fifth-comp-table-cell">
                <IconButton aria-label="edit" className="usersettings-fifth-comp-table-cell-icon" >
                  <img src={editIcon} className="usersettings-fifth-comp-table-cell-img" />
                </IconButton>
              </TableCell>
              <TableCell align="right" className="usersettings-fifth-comp-table-cell">
                <IconButton aria-label="delete" className="usersettings-fifth-comp-table-cell-icon">
                  <img src={deleteIcon} className="usersettings-fifth-comp-table-cell-img" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function UserSettingsFifthComp() {
  return (
    <>
      <div className="user-settings-fifth-comp-container">
        <Card name={CardName}>
          {documentItems.map((item) => (
            <DocumentItem
              title={item.title}
              buttonName={item.buttonName}
              description={item.description}
            />
          ))}
          <div className="user-settings-fifth-comp-table">
            <CustomTable />
          </div>
          <div className="user-settings-fifth-comp-document">
            <DocumentCard />
            <DocumentCard />
          </div>
        </Card>
      </div>
    </>
  );
}
