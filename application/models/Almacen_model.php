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
		function addNew($data){
			$this->db->insert('inventario', $data);
		}
		function getIdData($data){
			$query = $this->db->query('
				SELECT inve.idInventario, inve.nombre, inve.Caracteristicas, inve.Cantidad
				FROM inventario as inve
				WHERE inve.baja = 0
				AND inve.idInventario = '.$data['idInventario'].';
			');
			if($query){
				return $query->result_array();
			}else{
				$query = array();
				return $query;
			}
		}
		function updateData($data){
			$query = $this->db->query('
				UPDATE inventario SET nombre="'.$data['nombre'].'",
				Caracteristicas="'.$data['Caracteristicas'].'",
				Cantidad='.$data['Cantidad'].',fechaUpdate=CURRENT_TIMESTAMP()
				WHERE idInventario = '.$data['idInventario'].'
				and baja = 0;
			');
			if($query){
				return true;
			}else{
				return false;
			}
		}
		function deleteData($data){
			$query = $this->db->query('
				UPDATE inventario SET baja=1,fechaBaja=CURRENT_TIMESTAMP()
				WHERE idInventario = '.$data['idInventario'].';
			');
			if($query){
				return true;
			}else{
				return false;
			}
		}
	}
