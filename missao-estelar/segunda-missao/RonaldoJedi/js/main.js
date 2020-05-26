//Segunda Missão Estelar JS
//Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS! :)
var missao = "Segunda Missão Estelar JS";
console.log(missao);
var hiperespaço = new String("Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova missão estelar JS! :)");
console.log(hiperespaço);
console.log(typeof hiperespaço);

var nomeCliente = "Ronaldo";
var renda = 2200;
var dataNascimento = new Date("2000-04-14");
var ativo = true;

function exibirDadosClienteVariaveis(){
    console.log(nomeCliente);
    console.log(renda);
    console.log(dataNascimento);
    console.log(ativo == true? "Sim":"Não");
}

clienteArray = ["Ronaldo",2200,new Date("2000-04-14"),true];
function exibirDadosClienteArray(){
    for(let index of clienteArray){
        console.log(index);
    }
}

clienteObject = {nomeCliente: "Ronaldo", renda:2200, dataNascimento: new Date("2000-04-14"), ativo: true}
function exibirDadosClienteObjeto(){
    for(let itemObject in clienteObject){
        switch(itemObject){
            case "nomeCliente": console.log("Nome: ", clienteObject.nomeCliente);
                break;
            case "renda": console.log("Renda: ", clienteObject.renda);
                break;
            case "dataNascimento": console.log("Data Nascimento: ", clienteObject.dataNascimento);
                break;
            case "ativo": console.log("Ativo: ", ativo == true? "Sim" : "Não");
                break;
        }
    }
}

var dataAtual = new Date()
console.log(dataAtual);
function retornaDataAtualFormatada(){
    if(dataAtual.getMonth()+1 < 10)
    console.log(dataAtual.getDate() + "/0" + (dataAtual.getMonth()+1) + "/" + dataAtual.getFullYear());
    else
    console.log(dataAtual.getDate() + "/" + (dataAtual.getMonth()+1) + "/" + dataAtual.getFullYear());
}
retornaDataAtualFormatada();

var hiperEspaçoRegExp = new RegExp("estelar");
var textoMissao = "Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova missão estelar JS :)!";
console.log(hiperEspaçoRegExp.test(textoMissao));
console.log(hiperEspaçoRegExp.exec(textoMissao));

index = 0;

try{

    for(index = 30; index > 0; index--){
        if(index != 29)
        console.log(index);
       // else
       // throw new Error("Ocorreu um erro na função");
    }
        }catch(error){
        console.log(error.stack);
    }finally{
    console.log("-------");
}

index = 0;

    function recebeDadosFormBoot(){
        console.log("Tipo de Objeto: ", Object.prototype.toString.call(objFormElementos));
        var objDadosForm = {nomeBoot: "", emailBoot: "", emailPromocionalBoots: true, FormaContatoTelefoneRadioBoot: true, 
        FormaContatoEmailRadioBoot: true, estadoSelectBoot: true}
        var objFormElementos = document.querySelector("#formBoot");

        for(index = 0; index < (objFormElementos.length-1) ; index++){
            switch(index){
                    case 0: objDadosForm.nomeBoot = document.getElementById("nomeBoot");
                    console.log("Nome: " + objDadosForm.nomeBoot.value)
                    break;
                    case 1: objDadosForm.emailBoot = document.getElementById("emailBoot")
                    console.log("Email: "+ objDadosForm.emailBoot.value)
                    break;
                    case 2: objDadosForm.emailPromocionalBoots = document.getElementById("emailPromocionalBoots")
                    console.log("emailPromocionalMarcado: "+objDadosForm.emailPromocionalBoots.checked)
                    break;
                    case 3: objDadosForm.FormaContatoTelefoneRadioBoot = document.getElementById("FormaContatoTelefoneRadioBoot")
                    console.log("FormaContatoTelefoneBootMarcado: "+objDadosForm.FormaContatoTelefoneRadioBoot.checked)
                    break;
                    case 4: objDadosForm.FormaContatoEmailRadioBoot = document.getElementById("FormaContatoEmailRadioBoot")
                    console.log("FormaContatoEmailBootMarcado: "+objDadosForm.FormaContatoEmailRadioBoot.checked)
                    break;
                    case 5: objDadosForm.estadoSelectBoot = document.getElementById("estadoSelectBoot")
                    console.log("EstadoSelectBootMarcado: "+objDadosForm.estadoSelectBoot.value)
                    break;
            }
        }

        preencherFormHtml(objDadosForm);
        
    }

    function preencherFormHtml(objBoot){
   
        var formHtml = document.querySelector("#formHtml");
        console.log(formHtml);

        formHtml.nomeHtml.value = objBoot.nomeBoot.value;
        formHtml.emailHtml.value = objBoot.emailBoot.value;   
        formHtml.emailPromocionalHtml.checked = objBoot.emailPromocionalBoots.value;
        formHtml.FormaContatoTelefoneRadioHtml.checked = objBoot.FormaContatoTelefoneRadioBoot.value;
        formHtml.FormaContatoEmailRadioHtml.checked = objBoot.FormaContatoEmailRadioBoot.value;
        formHtml.estadoSelectHtml.value = objBoot.estadoSelectBoot.value;
}