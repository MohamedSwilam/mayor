<?php

namespace App\Transformers;

use App\Feedback;
use League\Fractal\TransformerAbstract;

class FeedbackTransfromer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Feedback $feedback)
    {
        $data = $feedback->toArray();
        $data['image'] = $data['image']? config('paths.feedback.get').$data['image']:null;
        return $data;
    }
}
