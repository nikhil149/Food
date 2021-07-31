import {useState} from 'react';
import db from '../firebase'
const FetchData = () => {
    const [player, setPayer] = useState('')
    const fetchUser = (event) => {
        event.preventDefault();
        const numberOfUsers = 2;
        const randomIndex = Math.floor(Math.random() * numberOfUsers)+1;
        console.log(randomIndex)

        
        
    };

    return (
        <div>
            <button onClick={fetchUser}>Fetch User</button>
        </div>
    );
};

export default FetchData;
