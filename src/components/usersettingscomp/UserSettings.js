import React from "react";
import Navbar from "../../pages/Navbar"
import Footer from "../footer/Footer";
import "./style.css"
import UserSettingsFirstComp from "./usersettingsfirstcomp/UserSettingsFirstComp";
import UserSettingsSecondComp, { UserSettingsSecondCompFirst, UserSettingsSecondCompSecond } from "./usersettingssecondcomp/UserSettingsSecondComp";
import UserSettingsThirdComp from "./usersettingsthirdcomp/UserSettingsThirdComp";
import UserSettingsFourthComp from "./usersettingsfourthcomp/UserSettingsFourthComp";
import UserSettingsFifthComp from "./usersettingsfifthcomp/UserSettingsFifthComp";
import UserSettingsSixthComp from "./usersettingssixthcomp/UserSettingsSixthComp";
import UserSettingsRightFirstComp from "./usersettingsrightfirstcomp/UserSettingsRightFirstComp";
import UserSettingsRightSecondComp from "./usersettingsrightsecondcomp/UserSettingsRightSecondComp";
import Sidebar from "../Sidebar";

export default function UserSettings() {
    return (
        <div style={{ background: "#F5F5F5" }}>
            {/* <Navbar /> */}
            <div className="user-settings-container" >
                <div className="user-settings-left-container">
                    {/* <Sidebar /> */}
                </div>
                <div className="user-settings-middle-container">
                    <div className="user-settings-tablet-first-container">
                        <UserSettingsFirstComp />
                        <div className="user-settings-tablet-extra-first">
                            <UserSettingsRightFirstComp />
                            <UserSettingsRightSecondComp />
                        </div>
                    </div>
                    <div className="user-settings-extra-first">
                        <UserSettingsRightFirstComp />
                    </div>
                    <div className="user-settings-extra-second">
                        <div style={{ width: `calc(50% - 0.5em)` }}>
                            <UserSettingsSecondCompSecond />
                        </div>
                        <div style={{ width: `calc(50% - 0.5em)` }}>
                            <UserSettingsRightSecondComp />
                        </div>
                    </div>
                    <div className="user-settings-extra-third">
                        <UserSettingsSecondCompFirst />
                    </div>
                    <div className="user-settings-second-comp-page-container">
                        <UserSettingsSecondComp />
                    </div>
                    <div className="user-settings-tablet-normal-container">
                        <UserSettingsThirdComp />
                    </div>
                    <div className="user-settings-tablet-normal-container">
                        <UserSettingsFourthComp />
                    </div>
                    <div className="user-settings-tablet-normal-container">
                        <UserSettingsFifthComp />
                    </div>
                    <div className="user-settings-tablet-normal-container">
                        <UserSettingsSixthComp />
                    </div>
                </div>
                <div className="user-settings-right-container">
                    <UserSettingsRightFirstComp />
                    <UserSettingsRightSecondComp />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}