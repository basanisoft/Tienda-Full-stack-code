<?php

namespace CMS\Validators;

use CMS\Entities\OrderEntity as Entity;

/**
 * Class OrderValidator
 * @package CMS\Validators
 */
class OrderValidator extends BaseValidator {

    /**
     * @var array
     */
    protected $rules = array(
        'store_id' => 'required',
        'material_id' => '',
		'quantity' => '',
		'order_state' => '',
    );

    /**
     * @param Entity $Entity
     */
    public function __construct(Entity $Entity)
    {
        return parent::__construct($Entity);
    }

}