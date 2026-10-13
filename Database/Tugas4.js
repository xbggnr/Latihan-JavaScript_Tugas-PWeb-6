const databaseProduk = [
    "Desktop", "Laptop", "Smartphone"
];

const databaseMerk = [
    "Acer", "Lenovo", "Asus", "Apple", "Xiaomi", "Huawei", "Samsung", "OPPO", "Realme", "Redmi", "Motorola", "POCO", "Colorful", "MSI", "Alienware", "Razor"
];

document.getElementById('list-produk').innerHTML = `<option value="">Pilih Jenis Produk</option>` + databaseProduk.map(produk => `<option value="${produk}">${produk}</option>`).join('');
document.getElementById('list-merk').innerHTML = `<option value="">Pilih Merk</option>` + databaseMerk.map(merk => `<option value="${merk}">${merk}</option>`).join('');