import Button from "./Button"

const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '3', '2', '1', '-',
    '0', 'C', '=', '+'
]

function ButtonPanel({onButtonClick}){

    return(
        <div className='button-panel'>
            {buttons.map((btn,index) => (
                <Button key={index} value={btn} onClick={onButtonClick} />
            ))}
        </div>
    )
}

export default ButtonPanel;