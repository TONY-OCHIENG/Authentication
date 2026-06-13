import jwt from 'jsonwebtoken'
export const auth = ( request , response , next ) => {
    const token = request.cookie.token
    if (!token) {
        return response.status(401).json({status: false, message:"You are not loggedin"})
    } else {
        jwt.verify(token,"login_rtie_owp",(err,decoded) => {
            if (err) {
                return response.status(401).json({status: false, message:"Token not okey"})
            } else {
                request.name = decoded.name
                next()
            }
        })
    }

}