import { AppLogo } from "../AppLogo/AppLogo";
import { MenuButton } from './Menu/MenuButton/MenuButton';

import "./Header.css";

export function Header(){
    return (
    <div className="app-header"> 
    <MenuButton />
    
    <AppLogo />
    <p className="app-header__title">To Do App</p>
    </div>
    );
}