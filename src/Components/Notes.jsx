import {useState} from "react";

function Notes() {
    const[note, setNote] = useState("");
    const[list, setList] = useState([]);

    const add = () => {
        if (note === "") return;
        setList([...list, note]);
        setNote("");
    };
    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            <h1 style={{color: "purple", textAlign: "center"}}>My Notes</h1>
            <p>Total Notes: {list.length}</p>
            <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write Note..."
            style={{padding: "10px", width: "250px"}}
            />
            <button onClick={add} style={{padding: "10px", marginLeft: "5px", background: "green", color: "white"}}>
                Add
                </button>
                <button onClick={() =>setList([])} style={{padding: "10px", marginLeft: "5px", background: "red", color: "white"}}>
                    Delete
                </button>
                {list.map((n, i) => (
                    <p key={i} style={{border: "1px solid black", padding: "10px", width: "300px", margin: "10px auto", background: "#fff9c4"}}>
                        {n} <button style={{background: "red", color: "white", border: "none", padding: "5px 10px"}} onClick={() => setList(list.filter((_, x) => x !== i))}>X</button>
                        </p>
                ))}
                </div>
    );
}
export default Notes;