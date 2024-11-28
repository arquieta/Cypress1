import productos from '../fixtures/productos.json';
import HomePage from '../ApexPom/homePage';
import ProductListPage from '../ApexPom/productListPage';
import ProductDetails from '../ApexPom/productDetails';

const homePage = new HomePage();
const productListPage = new ProductListPage();
const productDetails = new ProductDetails();

describe('Apex Liverpool', () => {
	beforeEach(() => {
		// Visitar la página principal
		homePage.visit();
});
	it('Buscar Ps5 en Liverpool y validar titulo y precio al menos', () => {
	  const producto = productos.productos[0];

	  // Buscar producto
	  homePage.searchProduct('playstation');
  
	  // Validar lista de productos
	  productListPage.validateProductListContains('Consola PS5');
	  productListPage.validateProductListContains('para PS5');
  
	  // Seleccionar producto por ID y validar detalles
	  productListPage
		.selectProductById(producto['ID del producto'])
		.within(() => {
		  productDetails.validateProductDetails(producto);
		})
		.find('a') // Seleccionar enlace
		.click(); // Hacer clic en el producto
		const validationData = {
			'Nombre del producto': producto['Nombre del producto'],
			'Precio original': producto['Precio original'],
			'Precio con descuento': producto['Precio con descuento'],
			'URL de la imagen': producto['URL de la imagen'],
			'URL del producto': producto['URL del producto'],
		  };
	  
		  // Mostrar la información de validación en consola
		  cy.log('Validando producto con los siguientes datos:', validationData);
	});


	it('Buscar smart tv en Liverpool y validar filtros de Tamaño y precio al menos', () => {
		const producto = productos.productos[0];
		let tvSize = '55 pulgadas';
		let precio = '10000'
		let marca = 'TCL'
		let cantidadProductos = "2 Productos"
		// Buscar producto
		homePage.searchProduct('smart tv');
		// Validar fltro de Tamaño
		productListPage.validateFilterSize();
		// Validar fltro de Precio
		productListPage.validateFilterPrice();

		// Validar y hacer clic en la opción de tamaño "55 pulgadas"
		productListPage.validateAndClickSize(tvSize)
		productListPage.validateAndClickPrice(precio)
		productListPage.validateAndClickBrand(marca)

		productListPage.validateFiltersApplied(tvSize, precio, marca)
	
		productListPage.validateAmountOfResults(cantidadProductos)
	  });

	  it('Filtra perfumes de hombre por marca Dior', () => {
		const producto = productos.productos[0];
		let marca = "DIOR"
		let cantidadProductos = "15 Productos"
	
    	homePage.validateAndClickCategorias() 
		homePage.displayCategory('Belleza');
		homePage.clickSubmenuOption('Perfumes Hombre')
		productListPage.validateAndClickBrand(marca)
		productListPage.validateAmountOfResults(cantidadProductos)
		
	  });
  });