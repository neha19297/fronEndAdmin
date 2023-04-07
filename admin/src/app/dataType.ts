export interface userRegistration{
    fname: string;
    // lname: string;
    // mobile: number;
    id:number;

    email: string;
    
    password: string;
    cpassword: string;
}
export interface bankDetail{
    bank:string;
name:string;
account:number;
cAccount:number;
}
export interface login{
    email: string;
    password: string;
}
export interface que_upload{
    que_num :number;
    subject:string;
    chapter:string;
    description :string;
    category :string;
    que_option :string;
    option:string;
    answer:string;
    id:number;
}
export interface courses{
    courseType:string;
    courseName:string;
    class:string;
    syllabus:string;
    board:string;
    image: any;
}