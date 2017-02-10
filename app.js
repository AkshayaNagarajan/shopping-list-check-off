(function (){

	var app = angular.module('ShoppingListCheckOff',[])
	app.service('ShoppingListCheckOffService', function() {

		var toBuyArray = [{ name: "cookies", quantity: 10 },
                  		  { name: "Apple", quantity: 5 },
				  { name: "Orange", quantity: 9 },
				  { name: "Noodles", quantity: 2 },
	                          { name: "Veggie", quantity: 6 }];

		var boughtArray = [{ name: "egg", quantity: 6 }];


		this.returnToBuyArray = function () {
		        return toBuyArray;
    		}
		this.returnBoughtFunc = function (index) {
			var newObj = [{}];			
			newObj = toBuyArray.splice(index, 1);
			boughtArray[boughtArray.length] = newObj[0];
		}
		this.returnBoughtArray = function () {
		        return boughtArray;
    		}
	});


	app.controller('ToBuyController',['$scope','ShoppingListCheckOffService',function($scope,ShoppingListCheckOffService){

		$scope.toBuyArray = ShoppingListCheckOffService.returnToBuyArray();
		$scope.boughtFunc = function(name,quantity,index){
			ShoppingListCheckOffService.returnBoughtFunc(index);
			if($scope.toBuyArray.length == 0){
				$scope.toBuyArrayFlag = true;
			}
		}
	}]);


	app.controller('AlreadyBoughtController',['$scope','ShoppingListCheckOffService',function($scope,ShoppingListCheckOffService){
		
		$scope.boughtArray = ShoppingListCheckOffService.returnBoughtArray();
		if($scope.boughtArray.length == 0){
			$scope.boughtArrayFlag = true;
		}
		console.log($scope.boughtArray.length);
	}]);

})();