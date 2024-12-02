import './MissionFilter.css';
function MissionFilter({ filter }) {
  const Statuses = ['All', 'Planned', 'Active', 'Completed'];
  const handleFilter = (status) => {
    console.log('clicked on-->', status);
    filter(status);
  }

  return (
    <div className="MissionFilter">
      {
        Statuses.map(status => {
          return (
            <button key={ status } onClick={ () => handleFilter(status) }>{ status }</button>
          )
        })
      }
    </div>
  )
}

export default MissionFilter