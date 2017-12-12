'use strict'
angular.module('shop.controllers' , [])
    .controller('ShopIndexController' , ['$scope' , '$http' , 'Shop','$filter', function($scope, $http, Shop, $filter){

		 $scope.products = [];
		 
		 var query = "{ materials { id,  name,  description, image, price } }";
		    
			var config = {
                headers : {
					'Content-Type': 'application/json'
                }
            }

			$http.post('http://localhost:8088/graphql', JSON.stringify({query: query}), config)
		     .then(
			   function(response){
				 $scope.products = response.data.data.materials;
			   }, 
			   function(response){
				 // failure callback
			   }
			);
	
			
		 $scope.cart = [];
	     $scope.total = 0;
		
		 
		 $scope.addItemToCart = function(product){

		 	if($scope.cart.length === 0){
		 		product.count = 1;
		 		$scope.cart.push(product);
		 	}else{
		 		var repeat = false;
		 		for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				repeat = true;
		 				$scope.cart[i].count +=1;
						var total = $scope.cart[i].count;
		 			}
		 		}
		 		if (!repeat) {
		 			product.count = 1;
		 		 	$scope.cart.push(product);	
		 		}
		 	}
			Materialize.toast(
			  $('<span>' + $filter('language')('Item added to cart' , true) + '</span>'),
			   1000
		    );
		    $scope.total += parseFloat(product.price);
		 };
		 
		 $scope.removeItemCart = function(product){
		   
		   if(product.count > 1){
		     product.count -= 1;
		   }
		   else if(product.count === 1){
		     var index = $scope.cart.indexOf(product);
 			 $scope.cart.splice(index, 1);
		   }
		    Materialize.toast(
			  $('<span>' + $filter('language')('Item Removed' , true) + '</span>'),
			   1000
		    );
		   $scope.total -= parseFloat(product.price);		   
		 };
		 
		 
		 $scope.placeOrder = function (product) {
			 
			var order_state = Math.floor(Math.random() * 99999) + 10000;
			var order_date = new Date();
			var order_status ='success';
		 
			for(var i = 0; i< $scope.cart.length; i++){

			 var query = 'mutation {  orderCreate(material_id: "' + $scope.cart[i].id + '",store_id:"' + $scope.cart[i].id + '",quantity:"' +  $scope.cart[i].count + '",order_state:"' + order_state + '",created_at:"' + order_date + '"){ id }}';	
			 
				$http.post('http://localhost:8088/graphql', JSON.stringify({query: query}), config)
				 .then(
				   function(response){
					  order_status = "success";
				   }, 
				   function(response){
				   }
				);
		 	}
			if(order_status=="success"){
			   alert("Order Placed Successfully");
			   location.reload(); 
			}
         }
    }])
	
	