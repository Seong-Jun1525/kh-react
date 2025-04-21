import React from 'react'
import ProfileCard from './components/ProfileCard';

const App = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent : "center"}}>
            <h1 style={{color: "red", textAlign: "center"}}>JSX Practice Page</h1>
			<ProfileCard />
        </div>
    );
}

export default App;