package web.customers.service;

import java.util.List;

import web.core.Core;
import web.customers.entity.Customer;

public interface CustomerService {
	
	public List<Customer> getAllCustomers();
	public Core delete(Core core, Customer customer);

}
