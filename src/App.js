import './App.css';
import Profile from './profile/Profile.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const alertName = (name) =>{return alert(name)}
  return (
    <div className="App">
<Profile fullName= 'Sara' bio = 'A good one' profession='doctor' alertName={alertName}>"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"</Profile> 
     </div>
  );
}

export default App;
