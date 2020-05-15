<?php
	defined('BASEPATH') OR exit ('No direct script access allowed');

	class Almacen_model extends CI_Model {
		public function __construct(){
			$this->load->database();
		}
		function getAllData(){
			$query = $this->db->query('
				SELECT inve.idInventario, inve.nombre, inve.Caracteristicas, inve.Cantidad
				FROM inventario as inve
				WHERE inve.baja = 0;
			');
			return $query->result();
		}
		function addNew(){
			$data = array (
				'nombre' => $this->input->post('nombre'),
				'Caracteristicas' => $this->input->post('Caracteristicas'),
				'Cantidad' => $this->input->post('Cantidad')
			);
			$this->db->insert('tbl_name', $data);
		}
	}
