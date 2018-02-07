angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('medicoCtrl', function($scope) {})

.controller('pacienteCtrl', function($scope) {})

.controller('setCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, $state){
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
  }

  $scope.mostrarCad = false;
  $scope.pagCadastro = () =>{
    $scope.mostrarCad = !$scope.mostrarCad;

  }

});

