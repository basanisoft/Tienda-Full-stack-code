<?php

namespace CMS\Validators;

use CMS\Entities\StoreEntity as Entity;

/**
 * Class StoreValidator
 * @package CMS\Validators
 */
class StoreValidator extends BaseValidator {

    /**
     * @var array
     */
    protected $rules = array(
        'store_name' => 'required',
        'description' => '',
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