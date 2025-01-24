const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      available: 50,
      price: 99.99,
      category: "Electronics",
      image: "https://via.placeholder.com/150",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Smartphone",
      available: 30,
      price: 699.99,
      category: "Electronics",
      image: "https://via.placeholder.com/150",
      description: "Latest smartphone with cutting-edge features.",
    },
    {
      id: 3,
      name: "Laptop",
      available: 20,
      price: 1099.99,
      category: "Computers",
      image: "https://via.placeholder.com/150",
      description: "Lightweight and powerful laptop for all your needs.",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      available: 100,
      price: 49.99,
      category: "Accessories",
      image: "https://via.placeholder.com/150",
      description: "Ergonomic gaming mouse with customizable buttons.",
    },
    {
      id: 5,
      name: "Fitness Tracker",
      available: 40,
      price: 129.99,
      category: "Wearables",
      image: "https://via.placeholder.com/150",
      description: "Track your fitness goals and monitor your health.",
    },
    {
        id: 6,  
        name: "Smartwatch",
        available: 25,
        price: 199.99,
        category: "Wearables",
        image: "https://via.placeholder.com/150",
        description: "Smartwatch with a variety of features to make your life easier"
        
    },
    {
        id: 7,
        name: "Tablet",
        available: 15,
        price: 299.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "Portable tablet for work and entertainment on the go."
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        available: 35,
        price: 79.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless speaker with great sound quality and long battery life."
    },
    {
        id: 9,
        name: "External Hard Drive",
        available: 60,
        price: 129.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "Expand your storage with this high-capacity external hard drive."
    },
    {
        id: 10,
        name: "Portable Charger",
        available: 45,
        price: 29.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Keep your devices charged on the go with this portable charger."
    },
    {
        id: 11,
        name: "Wireless Keyboard",
        available: 55,
        price: 69.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Wireless keyboard for comfortable typing and convenience."
    },
    {
        id: 12,
        name: "Camera",
        available: 10,
        price: 499.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Capture your memories with this high-quality camera."
    },
    {
        id: 13,
        name: "Monitor",
        available: 20,
        price: 199.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "Large monitor for immersive gaming and productivity."
    },
    {
        id: 14,
        name: "Printer",
        available: 5,
        price: 149.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "Print documents and photos with this reliable printer."
    },
    {
        id: 15,
        name: "Desk Lamp",
        available: 30,
        price: 19.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Adjustable desk lamp for studying or working late."
    },
    {
        id: 16,
        name: "Backpack",
        available: 40,
        price: 39.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Stylish backpack to carry your essentials in comfort."
    },
    {
        id: 17,
        name: "Headphones",
        available: 50,
        price: 49.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wired headphones with great sound quality and comfort."
    },
    {
        id: 18,
        name: "Mouse Pad",
        available: 100,
        price: 9.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Large mouse pad for smooth and precise mouse movement."
    },
    {
        id: 19,
        name: "Keyboard",
        available: 40,
        price: 79.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "Mechanical keyboard for a tactile typing experience."
    },
    {
        id: 20,
        name: "Webcam",
        available: 15,
        price: 59.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "High-definition webcam for video calls and streaming."
    },
    {
        id: 21,
        name: "Smart Bulb",
        available: 25,
        price: 19.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart bulb that can be controlled remotely via app."
    },
    {
        id: 22,
        name: "Power Strip",
        available: 30,
        price: 29.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Power strip with surge protection and multiple outlets."
    },
    {
        id: 23,
        name: "Wireless Mouse",
        available: 50,
        price: 29.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Wireless mouse with ergonomic design for comfortable use."
    },
    {
        id: 24,
        name: "Smart Speaker",
        available: 20,
        price: 99.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Smart speaker with voice assistant for hands-free control."
    },
    {
        id: 25,
        name: "External SSD",
        available: 10,
        price: 199.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "High-speed external SSD for faster data transfer and storage."
    },
    {
        id: 26,
        name: "Wireless Earbuds",
        available: 30,
        price: 79.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "True wireless earbuds with long battery life and clear sound."
    },
    {
        id: 27,
        name: "Smart Thermostat",
        available: 15,
        price: 129.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart thermostat for energy savings and remote temperature control."
    },
    {
        id: 28,
        name: "Wireless Charger",
        available: 25,
        price: 39.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Wireless charger for convenient charging of compatible devices."
    },
    {
        id: 29,
        name: "Bluetooth Earphones",
        available: 40,
        price: 59.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Bluetooth earphones with noise cancellation and sweat resistance."
    },
    {
        id: 30,
        name: "Smart Lock",
        available: 10,
        price: 149.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart lock for keyless entry and remote access control."
    },
    {
        id: 31,
        name: "Wireless Security Camera",
        available: 20,
        price: 79.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Wireless security camera for home monitoring and surveillance."
    },
    {
        id: 32,
        name: "USB-C Hub",
        available: 30,
        price: 49.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "USB-C hub with multiple ports for connecting various devices."
    },
    {
        id: 33,
        name: "Wireless Router",
        available: 15,
        price: 99.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "High-speed wireless router for fast and reliable internet connection."
    },
    {
        id: 34,
        name: "Smart Scale",
        available: 25,
        price: 49.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart scale for tracking weight and body composition with app."
    },
    {
        id: 35,
        name: "Wireless Keyboard and Mouse Combo",
        available: 20,
        price: 59.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Wireless keyboard and mouse combo for clutter-free workspace."
    },
    {
        id: 36,
        name: "Smart Plug",
        available: 30,
        price: 19.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart plug for controlling devices remotely and monitoring energy usage."
    },
    {
        id: 37,
        name: "Wireless Access Point",
        available: 10,
        price: 79.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless access point for extending Wi-Fi coverage in your home or office."
    },
    {
        id: 38,
        name: "USB Flash Drive",
        available: 50,
        price: 14.99,
        category: "Computers",
        image: "https://via.placeholder.com/150",
        description: "Portable USB flash drive for storing and transferring files."
    },
    {
        id: 39,
        name: "Wireless Range Extender",
        available: 15,
        price: 49.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless range extender for expanding Wi-Fi coverage in your home."
    },
    {
        id: 40,
        name: "Smart Doorbell",
        available: 5,
        price: 199.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart doorbell with camera and intercom for home security."
    },
    {
        id: 41,
        name: "Wireless Gaming Headset",
        available: 10,
        price: 149.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless gaming headset with surround sound and noise cancellation."
    },
    {
        id: 42,
        name: "Smart Alarm Clock",
        available: 20,
        price: 29.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart alarm clock with voice control and customizable alarms."
    },
    {
        id: 43,
        name: "Wireless Barcode Scanner",
        available: 30,
        price: 79.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless barcode scanner for retail and inventory management."
    },
    {
        id: 44,
        name: "Smart Garden",
        available: 5,
        price: 99.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart garden for growing herbs and vegetables indoors."
    },
    {
        id: 45,
        name: "Wireless Presenter",
        available: 20,
        price: 39.99,
        category: "Accessories",
        image: "https://via.placeholder.com/150",
        description: "Wireless presenter for professional presentations and lectures."
    },
    {
        id: 46,
        name: "Smart Mirror",
        available: 10,
        price: 199.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart mirror with built-in display for weather, news, and more."
    },
    {
        id: 47,
        name: "Wireless Barcode Printer",
        available: 15,
        price: 199.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless barcode printer for printing labels and tags wirelessly."
    },
    {
        id: 48,
        name: "Smart Picture Frame",
        available: 25,
        price: 79.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart picture frame for displaying photos and videos from your phone."
    },
    {
        id: 49,
        name: "Wireless Barcode Reader",
        available: 30,
        price: 99.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless barcode reader for scanning barcodes and QR codes."
    },
    {
        id: 50,
        name: "Smart Pet Feeder",
        available: 10,
        price: 149.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart pet feeder for feeding your pets on a schedule or remotely."
    },
    {
        id: 51,
        name: "Wireless Barcode System",
        available: 5,
        price: 499.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless barcode system for inventory and asset tracking."
    },
    {
        id: 52,
        name: "Smart Plant Pot",
        available: 20,
        price: 49.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart plant pot for monitoring and watering your plants automatically."
    },
    {
        id: 53,
        name: "Wireless Barcode Terminal",
        available: 10,
        price: 299.99,
        category: "Electronics",
        image: "https://via.placeholder.com/150",
        description: "Wireless barcode terminal for retail and warehouse management."
    },
    {
        id: 54,
        name: "Smart Water Bottle",
        available: 15,
        price: 29.99,
        category: "Home",
        image: "https://via.placeholder.com/150",
        description: "Smart water bottle that reminds you to stay hydrated throughout the day."
    }
    
  ];

  
  // Function to reduce the available stock of a product

  function reduceAvailable(productId, quantity) {
    const product = products.find((p) => p.id === productId);
    if (!product) {
      console.log(`Product with ID ${productId} not found.`);
      return;
    }
  
    if (product.available >= quantity) {
      product.available -= quantity;
      console.log(`Reduced ${quantity} from ${product.name}. Remaining stock: ${product.available}`);
    } else {
      console.log(`Not enough stock for ${product.name}. Only ${product.available} available.`);
    }
  }
  

  export default products;
  