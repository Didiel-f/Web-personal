import { basePath, apiVersion } from './config';

export const getPostsApi = ( limit, page ) => {
    const url = `${ basePath }/${ apiVersion }/get-posts?limit=${ limit }&page=${ page }`;

    return fetch( url )
        .then( response => {
            return response.json();
        } ).then( result => {
            return result;
        } ).catch( err => {
            return err;
        } );
    
};

export const deletePostApi = ( token, id ) => {
    const url = `${ basePath }/${ apiVersion }/delete-post/${ id }`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };

    return fetch( url, params )
        .then( response => {
            return response.json();
        } ).then( result => {
            return result;
        } ).catch( err => {
            return err;
        } );
    
};

export const addPostApi = ( token, post ) => {
    const url = `${ basePath }/${ apiVersion }/add-post`;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(post)
    };

    return fetch( url, params )
        .then( response => {
            return response.json();
        } ).then( result => {
            return result;
        } ).catch( err => {
            return err;
        } );
    
};

export const updatePostApi = ( token, id, data ) => {
    const url = `${ basePath }/${ apiVersion }/update-post/${ id }`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(data)
    };

    return fetch( url, params )
        .then( response => {
            return response.json();
        } ).then( result => {
            return result;
        } ).catch( err => {
            return err;
        } );
};

export const getPostApi = ( urlPost ) => {
    const url = `${ basePath }/${ apiVersion }/get-post/${ urlPost }`;

    return fetch( url )
        .then( response => {
            return response.json();
        } ).then( result => {
            return result;
        } ).catch( err => {
            return err;
        } );
    
};