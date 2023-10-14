import React from 'react'
import { useDispatch } from 'react-redux';
import { setDisplay } from '../../redux/slices/displaySlice';
import "./index.css"
import Profile from './components/profile';

function Index() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setDisplay('profile'));
    }, [dispatch]);
    return (
        <>
        <div className='profile-container'>
            <div className='left-bar'>
                <div className='top'><LeftTop/></div>
                <div className='butt'><LeftBut/></div>
            </div>
            <div className='right-bar'>
                <Right/>
            </div>
        </div>
        </>
    )
}

function LeftTop(){
    return(
        <>
        <div className='left-top'>
            <img width={200} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
            <h1 className='left-top-name'>Weerasak Woottisan</h1>
            <p>Sport type - Racing</p>
            <p>Coach</p>
            <p>Athlete's affiliation</p>
        </div>
        
        </>
    )
}
function LeftBut(){
    return(
        <>
        <div className='left-but'>
            <h1>Ranking</h1>
        </div>
        </>
    )
}

function Right(){
    return(
        <>
        <div className='right'>
            <div className='right-profile'>
            <div className='first-row'>
                <div className='first-name'>
                    <p>First Name</p>
                    <input className='input' type="text" id="fName" name="fName" value="Weerasak" readonly/>
                </div>
                <div className='last-name'>
                    <p>Last Name</p>
                    <input className='input' type="text" id="lName" name="lName" value="Woottisan" readonly/>
                </div>
                <div className='birthday'>
                    <p>Birth Day</p>
                    <input className='input' type="text" id="dDay" name="bDay" value="22/08/2544" readonly/>
                </div>
            </div>
            <div className='second-row'>
                <div className='last-name'>
                        <p>Last Name</p>
                        <select className='input' name="cars" id="cars" disabled>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>
                <div className='last-name'>
                        <p>Last Name</p>
                        <select className='input' name="cars" id="cars" disabled>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>
                <div className='last-name'>
                        <p>Last Name</p>
                        <select className='input' name="cars" id="cars" disabled>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>
            </div>
            <div className='third-row'>
                <div className='last-name'>
                        <p>Last Name</p>
                        <input className='input' type="text" id="lName" name="lName" value="Woottisan" readonly/>
                </div>
            </div>
            <div className='fourth-row'>
                <div className='last-name'>
                        <p>Last Name</p>
                        <input className='input' type="text" id="lName" name="lName" value="Woottisan" readonly/>
                </div>
            </div>
            <div className='fifth-row'>
                <div className='last-name'>
                        <p>Last Name</p>
                        <input className='input' type="text" id="lName" name="lName" value="Woottisan" readonly/>
                </div>
            </div>
            <div className='sixth-row'>
                 <div className='last-name'>
                        <p>Last Name</p>
                        <input className='input' type="text" id="lName" name="lName" value="Woottisan" readonly/>
                </div>
            </div>
            <div className='seventh-row'>
                <button className='input'>hello</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default Index