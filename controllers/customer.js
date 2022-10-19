function add (){
    return "Cadastrando cliente";
}

//design patterns / padrões de projeto

function list() {
    return "Listando cliente";
}

function update (){
    return "Editando cliente";
}

function remove() {
    return "Excluir cliente";
}

moodule.exports = {
    add, //add: add,
    list,
    update,
    remove,
};