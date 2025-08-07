<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Lunar\Admin\Support\Facades\LunarPanel;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        LunarPanel::panel(fn ($panel) => $panel->path('admin')->brandName('Lunar')
            ->brandLogo('lunar-logo.svg')
            ->darkModeBrandLogo('lunar-logo-dark.svg')
            ->favicon('lunar-icon.png')
            ->brandLogoHeight('2rem'))->register();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
    }
}
