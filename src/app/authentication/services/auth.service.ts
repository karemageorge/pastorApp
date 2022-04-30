import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { catchError, tap } from "rxjs/Operators";
// import { User } from "./user.model";

interface AuthResponseData {

}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // user = new Subject<User>()

    constructor(private http : HttpClient){}

    // signup(name: string, email: string, password: string){
    //     return this.http.post<AuthResponseData>('http://127.0.0.1:5000/churches/adminregister',{
    //         name: name,
    //         email: email,
    //         password: password
    //     })
    // }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>('/pastors/login',{
            email: email,
            password: password
        })
    }

    // private handleAuthentication(email : string,id: string,token : string){
    //     const user = new User(email, id, token)
    //     this.user.next(user)  

    // }

    getToken(){
        return localStorage.getItem('userdata')
    }
} 