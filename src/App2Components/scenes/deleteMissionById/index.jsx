import React, {useState} from "react";
import axios from "axios";

function DeleteMissionById() {

    const [missionPlan, setMissionPlan] = useState({
        _id: ""
    });

    const handleChange = (e) => {
        setMissionPlan((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const sendRequest = async(id) => {
        await axios.delete(`http://localhost:5001/api/deleteMissionPlanById/${missionPlan._id}`)
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h3>Delete mission plan:</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(missionPlan);
                sendRequest();
            }}>
                <input type="text" name="_id" value={missionPlan._id} onChange={handleChange} />
                <button type="submit">Delete mission plan</button>
            </form>
        </div>
    )
}

export default DeleteMissionById;