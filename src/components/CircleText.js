export const CircleText = () => {
    
    function rotatText(someText) {
        let newText = [];
        let rotateAngel = [];
        for(let i = 0; i < someText.length; i++) {
            newText += someText[i]
            rotateAngel[i] += 10;
        }
        return (
            <div>{newText}</div>
        )
    }
    return (
        <div className="container">
            <div className="circle-one">
                <div className="circle-two">
                    <div className="circle-two" style={{backgroundColor: 'red'}}>
                        
                    </div>
                </div>
            </div>
            <div className="circle-one">
                <div className="circle-two">
                    <div className="rotate-text">{rotatText('test')}</div>
                </div>
                
            </div>
        </div>        
       
    )
}