const Post = require("../models/post");

const addPost = (req, res) => {

    const body = req.body;
    const post = new Post(body);

    post.save( (err, postsStored) => {
        if ( err ) {
            res.status(500).send({ code: 500, message: "Error del servidor."  })
        } else {
            if ( !postsStored ) {
                res.status(400).send({ code: 400, message: "No se ha podido crear el post." })
            } else {
                res.status(200).send({ code: 200, message: "Post creado correctamente." })
            }
        }
    } )
    
};

const getPosts = (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const options = {
        page,
        limit: parseInt(limit),
        sort: { date: "desc" }
    };

    Post.paginate( {}, options, (err, postsStored) => {
        if ( err ) {
            res.status(500).send({ code: 500, message: "Error del servidor." })
        } else {
            if ( !postsStored ) {
                res.status(404).send({ code: 404, message: "No se ha encontrado ningún post." })
            } else {
                res.status(200).send({ code: 200, posts: postsStored })
            };
        };
    } );
    
};

const updatePost = (req, res) => {
    const postData = req.body;
    const { id } = req.params;

    Post.findByIdAndUpdate( id, postData, (err, postUpdated) => {
        if ( err ) {
            res.status(500).send({ code: 500, message: "Error del servidor."  })
        } else {
            if ( !postUpdated ) {
                res.status(404).send({ code: 404, message: "No se ha encontrado ningún post." })
            } else {
                res.status(200).send({ code: 200, message: "Post actualizado correctamente." })
            }
        }
    } )
};

const deletePost = ( req, res ) => {
    const { id } = req.params;

    Post.findByIdAndRemove( id, ( err, postDeleted ) => {
        if ( err ) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if ( !postDeleted ) {
                res.status(404).send({ message: "Post no encontrado." })
            } else {
                res.status(200).send({ message: "El post ha sido eliminado correctamente." })
            }
        };
    } );
};

const getPost = ( req, res ) => {

    const { url } = req.params;

    Post.findOne({ url }, (err, postStored) => {
        if ( err ) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if ( !postStored ) {
                res.status(404).send({ message: "Post no encontrado." })
            } else {
                res.status(200).send({ code: 200, post: postStored });
            }
        };
    });
};


module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost,
    getPost
};