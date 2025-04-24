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
    const quang = "Quang đẹp trai no1 vũ trụ"
    const arr = [1, 2, 3]
    const Obj = {
        name: "Quang",
        age: 21
    }
    return (
        <>
            <div>
                My Second Component
            </div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >Tên trùm Zoe : {quang}</div>

            <div className="child"
                style={{ borderRadius: "10px" }}
            >Mảng Zoe : {arr}</div>

            <div className="child"
                style={{ borderRadius: "10px" }}
            >Đối tượng Zoe nhưng chỉ gọi được mỗi string : {Obj.name}</div>

            <div className="child"
                style={{ borderRadius: "10px" }}
            >Đối tượng Zoe gọi được toàn bộ thông tin object : {JSON.stringify(Obj)}</div>

            <div>{console.log(Obj)}</div>
        </>

    )
}

export { MySecondComponent, MyThirdComponent };