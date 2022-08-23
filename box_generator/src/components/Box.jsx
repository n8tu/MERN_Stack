import React , {useState} from "react";

const Box = (props) => {
    const [color,setColor] = useState("");
    const [width,setWidth] = useState("100");
    const [height,setHeight] = useState("100");
    const [boxes,setBoxes] = useState([]);

    const addBox = (e) => {
        e.preventDefault();
        // Creating an element with wanted data (Color , Height , Width)
        let box =
            <div style={{backgroundColor: color, width: width + "px", height: height + "px"}}
                       className={"mx-1 d-inline-block"}> {color}
            </div>;

        // Add the saved element " box " in the boxes with the previous boxes.
        setBoxes([...boxes,box]);
    }


    return(
        <div className={"row align-items-center mx-auto  w-50 mt-5"}>
            <form onSubmit={addBox}>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="color">Color</label>
                        <input type="text" className="form-control" onChange={(e) => {setColor(e.target.value)}}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="width">Width</label>
                        <input type="text" className="form-control" onChange={(e) => {setWidth(e.target.value)}}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="height">Height</label>
                        <input type="text" className="form-control" onChange={(e) => {setHeight(e.target.value)}}/>
                    </div>
                    <div className="col-2 align-self-end">
                        <input type="submit" className="btn btn-primary" value={"Add"}/>
                    </div>
                </div>
            </form>

            <hr/>

            <div className="container">
                {boxes}
            </div>
        </div>
    );
}

export default Box;