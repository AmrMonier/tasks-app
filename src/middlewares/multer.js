import multer from 'multer'
import path from 'path'
const avatarDiskStorage = multer.diskStorage({
    destination: 'src/uploads/avatars',
    filename(req,file,cb){
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

export default {
    uploadAvatar: multer({
        storage: avatarDiskStorage,
        limits: {
            fileSize: 5000000
        },
        fileFilter(req, file, cb){
            if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
                return cb(new Error('invalid file type only jpg,png or jpeg are allowed'))
            }
            return cb(undefined, true)
        }
    })
}