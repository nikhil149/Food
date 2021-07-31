import db from "../firebase";
import { useState } from "react";
const Form = () => {
    const [name, setName] = useState("");
    const [innings, setInnings] = useState(0);
    const [notOuts, setNotOuts] = useState(0);
    const [runs, setRuns] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [average, setAverage] = useState(0);
    const [halfCentury, setHalfCentury] = useState(0);
    const [century, setCentury] = useState(0);
    const [ducks, setDuckes] = useState(0);

    async function formSubmitHandler(event) {
        event.preventDefault();
        console.log(
            name,
            innings,
            notOuts,
            runs,
            highScore,
            average,
            halfCentury,
            century,
            ducks
        );
        // const response = await fetch(`https://trump-card-game-cf202-default-rtdb.firebaseio.com/Test.json`,{
        //     method: 'POST',
        //     body: JSON.stringify({name,innings, notOuts, runs, highScore, average, halfCentury, century, duckes}),
        //     headers: {'Content-Type': 'application/json'}
        // })

        // const data = await response.json();
        // console.log(data)

        db.collection("Players")
            .add({
                name,
                innings,
                notOuts,
                runs,
                highScore,
                average,
                halfCentury,
                century,
                ducks,
            })
            .then((docref) => {
                console.log(`the document created with docId of ${docref}`);
            })
            .catch((err) => {
                console.log(`Error adding a document ${err}`);
            });
        setName("");
        setInnings("");
        setNotOuts("");
        setRuns("");
        setHighScore("");
        setAverage("");
        setHalfCentury("");
        setCentury("");
        setDuckes("");
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="playerName">Player Name</label>
                <input
                    type="text"
                    id="playerName"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label htmlFor="innings">Innings</label>
                <input
                    type="number"
                    id="innigs"
                    onChange={(e) => setInnings(e.target.value)}
                    value={innings}
                />
                <label htmlFor="no">Not Outs</label>
                <input
                    type="number"
                    id="no"
                    onChange={(e) => setNotOuts(e.target.value)}
                    value={notOuts}
                />
                <label htmlFor="runs">Runs</label>
                <input
                    type="number"
                    id="runs"
                    onChange={(e) => setRuns(e.target.value)}
                    value={runs}
                />
                <label htmlFor="highScore">Highest Score</label>
                <input
                    type="number"
                    id="highScore"
                    onChange={(e) => setHighScore(e.target.value)}
                    value={highScore}
                />
                <label htmlFor="average">Average</label>
                <input
                    type="float"
                    id="average"
                    onChange={(e) => setAverage(e.target.value)}
                    value={average}
                />
                <label htmlFor="50">50s</label>
                <input
                    type="number"
                    id="50"
                    onChange={(e) => setHalfCentury(e.target.value)}
                    value={halfCentury}
                />
                <label htmlFor="100">100s</label>
                <input
                    type="number"
                    id="100"
                    onChange={(e) => setCentury(e.target.value)}
                    value={century}
                />
                <label htmlFor="duckes">Duckes</label>
                <input
                    type="number"
                    id="duckes"
                    onChange={(e) => setDuckes(e.target.value)}
                    value={ducks}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;
