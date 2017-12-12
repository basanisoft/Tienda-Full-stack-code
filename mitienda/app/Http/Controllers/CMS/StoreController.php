<?php

namespace App\Http\Controllers\CMS;

use CMS\Repositories\StoreRepository as Repository;
use CMS\Managers\StoreManager as Manager;


class StoreController extends BaseController
{

    public function __construct(Repository $Repository , Manager $Manager)
    {
       parent::__construct($Repository , $Manager);

        $this->middleware('auth');
    }
}
