import React from 'react';

const Home = (props)=>
{
    return (
        <div >
            <div className="row">
                <div className sm-5 col-9>
                <div>
                    <img className ="col-3 float-left">img1</img>
                </div>
                <div>
                    <img className ="col-6 ">img2</img>
                </div>
                <div>
                    <img className ="col-9 float-right">img3</img>
                </div>
                </div>
            </div>
            <div className="row">
                <div className sm-5 col-9>
                <div>
                    <img className ="col-3 float-left">img4</img>
                </div>
                <div>
                    <img className ="col-6 ">img5</img>
                </div>
                <div>
                    <img className ="col-9 float-right">img6</img>
                </div>
                </div>
            </div>
            <div className="row">
                <div className sm-5 col-9>
                <div>
                    <img className ="col-3 float-left">img1</img>
                </div>
                <div>
                    <img className ="col-6 ">img1</img>
                </div>
                <div>
                    <img className ="col-9 float-right">img1</img>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
