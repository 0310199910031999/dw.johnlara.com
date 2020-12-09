var notas = [];
window.addEventListener('load', starting, true);

function starting()
{
    NoteTitle=document.getElementById('titulo');
    NoteText= document.getElementById('texto');
    NoteTheme= document.getElementById('lista');
    AddButton= document.getElementById('bagregar');
    NullMessage = document.querySelector(".mesage");


    AddButton.addEventListener('click',AddNote,true);
}
function AddNote(){
    if(NoteTitle.value!="" && NoteText.value!="")
    {
        newNote = {
            Title1: NoteTitle.value,
            Text1: NoteText.value,
            Theme1: NoteTheme.value,
        };
        notas.push(newNote);
        NotesPanel = document.querySelector('.panel').innerHTML+="<div class='notita' id='"+newNote.Theme1+"'><div class='equis' id='"+(notas.length-1)+"'>X</div><h2 class = 'content-title'>"+
        newNote.Title1+"</h2><p class ='content-text'>"+newNote.Text1+"</p></div>";
        NoteText.value = "";
        NoteTitle.value = "";
    }
    else{
        NullMessage.classList.add("msj2")
        setTimeout(function(){
            NullMessage.classList.remove("msj2")
        }, 2500);
    }
        

    Delete1=document.querySelectorAll(".equis");
    for(let i=0; i<notas.length;i++)
    {
        Delete1[i].addEventListener('click',deleteNote,true);

    }
}
function deleteNote()
{
    console.log('click',event.target.id);
    notas.splice(event.target.id,1)
    document.getElementById(event.target.id).parentElement.remove();

}