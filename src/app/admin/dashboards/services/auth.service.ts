import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
// import { User } from "./user.model";

interface AuthResponseData {

}
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // user = new Subject<User>()

    constructor(private http : HttpClient){}

    // private handleAuthentication(email : string,id: string,token : string){
    //     const user = new User(email, id, token)
    //     this.user.next(user)  

    // }

    getToken(){
        return localStorage.getItem('userdata')
    }
} 