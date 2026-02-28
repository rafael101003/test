function login(){
        let nome = document.getElementById("inserirNome").value; //guarda o valor inserido pelo usuário
        let senha = document.getElementById("inserirSenha").value;

        if (nome === "" || senha === ""){
                alert("insira suas informações")  //retorna caso não insira um nome ou um conteúdo, e não apresenta na tela
                return;
        }

        document.getElementById("mudarNome").innerText=("Seja bem vindo " + nome + "!"); //apresenta o valor guardado na input

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuario = usuarios.find(u => u.nome === nome && u.senha === senha);  //registra e verifica se existe o usuario e senha

        if(usuario){
                window.location.href="Home.html";        //redireciona para outra page após a verificação        
        }
        else{
                alert("usuário ou senha icorretos");
        }
       
}
function register(){

        let nome = document.getElementById("inserirNome").value; //guarda o valor inserido pelo usuário
        let senha = document.getElementById("inserirSenha").value;

        if (nome === "" || senha === ""){
                alert("insira suas informações")  //retorna caso não insira um nome ou um conteúdo, e não apresenta na tela
                return;
        }
        
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //dentro da function, guarda as informações, embrulha e cria um id para localização
        let existe = usuarios.find(u => u.nome === nome); // localiza o valor com a tag que foi guardada

        if(existe){
                alert("Este usuário já existe!");
                return;
        }

        usuarios.push({nome,senha});
        localStorage.setItem("usuarios", JSON.stringify(usuarios)); // puxa nome e senha registrada nas primeiras var e guarda.
        alert("usuário registrado com sucesso!");   
}
//localStorage.clear();