import ZoologyFC from "../images/ZoologyFlashCard.png"

export default function FlashCard(props) {
    
    function checker() {
        console.log("Mouse Click Detected");
    }
    
    return (
        <img className="fleximg" src={ZoologyFC} onClick={checker} />
    )
}

