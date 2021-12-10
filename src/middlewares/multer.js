import multer from 'multer'

export default {
    uploadAvatar: multer({
        storage: multer.memoryStorage(),
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