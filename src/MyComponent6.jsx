import React, { useState, useEffect } from 'react';

function MyComponent6() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count} ${color} Size: ${windowWidth} x ${windowHeight}`;
    }, [count, color, windowWidth, windowHeight]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');
    }

    function handleResize(){
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    return (<>
    
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
        <p>Window Width: {windowWidth}</p>
        <p>Window Height: {windowHeight}</p>
    
    </>);

}

export default MyComponent6