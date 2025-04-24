import "./style.css"

const MyThirdComponent = () => {
    return (
        <div>
            My Third Component
        </div>
    )
}

//JSX
// Fragment
const MySecondComponent = () => {
    return (
        <>
            <div>
            My Second Component
            </div>
            <div className="child"
                style={{borderRadius: "10px"}}
            >child</div>
        </>
        
    )
}

export {MySecondComponent , MyThirdComponent};