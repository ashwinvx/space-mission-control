import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import { useState } from "react";
function MissionControl({ initial_missions }) {
  const [missions, setMissions] = useState(initial_missions);
  const filter = (status) => {
    console.log('status-->', status);
    if (status != 'All') {
      setMissions(initial_missions.filter(n => n.status == status));
    } else {
      setMissions(initial_missions);
    }
  }
  console.log('missions-->', missions);
  return (
    <div>
      <h1>Space Mission Control</h1>
      <MissionFilter filter={ filter } />
      { missions.map((mission) => {
        return (
          <MissionCard key={ mission.id } name={ mission.name } status={ mission.status } crew={ mission.crew }><MissionAction key={ mission.id } /></MissionCard>
        );
      }) }
    </div>
  );
}

export default MissionControl;
