<?php

namespace CMS\Repositories;

use CMS\Entities\StoreEntity as Entity;

/**
 * Class StoreRepository
 * @package CMS\Repositories
 */
class StoreRepository extends BaseRepository{

    /**
     * @var Store
     */
    protected $store;

    /**
     * @param Entity $Entity
     * @param Store $Store
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