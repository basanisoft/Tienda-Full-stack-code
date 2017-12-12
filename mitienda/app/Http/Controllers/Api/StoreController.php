<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use CMS\Repositories\StoreRepository as Repository;
use CMS\Managers\StoreManager as Manager;
use App\Http\Controllers\CMS\BaseController;
use Illuminate\Support\Facades\Input;

class StoreController extends BaseController
{

    public function __construct(Repository $Repository, Manager $Manager)
    {
        parent::__construct($Repository, $Manager);
    }
	
	public function index(Request $request)
    {

        return response()->json($this->repository->all());
    }

    public function show(Request $request, $id)
    {
        if(is_numeric($id))
        {
            $resource = $this->repository->findById($id);
        }

        if (!$resource) {
            return response()->json(['error' => 'Entity not found'], 404);
        }
        return response()->json($resource);
    }
	

}
