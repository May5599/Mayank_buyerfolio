import React from "react";
import Navbar from '../Navbar';
import AgentsFirstComp from "../../components/agentscomp/AgentsFirstComp/AgentsFirstComp";
import AgentsSecondComp from "../../components/agentscomp/agentssecondcomp/AgentsSecondComp";
import AgentsThirdComp from "../../components/agentscomp/agentsthirdcomp/AgentsThirdComp";
import AgentsFourthComp from "../../components/agentscomp/agentsfourthcomp/AgentsFourthComp";
import Footer from "../../components/footer/Footer";
export const AgentsPage = () => {
  return (
    <div>
      <Navbar />
      <AgentsFirstComp/>
      <AgentsSecondComp/>
      <AgentsThirdComp/>
      <AgentsFourthComp/>
      <Footer/>
    </div>
  );
};

export default AgentsPage;
