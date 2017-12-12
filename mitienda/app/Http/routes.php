<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => 'web'], function () {

    //Route::auth();

    Route::get('/' , function(){
        return File::get(public_path() . '/cms/index.html');
    });

    Route::post('/login' , 'Auth\AuthController@login');

    Route::get('/logout' , 'Auth\AuthController@logout');

    Route::get('checkLogin' , function(){

        return response()->json(["loggedIn" => \Auth::check() ]);
    });
	
	Route::resource('products' , 'CMS\ProductController');
		
	Route::resource('stores' , 'CMS\StoreController');
	
	Route::resource('orders' , 'CMS\OrderController');
	
	Route::resource('storematerials' , 'CMS\StorematerialController');
	
	Route::post('products/upload-image' , 'CMS\ProductController@uploadImage');

    Route::group(['prefix' => 'api'], function () {

			
	    Route::resource('products', 'Api\ProductController',
            ['only' => ['index', 'show']]);
		
		Route::resource('stores', 'Api\StoreController',
            ['only' => ['index', 'show']]);
		
		Route::resource('orders', 'Api\OrderController',
            ['only' => ['index', 'show']]);
		
		Route::resource('storematerials', 'Api\StorematerialController',
            ['only' => ['index', 'show']]);

    });

});
