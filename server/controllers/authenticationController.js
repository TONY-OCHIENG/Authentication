

export const createAccount = async (request,response) => {
    const { name, email, password} = request.body
    if (name === "" || email === "" || password === "") {
        return response.status(200).json({status:false, message:"Please fill all fields"})
    }
    try {
        const sqlQuerry = "INSERT INTO user(name,email,password) VALUES(?)"
    } catch (error) {
        console.log(error)
    }
}