import React from "react";
import axios from "axios";


function DeleteAllMaps() {

    return (
        <div className="delete-all-maps-button">
            <h3>Delete all Maps</h3>
            <form onSubmit={(e) => {
                axios.delete("http://localhost:5001/api/deleteAllMaps");
            }}>
                <button type="submit">Delete All Maps</button>
            </form>
        </div>    
    )
}

export default DeleteAllMaps;