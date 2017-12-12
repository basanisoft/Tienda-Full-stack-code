<?php

namespace CMS\Repositories;

use CMS\Entities\OrderEntity as Entity;
use CMS\Entities\StoreEntity as Store;
use CMS\Entities\ProductEntity as Product;

/**
 * Class OrderRepository
 * @package CMS\Repositories
 */
class OrderRepository extends BaseRepository{

    /**
     * @var Category
     */
    protected $order;

    /**
     * @param Entity $Entity
     * @param Order $Order
     */
    public function __construct(Entity $Entity, Store $Store, Product $Product)
    {
        parent::__construct($Entity);
		$this->store = $Store;
		$this->product = $Product;
    }
	

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all()
    {
		
		return $this->entity->with('product','store')->get();
    }


    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function findById($id)
    {
        return $this->entity->find($id);
    }


	public function getByStore($store_name)
    {

        return $this->entity->where('store_id', $store->id)->get();
    }
	
	public function getByProduct($product_name)
    {

        return $this->entity->where('material_id', $product->id)->get();
    }
}