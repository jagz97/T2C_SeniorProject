import React from 'react'

const CustomDropdown = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
        
      }}
      className="custom-dropdown"
    >
      {children}
    </div>
  ));

export default CustomDropdown