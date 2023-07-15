import React from 'react'

// Can change these icons to a more similar icon in figma
import { RiPencilLine, RiDeleteBin7Line} from 'react-icons/ri'

const ListviewPost = ({postData, showUpdateModal, showRemoveModal}) => {

    const { id, location, caption, date } = postData

    return (
        <div className="listview-post d-flex gap-2 gap-lg-4 gap-xl-4">
            <div className="listview-post-items">
                <div className='d-none d-md-block listview-item'>{id}</div>
                <div className='listview-item'>{location}</div>
                <div className='listview-item'>{caption}</div>
                <div className='listview-item'>{date}</div>
            </div>
            <div className="listview-post-icons d-flex flex-md-row">
                <div className="listview-icon" onClick={showUpdateModal}>
                    <RiPencilLine/>  
                </div>
                <div className="listview-icon" onClick={showRemoveModal}>
                    <RiDeleteBin7Line/>
                </div>
            </div>
        </div>
      

    )
}

export default ListviewPost