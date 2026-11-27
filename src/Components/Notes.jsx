import {useState} from "react";

function Notes() {
    const[note, setNote] = useState("");
    const[list, setList] = useState([]);
    const[editIndex, setEditIndex] = useState(null);
    const[editText, setEditText] = useState("");
    const[search, setsearch] = useState("");

    const filteredList = list.filter((n) => 
        n.toLowerCase().includes(search.toLowerCase())
    );

    const add = () => {
        if (note === "") return;
        setList([...list, note]);
        setNote("");
    };
    return (
        <div style={{textAlign: "center", padding: "20px", marginBottom: "20px"}}>
            <h1 style={{color: "purple", textAlign: "center"}}>My Notes</h1>
            <p>Total Notes: {list.length}</p>
            <div style={{marginBottom: "5px"}}>
            <input
            placeholder="Search Note..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            style={{padding:"10px", width: "300px", marginBottom: "20px"}}
            />
            </div>
            <div>
            <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write Note..."
            style={{padding: "10px", width: "300px"}}
            />
            <button onClick={add} style={{padding: "10px", marginLeft: "5px", background: "green", color: "white"}}>
                Add
                </button>
                <button onClick={() =>setList([])} style={{padding: "10px", marginLeft: "5px", background: "red", color: "white"}}>
                    Delete
                </button>
                </div>
                {filteredList.map((n, i) => (
                    <p key={i} style={{border: "1px solid black", padding: "10px", marginTop: "20px" }}>
                        {editIndex === i ? (
                        <>
                        <index
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        />    
                        <button onClick={() => {
                            const newList = [...list];
                            newList[i] = editText;
                            setList(newList);
                            setEditIndex(null);
                        }}>Save</button>
                        </>
                        ) : (
                            <>
                            {n}
                            <button onClick={() => {
                                const newText = prompt("Edit your note", n);
                                if (newText) {
                                    const newList = [...list];
                                    newList[i] = newText;
                                    setList(newList);
                                }
                            }}>Edit</button>
                            <button style={{background: "red"}}>X</button>
                            </>
                        )}
                        
                        
                        </p>
                ))}
                </div>
    );
}
export default Notes;