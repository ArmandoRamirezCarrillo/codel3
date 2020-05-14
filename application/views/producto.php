<div class="container">
	<h1 class="titleProducto">Lista de productos</h1>
	<table class="infoAlmacenProductos">
		<tr>
			<th>#</th>
			<th>Nombre</th>
			<th>Caracteristicas</th>
			<th>Cantidad</th>
			<th>Actualizar</th>
			<th>Eliminar</th>
		</tr>
		<tr>
			<td>1</td>
			<td>phone</td>
			<td>This phone is new in the market</td>
			<td>50</td>
			<td><button id="actualizar">Actualizar</button></td>
			<td><button id="borrar">Borrar</button></td>
		</tr>
		<tr>
			<td>2</td>
			<td>phone</td>
			<td>This phone is new in the market</td>
			<td>50</td>
			<td><button id="actualizar">Actualizar</button></td>
			<td><button id="borrar">Borrar</button></td>
		</tr>
	</table>
</div>
<div class="container addNewStock">
	<button type="button" id="nuevoProducto">
		<span>Agregar nuevo producto</span>
	</button>
</div>
<div class="container newStock">
	<h3>Nuevo producto</h3>
	<form>
		<div class="row">
			<label for="nombreProducto">Nombre del producto</label>
			<input type="text" name="nombreProducto" id="nombreProducto" class="input">
		</div>
		<div class="row">
			<label for="caracteristicaProducto">Caracteristica del producto</label>
			<input type="text" name="caracteristicaProducto" id="caracteristicaProducto" class="input">
		</div>
		<div class="row">
			<label for="cantidadProducto">Cantidad del producto</label>
			<input type="number" name="cantidadProducto" id="cantidadProducto" class="input">
		</div>
		<button type="button" id="saveProducto">Registrar producto</button>
	</form>
</div>
