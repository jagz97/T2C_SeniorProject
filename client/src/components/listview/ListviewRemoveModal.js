import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ListviewModal = ({ title, children, stateShow, closeModalHandler, confirmHandler}) => {
    
    return (
        <>
            <Modal show={stateShow} centered dialogClassName="listview-modal">
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >{children}</Modal.Body>
                <Modal.Footer>
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