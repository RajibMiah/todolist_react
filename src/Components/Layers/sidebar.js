import React from 'react'
import { FaChevronDown , 
    FaInbox ,
    FaRegCalendarAlt ,
     FaRegCalendar 
    }  from 'react-icons/fa';

export default function sidebar() {
    return (
        <div>
            <div className = "siderbar" data-testid = "siderbar">
                <ul className = "sidebar__generic">
                    <li>
                        <span><FaInbox/></span>
                        <span>inbox</span>
                        </li>
                        <li>
                        <span><FaRegCalendar/></span>
                        <span>ToDay</span>
                        </li>
                        <li>
                        <span><FaRegCalendarAlt/></span>
                        <span>Next 7 days</span>
                    </li>
                </ul>
                </div>
            <div className = "sidebar__middle">
                <span>
                    <FaChevronDown/>
                </span>
                <h1>Projects</h1>
                <ul className = "sidebar__projects">project will be there</ul>
                Add project component here
             </div>


        </div>
        
    )
}
