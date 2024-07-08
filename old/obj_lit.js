let n = "student"
obj = {
    [n+"name"]:"Gugu Baba",
    course:"btech",
    detail:function(){
        return `${this.studentname} is a student of ${this.course}`
    }
}


console.log(obj.detail(

))
