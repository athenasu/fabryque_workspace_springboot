package web.customers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import web.core.Core;
import web.customers.entity.Customer;
import web.customers.service.CustomerService;

@RestController
@RequestMapping("customer")
public class CustomerController {

	@Autowired
	private CustomerService service;

	@GetMapping("customers")
	public List<Customer> getAllCustomers() {
		List<Customer> customers = service.getAllCustomers();
		return customers;
	}

	@DeleteMapping("deleteCustomers")
	public Core delete(@RequestBody Customer customer, Core core) {
		return service.delete(core, customer);
	}
}


