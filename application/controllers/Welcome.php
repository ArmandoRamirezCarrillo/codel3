<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct(){
		parent:: __construct();
		$this->load->model('Almacen_model');
	}

	public function index()
	{
		$this->load->view('main');
	}
	public function producto(){
		$data['result'] = $this->Almacen_model->getAllData();
		$this->load->view('includes/header');
		$this->load->view('producto',$data);
		$this->load->view('includes/footer');
	}
	public function addNewProduct(){
		$data = array (
			'nombre' => $this->input->post('nombre'),
			'Caracteristicas' => $this->input->post('Caracteristicas'),
			'Cantidad' => $this->input->post('Cantidad')
		);
		$resultData = $this->Almacen_model->addNew($data);
		$this->output->set_output(json_encode($resultData));
	}
	public function info(){
		$this->load->view('includes/header');
		$this->load->view('info');
		$this->load->view('includes/footer');
	}

}
