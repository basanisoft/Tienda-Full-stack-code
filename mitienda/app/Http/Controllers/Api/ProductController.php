<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use CMS\Repositories\ProductRepository as Repository;
use CMS\Managers\ProductManager as Manager;
use App\Http\Controllers\CMS\BaseController;

class ProductController extends BaseController
{

    public function __construct(Repository $Repository, Manager $Manager)
    {
        parent::__construct($Repository, $Manager);
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
