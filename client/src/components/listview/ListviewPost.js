import React from 'react'

// Can change these icons to a more similar icon in figma
import { RiPencilLine, RiDeleteBin7Line} from 'react-icons/ri'

const ListviewPost = () => {
    
    return (
        <div className="listview-post d-flex gap-3 gap-lg-4 gap-xl-5">
            <div className="listview-post-items">
                <div className='d-none d-md-block listview-item'>Number</div>
                <div className='listview-item'>Location</div>
                <div className='listview-item'>Caption</div>
                <div className='listview-item'>12/31/2023</div>
            </div>
            <div className="listview-post-icons d-flex flex-md-row">
                <div className="listview-icon">
                    <RiPencilLine/>  
                </div>
                <div className="listview-icon">
                    <RiDeleteBin7Line/>
                </div>
            </div>
        </div>
      

    )
}

export default ListviewPost