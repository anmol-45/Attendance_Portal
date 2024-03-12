function teacherlogin(teacher){
    window.location.href = teacher;
}
function studentlogin(student){
    window.location.href = student;
}
function gotohome(home){
    window.location.href = home;
}
function gotosignup(signup){
    window.location.href = signup;

}

function validate()
        {
            pass1Obj=document.getElementById("pass1");
            pass2Obj=document.getElementById("pass2");
            if(pass1Obj.value===pass2Obj.value)
            {
                return true
            }
            else
            {
                alert("Password Mismatch");
                return false;
            }
        }
//loading webcam
