angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('medicoCtrl', function($scope, medicoService) {
  $scope.medico = {};

  $scope.cadastrar = () => {
    medicoService.cadastrar($scope.medico);
  };
})

.controller('pacienteCtrl', function($scope, pacienteService) {
  $scope.paciente = {};

  $scope.cadastrar = () => {
    pacienteService.cadastrar($scope.paciente);
  };
})

.controller('setCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, $state, $location, medicoService, pacienteService){
  let usuariosAcessoMedico = [
    {
      nomePaciente: '',
      dataNascimento: '',
      CPF: '',
      emailMedico:''

    },
    {
      nomePaciente: '',
      dataNascimento: '',
      CPF: '',
      emailMedico:''
      
    }
  ];

  $scope.entrar = (login, senha) =>{
    for(let usuario of usuariosAcessoMedico){
      if(login == usuario.login && senha == usuario.senha){
        $state.go('tab.dash')
      }else{
        $scope.erro = true;
      }
    }
  }

  $scope.cadPac = () => {
    $state.go('cadastroPaciente');
  }

  $scope.cadMed = () => {
    $state.go('cadastroMedico')
  }

  $scope.mostrarMed = false;
  $scope.entrarMedico = () => {
      $scope.mostrarMed = !$scope.mostrarMed;
      $scope.mostrarPac = false;
      $scope.mostrarCad = false;
  }

  $scope.mostrarPac = false;
  $scope.entrarPaciente = () => {
      $scope.mostrarPac = !$scope.mostrarPac;
      $scope.mostrarMed = false;
      $scope.mostrarCad = false;
  }

  $scope.mostrarCad = false;
  $scope.pagCadastro = () =>{
    $scope.mostrarCad = !$scope.mostrarCad;

  }

});

