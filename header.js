import React from 'react';
import Home from './home';

const Header = (props)=>
{const searchResult = document.getElementById('search')
  const onClickSearch = {
        // fetch('https:jsonResponse')
        // .then(res=>res.json())
        // .then(searchResult=>{searchResult={res.search}})

    }
    return (
        <div className="row">
            <div className="col-2">Menubar icon</div>
            <a href="./">home</a>
            <a href="./">shop</a>
            <a href="./">magazine</a>
            <div className="col-8">
                <img id='search' onClick={onClickSearch}>searchIcon</img>
            </div>
            <div className="col-9"> shopping cart</div>
            <div classname="col-10 float-right">login icon</div>
        </div>

    )
}
export default Header;
