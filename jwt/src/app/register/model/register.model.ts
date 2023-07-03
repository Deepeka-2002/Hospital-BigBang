
export class registerModel
{
    constructor
        (
    
        public email:string="",
        public firstName: string="",
        public lastName: string="",
        public gender: string="",
        public role: string="",
        public password: string="",
        public hashKey: string="",
        public passwordClear: string="",
        public availableStatus:boolean=true,
        public depName:string=""

        )
        {
            
        } 
}