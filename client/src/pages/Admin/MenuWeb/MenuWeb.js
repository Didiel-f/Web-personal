import React, { useEffect, useState } from 'react';
import { getMenuApi } from '../../../api/menu';
import MenuWebList from '../../../components/Admin/MenuWeb/MenuWebList';



const MenuWeb = () => {
    const [menu, setMenu] = useState([]);
    const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

    useEffect(() => {
        
        getMenuApi().then( response => {
            setMenu( response.menu );
        } );
        setReloadMenuWeb( false );

    }, [ reloadMenuWeb ])
    
    return (
        <div>
            <MenuWebList menu={ menu } setReloadMenuWeb={ setReloadMenuWeb } />
        </div>
    );
}

export default MenuWeb;