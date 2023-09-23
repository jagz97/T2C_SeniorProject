import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ListviewModal = ({ title, stateShow, closeModalHandler, confirmHandler}) => {
    
    return (
        <>
            <Modal show={stateShow} centered dialogClassName="listview-modal">
                <Modal.Header className="pb-0">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body ><h6>Are you sure you want to remove this Post?</h6></Modal.Body>
                <Modal.Footer className="pt-0">
                    <button className="listview-btn" onClick={closeModalHandler}>
                        Cancel
                    </button>
                    <button className="listview-btn" onClick={confirmHandler}>
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


export default ListviewModal