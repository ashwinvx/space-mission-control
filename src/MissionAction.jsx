import './MissionAction.css';
function MissionAction() {
    const Actions = ['Launch', 'Complete'];
    return (
        <div className="MissionAction">
            {
                Actions.map(action => {
                    return (
                        <div>
                            <button key={ action }>{ action }</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MissionAction