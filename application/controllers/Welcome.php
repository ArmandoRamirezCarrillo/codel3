<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	public function index()
	{
		$this->load->view('main');
	}
	public function producto(){
		$this->load->view('includes/header');
		$this->load->view('producto');
		$this->load->view('includes/footer');
	}
	public function info(){
		$this->load->view('includes/header');
		$this->load->view('info');
		$this->load->view('includes/footer');
	}
}
