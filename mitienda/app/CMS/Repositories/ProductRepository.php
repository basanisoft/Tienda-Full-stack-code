<?php

namespace CMS\Repositories;

use CMS\Entities\ProductEntity as Entity;

/**
 * Class ProductRepository
 * @package CMS\Repositories
 */
class ProductRepository extends BaseRepository
{

     protected $product;
    /**
     * @param Entity $Entity
     * @param Product $Product
     */
    public function __construct(Entity $Entity)
    {
        parent::__construct($Entity);

    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all()
    {
        return $this->entity->get();
    }
	
	/**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function findById($id)
    {
        return $this->entity->find($id);
    }


}