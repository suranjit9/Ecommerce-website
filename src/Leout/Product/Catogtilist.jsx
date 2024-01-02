
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Catogtilist = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab index  
  const handleTabClick = (index) => {
    setActiveTab(index);
  }

    return (
      <>

        <div role="tablist" className="tabs tabs-bordered">
        <NavLink to={'/'}
          role="tab" 
          className={activeTab === 0 ? 'tab tab-active' : 'tab'}
          onClick={() => handleTabClick(0)}
        >
        
          Electronics
        </NavLink>
        <NavLink
        to={'/toy'}
          role="tab"
          className={activeTab === 1 ? 'tab tab-active' : 'tab'}
          onClick={() => handleTabClick(1)}
        >
          Toy
        </NavLink>
        <NavLink
          role="tab"
          className={activeTab === 2 ? 'tab tab-active' : 'tab'}
          onClick={() => handleTabClick(2)}
        >
          Man Clothing
        </NavLink>
        <NavLink
          role="tab"
          className={activeTab === 3 ? 'tab tab-active' : 'tab'}
          onClick={() => handleTabClick(3)}
        >
          Woman Clothing
        </NavLink>
        
      </div>
      
      </>
    );
};

export default Catogtilist;