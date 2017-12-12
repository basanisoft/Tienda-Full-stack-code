<?php

namespace CMS\Validators;

use CMS\Entities\ProductEntity as Entity;

/**
 * Class ProductValidator
 * @package CMS\Validators
 */
class ProductValidator extends BaseValidator
{

    /**
     * @var array
     */
    protected $rules = array(
        'name' => 'required',
        'price' => 'required',
        'description' => 'required',
        'image' => 'required',

    );

    /**
     * @param Entity $Entity
     */
    public function __construct(Entity $Entity)
    {
        return parent::__construct($Entity);
    }


    /**
     * @return Rules
     */
    public function getUpdateRules()
    {
        $rules = $this->getRules();
        return $rules;
    }

}