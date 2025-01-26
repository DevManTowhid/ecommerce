<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$products = [
    [
        'id' => 1,
        'name' => 'Premium Gaming Laptop',
        'image' => 'https://source.unsplash.com/random/600x400/?gaming-laptop',
        'price' => 1499.99,
        'available_number' => 15,
        'category' => ['Laptops', 'Gaming']
    ],
    [
        'id' => 2,
        'name' => 'Wireless Bluetooth Headphones',
        'image' => 'https://source.unsplash.com/random/600x400/?headphones',
        'price' => 199.99,
        'available_number' => 30,
        'category' => ['Audio', 'Accessories']
    ],
    [
        'id' => 3,
        'name' => '4K Smart TV 55"',
        'image' => 'https://source.unsplash.com/random/600x400/?smart-tv',
        'price' => 799.99,
        'available_number' => 8,
        'category' => ['Televisions', 'Home Entertainment']
    ],
    [
        'id' => 4,
        'name' => 'DSLR Camera Kit',
        'image' => 'https://source.unsplash.com/random/600x400/?dslr-camera',
        'price' => 1299.99,
        'available_number' => 12,
        'category' => ['Cameras', 'Photography']
    ],
    [
        'id' => 5,
        'name' => 'Smartphone Pro X',
        'image' => 'https://source.unsplash.com/random/600x400/?smartphone',
        'price' => 899.99,
        'available_number' => 25,
        'category' => ['Mobile Phones', 'Electronics']
    ]
];

echo json_encode($products);
?>