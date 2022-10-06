let listaUsuarios = [
    {
      id: 1,
      nome: "Thiago Pereira",
      sexo: "Masculino",
      idade: 20,
      email: "fulanodetal@termail.com",
    },
    {
      id: 2,
      nome: "Thaís Lins",
      sexo: "Feminino",
      idade: 19,
      email: "thaisdetal@gtemail.com",
    },
    {
      id: 3,
      nome: "Mariana Ferreira",
      sexo: "Feminino",
      idade: 25,
      email: "marianaferreira@tailme.com",
    },
    {
      id: 4,
      nome: "Pedro Ivo Silva",
      sexo: "Feminino",
      idade: 28,
      email: "manuelatrait@gteprmail.com",
    },
  ];
  
  const pesquisa = document.getElementById("pesquisa"); // PEGANDO ELEMENTO INPUT HTML REFERENCIADO PELO ID
  const btnPesquisar = document.getElementById("btnPesquisar"); // PEGANDO ELEMENTO INPUT TIPO BUTTON REFERENCIADO PELO ID
  const btnLimpar = document.getElementById("btnLimpar"); // PEGANDO ELEMENTO INPUT TIPO BUTTON REFERENCIADO PELO ID
  
  // FUNCAO QUE LISTA OS USUARIOS NA TABELA
  function listarUsuariosNaTabela(filtrados = undefined) { // CASO NAO SEJA PASSADO NENHUM PARAMETRO PARA A FUNÇÃO ELE VAI RECEBER FILTRADOS COMO UNDEFINED
    let trTds = ""; // DECLARANDO UMA VARIAVEL QUE RECEBE UMA STRING VAZIA
    let lista = []; // DECLARANDO UMA VARIAVEL QUE RECEBE ARRAY VAZIO
    let resultado = document.getElementById("resultado"); // PEGANDO O ELEMENTO TBODY REFERENCIADO PELO ID
    
    lista = filtrados === undefined ? listaUsuarios : filtrados; // VERIFICA SE FILTRADOS === UNDEFINED, CASO FOR LISTA RECEBE ARRAY LISTA USUARIOS, SENÃO LISTA RECEBE ARRAY FILTRADOS
  
    lista.forEach((usuario) => { // PERCORRE O ARRAY LISTA E POR CADA USUARIO PERCORRIDO ADICIONA A STRING O HTML ABAIXO
      trTds += `<tr><td>${usuario.id}</td>`;
      trTds += `<td>${usuario.nome}</td>`;
      trTds += `<td>${usuario.sexo}</td>`;
      trTds += `<td>${usuario.idade}</td>`;
      trTds += `<td>${usuario.email}</td></tr>`;
    });
    resultado.innerHTML = trTds; // ADICIONANDO AO ELEMENTO TBODY O CONTEUDO DA STRING TRTDS QUE NO CASO AS LINHAS(TAGS) DA TABELA
  
    if (lista.length === 0) { // VERIFICA SE O ARRAY ESTA VAZIO, SE ESTIVER VAZIO ADICIONA A STRING ABAIXO AO TBODY
      resultado.innerHTML = `<tr><td colspan="5">Nenhum nome encontrado</td></tr>`;
    }
  }
  
  // FUNÇÃO QUE FILTRA USUARIO DE ACORDO COM O DIGITADO NO CAMPO INPUT
  function filtrarDadosUsuario() {
    let filtrados = []; // CRIANDO UM ARRAY VAZIO
    let recebePesquisa = pesquisa.value.toLowerCase(); // PEGANDO O QUE FOI DIGITADO NO INPUT E PASSANDO PARA LETRA MINUSCULA COM O TOLOWERCASE
  
    if (recebePesquisa !== "") { // VERIFICANDO SE O VALOR DIGITADO E DIFERENTE DE VAZIO
      filtrados = listaUsuarios.filter(usuario => { // FILTRANDO ARRAY LISTA USUARIOS E VERIFICANDO SE O QUE FOI DIGITADO
        return usuario.nome.toLowerCase().indexOf(recebePesquisa) > -1 // VERIFICANDO SE O QUE FOI DIGITADO NO INPUT CONTEM O NOME DO USUARIO 
         || usuario.id.toString().indexOf(recebePesquisa) > -1 // VERIFICANDO SE O QUE FOI DIGITADO NO INPUT CONTEM O ID DO USUARIO  
         || usuario.sexo.toLowerCase().indexOf(recebePesquisa) > -1 // VERIFICANDO SE O QUE FOI DIGITADO NO INPUT CONTEM O SEXO DO USUARIO 
         || usuario.idade.toString().indexOf(recebePesquisa) > -1 // VERIFICANDO SE O QUE FOI DIGITADO NO INPUT CONTEM A IDADE DO USUARIO 
         || usuario.email.toLowerCase().indexOf(recebePesquisa) > -1}); // VERIFICANDO SE O QUE FOI DIGITADO NO INPUT CONTEM O EMAIL DO USUARIO, INDEXOF E USADO PARA ENCONTRAR UM VALOR DENTRO DE UMA STRING OU ARRAY, CASO NAO SEJA ENCONTRADO ELE RETORNA -1
      } else {
      filtrados = listaUsuarios; // CASO VALOR DIGITADO SEJA VAZIO O ARRAY FILTRADOS RECEBE O ARRAY LISTA USUARIOS
    }
    listarUsuariosNaTabela(filtrados); // CHAMANDO A FUNÇÃO listarUsuariosNaTabela PASSANDO ARRAY FILTRADOS COMO ARGUMENTO
  }

  // FUNÇÃO PARA LIMPAR OS CAMPOS
  function limparDadosDaTelaForm() {
    pesquisa.value = ""; // PEGANDO VALOR DO INPUT E SETANDO COMO VAZIO
    listarUsuariosNaTabela(listaUsuarios); // CHAMANDO FUNÇÃO PASSANDO COMO ARGUMENTO O ARRAY LISTA-USUARIOS
  }
  
  // AO CARREGAR A PAGINA A LISTA JA E EXIBIDA
  addEventListener("load", () => listarUsuariosNaTabela());
  btnPesquisar.addEventListener("click", () => filtrarDadosUsuario()); // ADICIONA UMA ESCUTA NO BOTAO PESQUISAR QUANDO ELE FOR CLICADO EXECUTA A FUNÇÃO filtrarDadosUsuario
  btnLimpar.addEventListener("click", () => limparDadosDaTelaForm()); // ADICIONA UMA ESCUTA NO BOTAO LIMPAR QUANDO ELE FOR CLICADO EXECUTA A FUNÇÃO limparDadosDaTelaForm