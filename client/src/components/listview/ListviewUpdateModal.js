import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import DatePicker from './datepicker/index'
const ListviewModal = ({ title, stateShow, closeModalHandler, confirmHandler, postId}) => {
    

    const [caption, setCaption] = useState("")
    const [location, setLocation] = useState("")


    const currentYear = new Date().getFullYear();
    
    const [day, setDay] = useState("1");
    const [month, setMonth] = useState("January");
    const [year, setYear] = useState(`${currentYear}`);
    
    const resetInputs = () => {
        setDay("1")
        setMonth("January")
        setYear(`${currentYear}`)
        setCaption("")
        setLocation("")
    }
    
    return (
        <>
            <Modal show={stateShow} centered dialogClassName="listview-modal">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <h5>Enter New Post Information</h5>
                    <textarea 
                        className="listview-update-input"
                        name="caption"
                        value= {caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Caption" 
                    />   
                    <div className="listview-update-container">
                        <input 
                            className="listview-update-input"
                            type="text" 
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location" 
                        />
                        <DatePicker>
                            <DatePicker.Year
                                value={year}
                                setYear={(year) => setYear(year)}
                                min={1900}
                                max={currentYear}
                            />
                            <DatePicker.Month 
                                value={month} 
                                setMonth={(month) => setMonth(month)} 
                            />
                            <DatePicker.Day
                                value={day}
                                setDay={(day) => setDay(day)}
                                year={year}
                                month={month}
                                currDay={day}
                            />
                        </DatePicker>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="listview-btn" onClick={closeModalHandler}>
                        Cancel
                    </button>
                    <button className="listview-btn" onClick={() => {
                        confirmHandler(postId, {caption,location,year,month,day})
                        resetInputs()
                    }}>
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


export default ListviewModal