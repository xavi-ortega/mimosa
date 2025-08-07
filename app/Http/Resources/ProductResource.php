<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Lunar\Models\Product;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /** @var Product $this */

        return [
            'id' => $this->id,
            'slug' => $this->defaultUrl?->slug,
            'name' => $this->attribute_data->get('name'),
            'description' => $this->attribute_data->get('description'),
            'thumbnail' => $this->getThumbnailImage(),
            'base_price' => [
                'raw' => $this->variant?->basePrice?->value,
                'formatted' => $this->variant?->basePrice?->formatted,
            ],
        ];
    }
}
