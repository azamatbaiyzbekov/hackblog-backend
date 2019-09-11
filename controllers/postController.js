const db = require('../models');
const { sendErrorResponse, sendSuccessResponse} = require('./response')




const index = (req, res) => {
    db.Post.find({}).exec((err, foundAllPosts) => {
        if (err) return sendErrorResponse(res, err);
        sendSuccessResponse(res, foundAllPosts)
    })
}


const show = (req, res) => {
    db.Post.findById({ _id: req.params._id }, (error, foundOnePost) => {
        if(error) return sendErrorResponse(res, error);
        sendSuccessResponse(res, foundOnePost)
    });
};


const create = (req, res) => {
    db.Post.create(req.body, (error, createdPost) => {
        if (error) return sendErrorResponse(res, error);
        db.User.findById(req.body.userId, {password: 0}, (error, foundUser) => {
            if (error) return sendErrorResponse(res, error);
            db.Post.user = foundUser
            createdPost.save();
            db.Post.findById(createdPost._id).populate('user').exec((error, foundPost) => {
                if (error) return sendErrorResponse(res, error);
                sendSuccessResponse(res, foundPost);
            });
        });
    });
};

// const create = (req, res) => {
//     db.Post.create(req.body, (error, createdPost) => {
//         if (error) return res.status(500).send(error);
//         // createdPost.user = req.session.currentUser.id;
//         createdPost.save((error, savedPost) => {
//             if (error) return res.status(500).send(error);
//             res.send(savedPost)
//         });
//     });
// };



const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params._id, req.body, {new: true}, (error, updatedPost) => {
        if (error) return sendErrorResponse( res, error);
        sendSuccessResponse(res, updatedPost)
    })
};

const del = (req, res) => {
    db.Post.findByIdAndDelete({ _id: req.params._id}, (error, deletedPost) => {
        if (error) return sendErrorResponse( res, error);
        sendSuccessResponse(res, deletedPost);
    })
};

module.exports = {
    index,
    show,
    create,
    update,
    del
};