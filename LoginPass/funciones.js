function validate()
{
    var outmess = ""
    user = document.querySelector(".user").value;
    pass = document.querySelector(".pass").value;

    if(user == "JOHN WICK")
    {
        if(pass == "gooddog")
        {
            outmess = "Correct Access";
        }
        else{
            outmess = "Wrong Password"
        }
    }
    else
    {
        outmess = "Wrong Username";
    }
    if(user != "JOHN WICK" & pass !="gooddog")
    {
        outmess = "Wrong Username and Password";
    }




    document.querySelector('.prueba').innerHTML = outmess;
}