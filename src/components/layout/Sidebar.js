import {FaInbox, FaRegCalendarAlt, FaRegCalendar, FaChevronDown} from "react-icons/all";

function Sidebar () {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span><FaRegCalendar /></span>
                    <span>Today</span>
                </li>
                <li>
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 Days</span>
                </li>
            </ul>
            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <div className="sidebar__projects">Projects will be here!</div>

            Add Project Component Here!
        </div>
    )
}

export default Sidebar