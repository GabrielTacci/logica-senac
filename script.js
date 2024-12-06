/*Código do Exercicio 05
function anime1(){
    alert("Fate/Zero ")
    console.log("Fate/Zero (フェイト/ゼロ Feito/Zero?) é uma light novel japonesa escrita por Gen Urobuchi, ilustrada por Takashi Takeuchi, e é o antecessor para todas as rotas na Light Novel Fate/stay night da Type-Moon. Fate/Zero acontece dez anos antes dos eventos de Fate/stay night, e conta a história da Quarta Guerra do Santo Graal, um secreto torneio mágico que acontece na Cidade de Fuyuki no Japão onde sete magos conhecidos como os Mestres dos Servos invocam reencarnações de almas lendárias e heróis de todos os tempos, onde eles lutam em uma batalha mortal onde o vencedor obtém o Santo Graal, um lendário cálice mágico capaz de conceder desejos. O protagonista Kiritsugu Emiya, pai adotivo do protagonista Shirou Emiya de Fate/stay night, é conhecido como um impiedoso mago assassino que se junta ao torneio em nome da família de sua esposa, os Einzberns. ")
    window.location.href = 'https://pt.wikipedia.org/wiki/Fate/Zero';              
    
}

function anime2(){
    alert("Ranma 1/2 ")
    console.log("Ranma Saotome é um jovem estudante de artes marciais. Certo dia, ele e seu pai partem para uma jornada de treinamento em Bayan Har Shan (Montanhas Bayankala), na província de Qinghai, na China. O local é extremamente perigoso, pois abriga inúmeras fontes tidas como amaldiçoadas. Diz a lenda que pessoas e animais morreram nelas e por isso, quem cair numa, passa se transformar na vítima que se afogou nelas. Para o azar de Ranma e de seu pai, Genma, ambos caíram em fontes durante o treinamento. O resultado é que o jovem artista marcial agora se transforma em garota sempre que se molha em água fria, voltando ao normal somente quando entra em contato com água quente. Já seu pai transforma-se em um imenso panda. De volta ao Japão, o pai de Ranma, sempre pensando em seu bem-estar, arruma um casamento para o filho com umas das filhas de seu velho amigo Soun Tendo. Este por sua vez, quer que uma de suas filhas case para dar sequência ao Estilo Vale-Tudo de Artes Marcias, criado por sua família. Akane, a mais temperamental das três filhas de Tendo, acaba sendo a escolhida. O problema é que nem ela nem Ranma aceitam o casamento arranjado. E não é só isso, Akane e a versão mulher de seu noivo ainda dividem o coração do veterano Kuno, o valentão da escola. Pior ainda é que Ryouga, antigo desafeto de Ranma, também se apaixona por Akane. Sem contar as outras “noivas” do herói que surgem ao longo da história ? em sua grande parte por causa de alguma falcatrua passada de Genma. E assim, a confusão está instaurada na Academia Tendo de Artes Marciais.")
    window.location.href = 'https://editorajbc.com.br/mangas/colecao/ranma-1-2/ranma-1-2-a-historia/';  
}

function anime3(){
    alert("Boku No Hero ")
    console.log("Boku no Hero Academia (僕のヒーローアカデミア Boku no Hīrō Akademia?, lit. Minha Academia de Heróis), também conhecido como My Hero Academia no ocidente, é uma série de mangá escrita e ilustrada por Kōhei Horikoshi. Os capítulos do mangá são publicados na revista Weekly Shōnen Jump desde julho de 2014,[7] sendo compilados em volumes formato tankōbon pela editora Shueisha. A série é licenciada e publicada no Brasil pela editora JBC e em Portugal pela Editora Devi")
    window.location.href = 'https://pt.wikipedia.org/wiki/Boku_no_Hero_Academia';  
      }

       let nomeUsuario = prompt("Qual o seu nome?");
    console.log("O nome do usuário é: "+nomeUsuario)
Fim do Exercicio 5
      */


