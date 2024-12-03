import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import { useState } from "react";
function MissionControl({ initial_missions }) {
  const [missions, setMissions] = useState(initial_missions);
  const [filter, setFilter] = useState('All');

  //Method to update the status of the mission
  const updateStatus = (missionId, action) => {
    const missionStatus = action === 'Launch' ? 'Active' : 'Completed';
    setMissions(missions.map(mission => (mission.id == missionId ? { ...mission, status: missionStatus } : mission)));
  }
  //filter the missions based on the status selected
  const filteredMissions = filter == 'All' ? missions : missions.filter(mission => mission.status == filter);
  return (
    <div>
      <h1>Space Mission Control</h1>
      <MissionFilter filterMissions={ setFilter } />
      { filteredMissions.map((mission) => {
        return (
          <MissionCard key={ mission.id } name={ mission.name } status={ mission.status } crew={ mission.crew }><MissionAction missionId={ mission.id } updateStatus={ updateStatus } /></MissionCard>
        );
      }) }
    </div>
  );
}

export default MissionControl;
