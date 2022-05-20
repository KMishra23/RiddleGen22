import headerSideBtn from "./headerSideButton.js"

export default function Header(props) {
    
    return (
        <div className='header'>
            <h1>Learner Dashboard</h1>
            <headerSideBtn /> 
        </div>
    )
}