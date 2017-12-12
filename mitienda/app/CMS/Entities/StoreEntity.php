<?php

namespace CMS\Entities;

class StoreEntity extends BaseEntity
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'store';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'store_name', 'description'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */

    public function orders()
    {
        return $this->hasMany(OrderEntity::class , 'store_id');
    }


}