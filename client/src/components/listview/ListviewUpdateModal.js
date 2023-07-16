import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import DatePicker from './datepicker/index'
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
                <h5>Enter New Post Information</h5>
                <div className="listview-update-container">
                    <textarea 
                        className="listview-update-caption"
                        name="caption"
                        value= {caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Caption" 
                        maxLength={255}
                    />   
                    <div className="listview-update-row">
                        <input 
                            className="listview-update-location"
                            type="text" 
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location" 
                        />
                        <DatePicker size={"55%"}>
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
                </Modal.Body>
                <Modal.Footer className="pt-0">
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