//---------------------------------------------------------------------------------------------------------------------------------------------------------

//Código do Exercicio 06

function cnh(){
    let nomeUsuario
    let idadeUsuario;

   
    while (true){
        nomeUsuario = prompt("Qual o seu nome?");

        if (nomeUsuario === "" || !/^[a-zA-Zá-úÁ-Ú\s]+$/.test(nomeUsuario)) {
            alert("Digite um nome válido (apenas letras).");
        } else {
            break; 
        }
    }


    while (true){
        idadeUsuario = prompt("Digite sua idade: ");

        if(idadeUsuario ==="" || isNaN(idadeUsuario)|| idadeUsuario <=0){
            alert("Insira uma idade válida.")
        }else{
            idadeUsuario = parseInt(idadeUsuario);
            break;
        }
    }


    if(idadeUsuario >= 18){ 
        alert("Parabéns "+nomeUsuario+" , você está apto a tirar sua CNH");
    }else{
        alert("Caro(a) "+nomeUsuario+" ,infelizmente pela questão da idade, você não está apto a tirar sua CNH");
    }
}
   // Fim do Exercicio 6
 

    //Inicio Exercicio 7

    function jogo(){
        let numeroSecreto = Math.floor(Math.random() * 10) + 1;
        console.log(numeroSecreto)
      //  let palpite = prompt("Digite seu palpite entre 1 e 10")
        let palpite = parseInt(prompt("Digite seu palpite entre 1 e 10"))
        let palpite2 = parseInt(prompt("Digite seu palpite entre 1 e 10"))
        let palpite3 = parseInt(prompt("Digite seu palpite entre 1 e 10"))

      


        if (numeroSecreto === (palpite) || (numeroSecreto === (palpite2) || (numeroSecreto === (palpite3)))){
            alert("Acertou, o número secreto é o: "+numeroSecreto);
        } else {
            alert("Errou o número secreto é o: "+numeroSecreto);
        }
    }


    function jogo2(){

        let numeroSecreto = Math.floor(Math.random() * 10) + 1;
        let tentativas = 0;
        let limiteTentativas = 10;

        do {
            numeroDigitado = parseInt(prompt("Adivinhe o número secreto entre 1 e 10"));

            if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 10) {
                alert("Por favor, insira um número válido de 1 a 10");
                continue;
            }

            tentativas++;

            if (numeroDigitado < numeroSecreto) {
                alert("O número secreto é maior! Tente novamente");
            } else if (numeroDigitado > numeroSecreto) {
                alert("O número secreto é menor! Tente novamente");
            } else {
                alert(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas.`);
                break;
            }

            if (tentativas === limiteTentativas){
                alert(`Você atingiu o limite de tentativas! O número secreto era ${numeroSecreto}.`);
                break;
            }
        } while (numeroDigitado !== numeroSecreto);
    }
        //Final exercicio 7

       // Início exercício 8
       let numeroSecreto = Math.floor(Math.random() * 10) + 1; 
       console.log("Numero secreto gerado: "+numeroSecreto)

       function jogo1() {
           let inputPalpite = document.getElementById("palpite");
           let mensagem = document.getElementById("texto");
       
           let palpite = parseInt(inputPalpite.value);
       
           if (palpite === numeroSecreto) {
               mensagem.textContent = "Parabéns! Acertou, Mizeravi!";
       
               
               numeroSecreto = Math.floor(Math.random() * 10) + 1;
               console.log("Novo número secreto gerado: " + numeroSecreto);
           } else if (palpite < numeroSecreto) {
               mensagem.textContent = "Tente um número maior!";
           } else {
               mensagem.textContent = "Tente um número menor!";
           }
       
           inputPalpite.value = "";
           inputPalpite.focus();
       }
       
       document.getElementById("btn33").addEventListener("click", jogo1);
    
        
    