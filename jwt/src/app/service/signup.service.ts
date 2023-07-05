import { HttpClient } from "@angular/common/http";
import { registerModel } from "../register/model/register.model";
import { UserDTOModel } from "../register/model/userDTO.model";
import {Injectable} from '@angular/core';

@Injectable()
export class SignupService{

    constructor(private httpClient:HttpClient)
    {

    }

  

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7192/api/User/Login",userDTO);
    }
}