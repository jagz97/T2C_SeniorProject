import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import DatePicker from '../datepicker/index'
const ListviewModal = ({ title, stateShow, closeModalHandler, confirmHandler, postId}) => {
    

    const [caption, setCaption] = useState("")
    const [location, setLocation] = useState("")

    const currentYear = new Date().getFullYear();
    
    // Could have date parts in a state object 
    // but makes it harder to change individual states
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    
    const resetInputs = () => {
        setDay("")
        setMonth("")
        setYear("")
        setCaption("")
        setLocation("")
    }
    
    return (
        <>
            <Modal show={stateShow} centered dialogClassName="listview-modal">
                <Modal.Header className="pb-0">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <div className="listview-update-container">
                    <label htmlFor="listview-update-caption">Caption</label>
                    <textarea 
                        className="listview-update-caption"
                        id="listview-update-caption"
                        name="caption"
                        value= {caption}
                        onChange={(e) => setCaption(e.target.value)}
                        maxLength={255}
                    />   
                    <div className="listview-update-inputs">
                        <div className="container-update-location" >
                            <label htmlFor="listview-update-location" >Location</label>
                            <input 
                                className="listview-update-location"
                                id="listview-update-location"
                                type="text" 
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="container-update-date">
                            <label htmlFor="listview-update-date">Date</label>
                            <DatePicker size={"100%"} id="listview-update-date">
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
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="listview-btn" onClick={() => {
                        closeModalHandler()
                        resetInputs()
                    }}>
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