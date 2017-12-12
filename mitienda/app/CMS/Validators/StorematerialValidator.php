<?php

namespace CMS\Validators;

use CMS\Entities\StorematerialEntity as Entity;

/**
 * Class StoreValidator
 * @package CMS\Validators
 */
class StorematerialValidator extends BaseValidator {

    /**
     * @var array
     */
    protected $rules = array(
        'store_id' => 'required',
        'material_id' => '',
		'quantity' => '',
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