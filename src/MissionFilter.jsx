import './MissionFilter.css';
function MissionFilter({ filterMissions }) {
  const Statuses = ['All', 'Planned', 'Active', 'Completed'];

  //method to call parent filter method
  const handleFilter = (status) => {
    filterMissions(status);
  }
  return (
    <div className="MissionFilter">
      {
        Statuses.map(status => {
          return (
            <button onClick={ () => handleFilter(status) }>{ status }</button>
          )
        })
      }
    </div>
  )
}

export default MissionFilter