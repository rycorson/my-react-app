

function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    //const handleClick = () => console.log("ouch!");
    //const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    /*let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} stop clicking me!`);
        }
    };

    return(<button onClick={() => handleClick("Ryan")} style={styles}>Click Me</button>);*/

    //const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";

    return(<button onClick={(e) => handleClick(e)} style={styles}>Click Me 😁</button>);
}

export default Button;