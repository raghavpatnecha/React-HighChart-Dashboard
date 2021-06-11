import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { getAdvertisementSpent , postAdvertisementSpent, deleteAdvertisementSpent, updateAdvertisementSpent } from "../../api";


//
const Form = ({setChannels,setViews,setSpent}) => {
    //initialization
    const [formData, setFormData] = useState({channelName: "", views:"", spentInUsd: ""});
     
    //function to clear the form
    const clear = () => {     
        setFormData({channelName: "", views:"", spentInUsd: ""});
    };
    
    const getAdvData = async () => { 
        const {data} = await getAdvertisementSpent();     
        setChannels(data.map(({channelName}) => channelName));
        setViews(data.map(({views}) => views));
        setSpent(data.map(({spentInUsd}) => spentInUsd));
      
    };

    useEffect(() => {
        getAdvData();
    },[]);

    //function to handle submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postAdvertisementSpent(formData);
        getAdvData();
        clear();
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    };

    //
    return (      
        <div className="row">
                                <div className="col-md-12">
                                    <div className="main-card mb-3 card">
                                        <div className="card-body">
                                            <h5 className="card-title">Add Advertisement Channels</h5>
                                            <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleChannel" className="">Channel Name</label>   
                                                    <input  name="channelName" value={formData.channelName} onChange= {handleChange} id="exampleChannel" placeholder="Channel Name" type="text" className="form-control" />
                                                </div>
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleViews" className="">Views</label>
                                                    <input name="views" value={formData.views} onChange= {handleChange} id="exampleViews" placeholder="Views" type="number" className="form-control" />
                                                </div>
                                                <div className="position-relative form-group">
                                                    <label htmlFor="exampleSpent" className="">Spent in $(USD)</label>
                                                    <input name="spentInUsd" value={formData.spentInUsd} onChange= {handleChange} id="exampleSpent" placeholder="Spent in $(USD)" type="number" className="form-control" />
                                                </div>
                                              
                                                <button className="mt-1 mr-2 btn btn-primary" type="submit">Submit</button>
                                                <button className="mt-1 btn btn-danger" onClick={clear}>Clear</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
    );
}
export default Form;