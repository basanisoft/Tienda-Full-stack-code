<?php

namespace CMS\Managers;

use CMS\Entities\CustomFieldEntity;
use CMS\Entities\StorematerialEntity as Entity;
use CMS\Validators\StorematerialValidator as Validator;

/**
 * Class StoreRepository
 * @package CMS\Repositories
 */
class StorematerialManager extends BaseManager{


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