export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    } 

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }
 
    deleteUser = ( email: string) => {
        const user = {
            email
        }

        const objWithIdIndex = this.db.findIndex((obj) => obj.email === email);

        if (objWithIdIndex > -1) {
            this.db.splice(objWithIdIndex, 1);
        }

        //this.db.pop()
        console.log('DB com deleção', this.db)
    }

    getAllUsers = () => {
        return this.db
    }
}

