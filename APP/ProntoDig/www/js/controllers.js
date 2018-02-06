angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('medicoCtrl', function($scope) {})

.controller('pacienteCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

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
    for(let usuario of usuariosAcesso){
      if(login == usuario.login && senha == usuario.senha){
        $state.go('tab.dash')
      }else{
        $scope.erro = true;
      }
    }
  }

  $scope.mostrarMed = false;
  $scope.entrarMedico = () => {
      $scope.mostrarMed = !$scope.mostrarMed;
      $scope.mostrarPac = false;
  }

  $scope.esconderMed = () => {
    $scope.entrarPaciente = true;
  }

  $scope.mostrarPac = false;
  $scope.entrarPaciente = () => {
      $scope.mostrarPac = !$scope.mostrarPac;
      $scope.mostrarMed = false;
  }

});
