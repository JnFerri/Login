class Cadastro{
    constructor(){
        this._inputEmail = document.getElementById("emailCadastro")
        this._inputPassword = document.getElementById("passwordCadastro")
        this._listaUsuario = new ListaUsuarios()
        
    }

    adiciona(event){
        event.preventDefault()
        this._listaUsuario.adiciona(this._criaNegociacao())
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var usuario = JSON.parse(this.responseText);
              xhr.open("POST", "/json/usuarios.json", true);

            xhr.send(JSON.stringify(this._listaUsuario._listaUsuarios));
        
    
    }}}

    _criaNegociacao(){
        return new Usuario(
            this._inputEmail.value, 
            this._inputPassword.value
            )
    }
}
