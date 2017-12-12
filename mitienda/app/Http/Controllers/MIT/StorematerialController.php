<?php

namespace App\Http\Controllers\CMS;

use CMS\Repositories\StorematerialRepository as Repository;
use CMS\Managers\StorematerialManager as Manager;
use Illuminate\Http\Request;

class StorematerialController extends BaseController
{

    public function __construct(Repository $Repository, Manager $Manager)
    {
        parent::__construct($Repository, $Manager);

        $this->middleware('auth');
    }

}
