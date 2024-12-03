import './MissionAction.css';
function MissionAction({ missionId, updateStatus }) {
    const Actions = ['Launch', 'Complete'];

    //method to call parent action method
    const handleAction = (action) => {
        updateStatus(missionId, action);
    }
    return (
        <div className="MissionAction">
            {
                Actions.map(action => {
                    return (
                        <div>
                            <button onClick={ () => handleAction(action) }>{ action }</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MissionAction