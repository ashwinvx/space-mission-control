import './MissionCard.css';
function MissionCard({ id, name, status, crew, children }) {
  return (
    <div className="card">
      <div id={ id }>
        <h2>{ name }</h2>
        <h5>Status: { status }</h5>
        <h5>Crew: { crew.join(', ') }</h5>
      </div>
      <div>{ children }</div>
    </div >
  );
}

export default MissionCard