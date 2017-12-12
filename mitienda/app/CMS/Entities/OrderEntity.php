<?php

namespace CMS\Entities;

use Illuminate\Database\Eloquent\Collection;

class OrderEntity extends BaseEntity
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'orders';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'store_id', 'material_id', 'quantity', 'order_state'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */

	
	public function product()
    {
        return $this->belongsTo(ProductEntity::class, 'material_id');
    }
	
	public function store()
    {
        return $this->belongsTo(StoreEntity::class, 'store_id');
    }

}