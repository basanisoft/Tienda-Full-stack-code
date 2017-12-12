<?php

namespace CMS\Managers;

use CMS\Entities\ProductEntity as Entity;
use CMS\Validators\ProductValidator as Validator;

/**
 * Class ProductRepository
 * @package CMS\Repositories
 */
class ProductManager extends BaseManager
{


    /**
     * @param Entity $Entity
     * @param Category $Category
     */
    public function __construct(Entity $Entity, Validator $Validator)
    {
        parent::__construct($Entity, $Validator);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function save($data)
    {
        $response = parent::save($data);
		
        return $response;

    }

    public function update($data)
    {
        $response = parent::update($data);

        return $response;

    }

    /**
     *
     */

    public function prepareData()
    {
        $data = $this->data;
        $data['available'] = true;

        $this->data = $data;

    }
}