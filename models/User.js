const mongoose = require("mongoose")
const MeetUsUserSchema = new mongoose.Schema({
    fullname: { type: String },
    idUser: { type: String, required: true },
    email: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String },
    profileImgPublicId: { type: String },
    coverImgPublicId: { type: String },
    profileImgUrl: { type: String, default: '' },
    coverImgUrl: { type: String, default: '' },
    code: { type: String },
    location: { type: String },
    bio: { type: String },
    role: {
        visible: { type: Boolean, default: false },
        name: { type: String, default: "" },
        key: { type: String, default: "" },

    },
    socialLinks: {
        instagram: { type: String },
        telegram: { type: String },
        phone: { type: String },
        whatsApp: { type: String },
        email: { type: String }
    },
    website: [
        {
            link: { type: String },
            name: { type: String },
        }

    ],
    gender: { type: String },
    birthdate: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MeetUsUser' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MeetUsUser' }],
    posts: [{ type: mongoose.Schema.Types.Objecd, ref: 'UserPosts' }]

}, {
    timestamps: true
})
module.exports = mongoose.model('MeetUsUser', MeetUsUserSchema)