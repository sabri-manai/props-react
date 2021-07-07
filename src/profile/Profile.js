import React from 'react';
import {Card, Button, Container} from 'react-bootstrap';
const Profile = (props) => {
    console.log(props.children)

    return (
        <div> 
        <img style={{  verticalAlign:"middle", width: "200px", height: "200px", borderRadius: "50%"}} width="320" height="460" src={props.children} alt="profilePicture" />    
        <h4>Full name:{props.fullName}</h4>
        <h5>Bio:{props.bio}</h5>
        <h5>Profession:{props.profession}</h5>
<button onClick={()=>props.alertName()}>click to see my name</button>


        </div>
    )
}

export default Profile
