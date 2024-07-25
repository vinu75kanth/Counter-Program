import react,{useState} from 'react'

function Button(){
    const [value,setValue] = useState(0);
    function decr(){
        setValue(value-1);
    }
    function incr(){
        setValue(value+1);
    }
    function reset(){
        setValue(0);
    }
    return(
        <>
            <h1 id='content'>{value}</h1>
            <div id='box'>
                <button id='decrBtn' onClick={decr}>Decr</button>
                <button id='resetBtn' onClick={reset}>Reset</button>
                <button id='incrBtn' onClick={incr}>Incr</button>
            </div>
        </>
    );
}

export default Button