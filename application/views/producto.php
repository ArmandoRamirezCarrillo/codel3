<div class="container">
	<h1 class="titleProducto">Lista de productos</h1>
	<table class="infoAlmacenProductos">
		<thead>
			<tr>
				<th>#</th>
				<th>Nombre</th>
				<th>Caracteristicas</th>
				<th>Cantidad</th>
				<th>Actualizar</th>
				<th>Eliminar</th>
			</tr>
		</thead>
		<tbody>
			<?php foreach($result as $row){ ?>
			<tr>
				<td scope="row" id="idProductoTbl"><?php echo $row->idInventario; ?></td>
				<td id="nombreProductoTbl"><?php echo $row->nombre; ?></td>
				<td id="caracteristicasProductoTbl"><?php echo $row->Caracteristicas; ?></td>
				<td id="cantidadProductoTbl"><?php echo $row->Cantidad; ?></td>
				<td><button id="<?php echo "actualizar-".$row->idInventario; ?>" class="actualizarBtn" onclick="actualizarProducto(this)">Actualizar</button></td>
				<td><button id="<?php echo "borrar-".$row->idInventario; ?>" class="borrarBtn">Borrar</button></td>
			</tr>
			<?php } ?>
		</tbody>
	</table>
</div>
<div id="addNewStockDiv" class="container addNewStock">
	<button type="button" id="nuevoProducto">
		<span>Agregar nuevo producto</span>
	</button>
</div>
<div id="newStockDiv" class="container newStock newStockDiable">
	<h3 id="txtNewTitle">Nuevo producto</h3>
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
