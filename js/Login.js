class Login{
    constructor(){ 
    }

    logar(event){
        event.preventDefault()
        var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function ()  {
  if (this.readyState == 4 && this.status == 200) {
    var usuario = JSON.parse(this.responseText);    
    console.log()
    for(let i =0; i<usuario.usuarios.length;i++){
        
        if(document.getElementById("email").value == usuario.usuarios[i].email && document.getElementById("password").value == usuario.usuarios[i].password){
            console.log('entrou')
        }
        else{
            console.log('algo errado')
        }
    }
  }
};

xmlhttp.open("GET", "json/usuarios.json", true);
xmlhttp.send();
    }
}