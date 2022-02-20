package web.customers.dao;

import java.util.List;

import web.customers.entity.Customer;

public interface CustomerDAO {
	
	public List<Customer> getAllCustomers();
	public boolean delete(Customer customer);

}
