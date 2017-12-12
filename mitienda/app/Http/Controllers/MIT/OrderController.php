<?php

namespace App\Http\Controllers\CMS;

use CMS\Repositories\OrderRepository as Repository;
use CMS\Managers\OrderManager as Manager;
use Illuminate\Http\Request;

class OrderController extends BaseController
{

    public function __construct(Repository $Repository, Manager $Manager)
    {
        parent::__construct($Repository, $Manager);

        $this->middleware('auth');
    }

}
