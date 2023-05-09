import React from 'react';
import {NavLink} from "react-router-dom";
import S from   './NavBar.module.css'
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBar = () => {
    return (
        <div className={S.NavBar}>
          <NavLink className={S.MyDay} to={'/'}>My day</NavLink>
            <NavBarItem title={'Sport'} img={'https://xn--80afhyi4a6k.com.ua/image/cache/catalog/image/catalog/products/hanteli/2888-0011-350x350.png'} destination={'/Sport'}/>
            <NavBarItem title={'Health'} img={'data:image/png;base64,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'} destination={'/Health'}/>
            <NavBarItem title={'Work'} img={'https://cdn1.iconfinder.com/data/icons/happy-and-efficient-workplace/351/job-work-happy-004-512.png'} destination={'/Work'}/>
            <NavBarItem title={'Buying'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l7ggZy9p-tYLR4g65uGZup1sUjyzlQbPYA&usqp=CAU'} destination={'/Buying'}/>

            <NavBarItem title={'Character'} img={'https://static.thenounproject.com/png/1926276-200.png'} destination={'/Character'}/>

        </div>
    );
};

export default NavBar;