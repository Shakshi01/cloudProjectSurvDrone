import React from "react";
import axios from "axios";


function DeleteAllMissionPlans() {

    return (
        <div className="delete-all-missions-button">
            <h3>Delete all Maps</h3>
            <form onSubmit={(e) => {
                axios.delete("http://localhost:5001/api/deleteAllMissionPlans");
            }}>
                <button type="submit">Delete All Mission Plans</button>
            </form>
        </div>    
    )
}

export default DeleteAllMissionPlans;