<?php

namespace CMS\Entities;

use Illuminate\Database\Eloquent\Collection;

class ProductEntity extends BaseEntity
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'material';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'name', 'price', 'description', 'image'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
	 
	protected $appends = ['full_image'];
    
	public function orders()
    {
        return $this->belongsTo(OrderEntity::class, 'material_id');
    }
	
    public function getFullImageAttribute()
    {
        if(!$this->image)
        {
            return false;
        }

        return url('/').'/cms/products_images/'.$this->image;
    }


}