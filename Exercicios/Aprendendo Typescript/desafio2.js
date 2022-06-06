var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
})(Profissao || (Profissao = {}));
var pessoas = [];
pessoas[0] = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.atriz,
};
pessoas[1] = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.padeiro,
};
pessoas[2] = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
};
pessoas[3] = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
console.log(pessoas);
