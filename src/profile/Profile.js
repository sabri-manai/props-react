import React from 'react';
const Profile = (props) => {
    // console.log(props.children)

    return (
        <div> 
        {props.children}   
        <h4>Full name:{props.fullName}</h4>
        <h5>Bio:{props.bio}</h5>
        <h5>Profession:{props.profession}</h5>
        <button onClick={()=>props.alertName(props.fullName)}>click to see my name</button>
        </div>
    )
    }
    Profile.defaultProps = {
        fullName: 'Mary'
      };
export default Profile
