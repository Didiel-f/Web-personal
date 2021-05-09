import { apiVersion, basePath } from "./config";

export const getMenuApi = () => {
    
    const url = `${ basePath }/${ apiVersion }/get-menus`;

    return fetch( url )
        .then( response => {
            return response.json();
        })
        .then( result => {
            return result;
        } ).catch( err => {
            return err.message;
        } );
};

export const updateMenuApi = ( token, menuId, data ) => {
    const url = `${ basePath }/${ apiVersion }/update-menu/${ menuId }`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(data)
    }

    return fetch( url, params )
        .then( response => {
            return response.json();
        })
        .then( result => {
            return result.message;
        } ).catch( err => {
            return err;
        } );
};

export const activateMenuApi = ( token, menuId, status ) => {
    const url = `${ basePath }/${ apiVersion }/activate-menu/${ menuId }`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({ active: status })
    }

    return fetch( url, params )
        .then( response => {
            return response.json();
        })
        .then( result => {
            return result.message;
        } ).catch( err => {
            console.log(err);
        } );
};

export const addMenuApi = ( token, menu ) => {
    const url = `${ basePath }/${ apiVersion }/add-menu`;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify( menu )
    }

    return fetch( url, params )
        .then( response => {
            return response.json();
        })
        .then( result => {
            return result.message;
        } ).catch( err => {
            console.log(err);
        } );
};

export const deleteMenuApi = ( token, menuId ) => {
    const url = `${ basePath }/${ apiVersion }/delete-menu/${ menuId }`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    return fetch( url, params )
        .then(( response ) => {
            return response.json();
        })
        .then( result => {
            return result.message;
        } )
        .catch((err) => {
            console.log( err )
        });
};