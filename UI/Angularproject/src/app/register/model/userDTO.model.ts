
export class UserDTOModel {
    constructor(
     public id:number=0,
     public email: string="",
     public password:string="",
     public token:string="",
     public role:string=""
     )
     {
      
     }
   }