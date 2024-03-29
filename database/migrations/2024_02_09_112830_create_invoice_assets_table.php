<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('invoice_assets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invoice_id');
            $table->string('no_invoice');
            $table->text('produk');
            $table->text('description')->nullable();
            $table->integer('qty')->default(0);
            $table->string('unit')->default(0);
            $table->decimal('price',16,2)->default(0);
            $table->decimal('discount',16,2)->default(0);
            $table->decimal('tax',16,2)->default(0);
            $table->decimal('total',16,2)->default(0);
            $table->timestamps();
            $table->foreign('invoice_id')
            ->references('id')->on('invoices')
            ->onDelete('Cascade')->onUpdate('Cascade');
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('invoice_assets');
    }
};
