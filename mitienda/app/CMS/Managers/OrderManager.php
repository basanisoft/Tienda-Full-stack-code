<?php

namespace CMS\Managers;

use CMS\Entities\OrderEntity as Entity;
use CMS\Validators\OrderValidator as Validator;

/**
 * Class StoreRepository
 * @package CMS\Repositories
 */
class OrderManager extends BaseManager{


    /**
     * @param Entity $Entity
     * @param Store $Store
     */
    public function __construct(Entity $Entity , Validator $Validator)
    {
        parent::__construct($Entity , $Validator);
    }

    /**
     *
     */

    public function prepareData()
    {
        $data = $this->data;
        $this->data = $data;

    }
}