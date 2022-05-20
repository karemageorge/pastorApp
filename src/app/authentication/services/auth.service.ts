import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
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
    //     return this.http.post<AuthResponseData>('http://nuru.sikika-ke.co.ke/churches/adminregister',{
    //         name: name,
    //         email: email,
    //         password: password
    //     })
    // }

    loginpastor(email: string, password: string){
        return this.http.post<AuthResponseData>(environment.base_url+'/pastors/login',{
            email: email,
            password: password
        })
    }
    loginchurch(email: string, password: string){
        return this.http.post<AuthResponseData>(environment.base_url+'/churches/login',{
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