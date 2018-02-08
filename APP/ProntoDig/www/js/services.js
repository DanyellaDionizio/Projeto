angular
  .module('starter.services', [])
  .factory('medicoService', medicoService)
  .factory('pacienteService', pacienteService);

  function medicoService() {

    const cadastrar = (dados) => {
      console.log('Medico Service', dados);
    };

    const login = (dados) => {
      console.log('Medico Service', dados);
    };

    return {
      cadastrar: cadastrar,
      login: login
    };

  }

  function pacienteService() {

    const cadastrar = (dados) => {
      console.log('Paciente Service', dados);
    };

    const login = (dados) => {
      console.log('Paciente Service', dados);
    };

    return {
      cadastrar: cadastrar,
      login: login
    };

  }