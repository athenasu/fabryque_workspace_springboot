package web.customers.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web.core.Core;
import web.customers.dao.CustomerDAO;
import web.customers.entity.Customer;
import web.customers.service.CustomerService;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerDAO dao;

	@Override
	public List<Customer> getAllCustomers() {
		return dao.getAllCustomers();
	}

	@Override
	public Core delete(Core core, Customer customer) {
		boolean result = dao.delete(customer);
		if (result) {
			core.setSuccessful(true);
			core.setMessage("Successfully deleted");
		} else {
			core.setSuccessful(false);
			core.setMessage("Unable to delete customer");
		}
		return core;
	}

}
