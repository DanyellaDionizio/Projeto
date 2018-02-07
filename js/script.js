$('.carousel').carousel();

function buscarCep(cep) {
      let url = `//viacep.com.br/ws/${cep}/json/`;

      fetch(url)
            .then((response) => response.json())
            .then((response) => {
                  $('#pacienteEndereco').val(response.logradouro);
                  $('#pacienteBairro').val(response.bairro);
                  $('#pacienteEstado').val(response.uf);
                  $('#pacienteCidade').val(response.localidade);
            })
            .catch((err) => console.log(err));
}

$("#cadastroPaciente #pacienteCEP").on('blur', function(event) {
      if (event.target.value !== '') buscarCep(event.target.value);
});

$("#cadastroPaciente form").on('submit', function(event) {
      event.preventDefault();

      console.log(JSON.stringify($(event.target).serializeArray()))
});