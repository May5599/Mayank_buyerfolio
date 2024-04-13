import React from "react";
import "./style.css";
import Card from "../shared/Card";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton } from '@mui/material';
import editIcon from '../../../assets/images/edit-outline.svg';
import deleteIcon from '../../../assets/images/delete.svg';
import careerIcon from '../../../assets/images/career.svg';
import salaryIcon from '../../../assets/images/salary.svg';
import moveInIcon from '../../../assets/images/move-in.svg';
import propertiesIcon from '../../../assets/images/properties.svg';
import panel from "../../../assets/images/user-settings-panel.svg"

const CardName = "Background and Preferences";

const data = [
  { icon: <img className="usersettings-second-comp-table-cell-img" src={careerIcon} />, label: 'Career', value: 'Manager' },
  { icon: <img className="usersettings-second-comp-table-cell-img" src={salaryIcon} />, label: 'Salary', value: '$75k-$85k' },
  { icon: <img className="usersettings-second-comp-table-cell-img" src={propertiesIcon} />, label: 'Properties', value: 'December 1, 2022' },
  { icon: <img className="usersettings-second-comp-table-cell-img" src={moveInIcon} />, label: 'Move In Date', value: 'First time home buyer' },
];

const cellCommonStyles = {
  padding: 0,
  fontSize: "1.1rem"
};


const CustomTable = () => {
  return (
    <TableContainer className="usersettings-second-comp-table-container" component={Paper} elevation={0} variant="outlined" sx={{ width: `calc(100% - 6em)`, mt: "1rem", ml: "3em", mr: "3em", border: "0" }}>
      <Table aria-label="customized table">
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.label} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="usersettings-second-comp-table-cell" sx={{ height: "2rem", width: "9%", padding: 0, fontSize: "1.1rem" }} component="th" scope="row">
                <IconButton className="usersettings-second-comp-table-cell-icon">
                  {row.icon}
                </IconButton>
              </TableCell>
              <TableCell className="usersettings-second-comp-table-cell" sx={{ width: "36%", ...cellCommonStyles }}>{row.label}</TableCell>
              <TableCell className="usersettings-second-comp-table-cell" sx={{ width: "42%", ...cellCommonStyles, fontWeight: "700" }} align="left">{row.value}</TableCell>
              <TableCell className="usersettings-second-comp-table-cell" sx={{ width: "1rem", ...cellCommonStyles }} align="right">
                <IconButton className="usersettings-second-comp-table-cell-icon" aria-label="edit">
                  <img className="usersettings-second-comp-table-cell-img" src={editIcon} />
                </IconButton>
              </TableCell>
              <TableCell className="usersettings-second-comp-table-cell" sx={{ height: "2rem", width: "1rem", padding: 0 }} align="right">
                <IconButton className="usersettings-second-comp-table-cell-icon" aria-label="delete">
                  <img className="usersettings-second-comp-table-cell-img" src={deleteIcon} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export function UserSettingsSecondCompFirst() {
  return (
    <Card
      name={CardName}
      width={"100%"}
      height={"100%"}
    >
      <CustomTable></CustomTable>
    </Card>
  );
}

export function UserSettingsSecondCompSecond() {
  return (
    <div className="usersettings-second-comp-second">
      <div style={{ fontWeight: "700", fontSize: "1rem", color: "#273653" }}>FINANCIAL DNA</div>
      <img src={panel} style={{ width: "85%", maxHeight:"80%" }}></img>
    </div>
  );
}

export default function UserSettingsSecondComp() {
  return (
    <>
      <div className="user-settings-second-comp-container">
        <div className="usersettings-second-comp-first">
          <Card
            name={CardName}
          >
            <CustomTable></CustomTable>
          </Card>
        </div >
        <UserSettingsSecondCompSecond />
      </div>
    </>
  );
}
