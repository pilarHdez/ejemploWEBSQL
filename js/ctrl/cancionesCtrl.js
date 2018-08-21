/*
 * $scope es la variable con la que vamos a comunicar los controladores con el DOM
 */
appBD.controller('cancionesCtrl', function($scope){

	$scope.data = {}; 
	$scope.data.tituloCancion = ""; 
	$scope.data.interprete = "";

	$scope.canciones = [];

	$scope.save = function(){
		console.log($scope.data);

		$scope.canciones.push({
			"tituloCancion" : $scope.data.tituloCancion,
			"interprete" : $scope.data.interprete
		});

		$scope.data.tituloCancion = ""; 
		$scope.data.interprete = "";

	}


});