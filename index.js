function cpf(valor) {
    return valor
    .replace(/\D/g, '') // remove tudo que não for digito de número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2');
};

function cnpj(valor) {
    return valor
    .replace(/\D/g, '') // remove tudo que não for digito de número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2');
};

function celular(valor) {
    return valor
    .replace(/\D/g, '') // remove tudo que não for digito de número
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

document.querySelector('#cpf_cnpj')
.addEventListener("input", (e) => {
    const isCPF = e.target.value.length < 15

    if (isCPF) {
        e.target.value = cpf(e.target.value);
    } else {
        e.target.value = cnpj(e.target.value);
    };
});

document.querySelector('#tel')
.addEventListener("input", (e) => {
    e.target.value = celular(e.target.value);
});