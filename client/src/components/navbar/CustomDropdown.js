import React from 'react'

const CustomDropdown = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
        
      }}
      style={{cursor: "pointer"}}
    >
      {children}
    </div>
  ));

export default CustomDropdown