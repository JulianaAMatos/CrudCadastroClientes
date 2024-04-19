const openModal= () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal= () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

//Peguei as Informações
function InformacoesDados() {
    let informacoesUsuarios = []

    const nome= document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const cidade = document.getElementById("cidade").value;

    const dadosUsuarios={
        nome: nome,
        email: email,
        celular: celular,
        cidade: cidade
    }

console.log(dadosUsuarios)
}

 //Para guardar valores    

    if (localStorage.getItem("cadastrarUsuario")) {
        //se sim, eu guardo as informações dentro do array
        //parse => de JSON para object
        informacoesUsuarios = JSON.parse(localStorage.getItem("cadastrarUsuario"));
    }

    informacoesUsuarios.push()

    localStorage.setItem("cadastrarUsuario", JSON.stringify(informacoesUsuarios))
   
    

// Carregar

let informacoesUsuarios = [];

if (localStorage.getItem("cadastroUsuario")) {
    informacoesUsuarios = JSON.parse(localStorage.getItem("cadastrarUsuario"));
}

document.getElementById("cadastroUsuario").addEventListener('click', closeModal)
   
function MontarTabela(){

    let tabela = document.getElementById('corpo-tabela');

    let template = "";
    
    informacoesUsuarios.forEach(pessoa => {
        template += `
        <tr>
                <td data-cell="nome" > ${pessoa.nome} </td>
                <td data-cell="email" > ${pessoa.email} </td>
                <td data-cell="celular" > ${pessoa.celular} </td>
                <td data-cell="cidade"> ${pessoa.cidade} </td>
                </tr>
                `
            })

            tabela.innerHTML=template
        }

    function SalvarDados(){
        localStorage.getItem("cadastrarUsuario")
        window.location.reload();
    
    }

