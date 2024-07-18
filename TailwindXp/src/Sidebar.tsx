import React from 'react';
import { AiFillAlert, AiFillAliwangwang, AiFillBug, AiFillGitlab } from "react-icons/ai";


const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white shadow-lg
        dar:bg-gray-900 dark:text-white
        fixed top-0 left-0 h-screen w-16 m-0 flex flex-col">
            <SidebarIcon icon={<AiFillAlert size='28'/>} text={'hello!'} />
            <SidebarIcon icon={<AiFillAliwangwang size='28'/>} text={'it'}/>
            <SidebarIcon icon={<AiFillBug size='28'/>} text={'is'}/>
            <SidebarIcon icon={<AiFillGitlab size='28'/>} text={'me'}/>
        </div>
    );
};
const SidebarIcon = ({icon, text}: {icon: React.ReactNode, text: string}) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}

export default Sidebar;