<?php

namespace CMS\Managers;

use CMS\Entities\StoreEntity as Entity;
use CMS\Validators\StoreValidator as Validator;

/**
 * Class StoreRepository
 * @package CMS\Repositories
 */
class StoreManager extends BaseManager{


    /**
     * @param Entity $Entity
     * @param Store $Store
     */
    public function __construct(Entity $Entity , Validator $Validator)
    {
        parent::__construct($Entity , $Validator);
    }


    public function prepareData()
    {
        $data = $this->data;

        $this->data = $data;

    }
}