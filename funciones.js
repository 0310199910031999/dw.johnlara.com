function insertar(valor)
{
    document.querySelector('.pantalla').innerHTML+=valor;
}
function resultado()
{
    var p = document.querySelector('.pantalla');
    r = p.innerHTML;
    res=eval(r);
    p.innerHTML = res;
}
function borrar()
{
    document.querySelector('.pantalla').innerHTML = "";
}
function borraruno()
{
    //en p guardamos todo el objeto
    p=document.querySelector('.pantalla');
    //en valores guardamos todos los valores
    valores = p.innerHTML;
    t = valores.length;
    borrar();
    for(i=0;i<t-1;i++)
    {
        p.innerHTML+= valores[i];
    }
}