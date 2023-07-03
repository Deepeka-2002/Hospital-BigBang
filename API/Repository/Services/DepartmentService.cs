using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
  public class DepartmentService : IDepartment
  {
    public RoleBasedAuthorizationDbContext _Context;
    public DepartmentService(RoleBasedAuthorizationDbContext Context)
    {
      _Context = Context;
    }

    public async Task<List<Department>> GetDepts()
    {
      var depts = await _Context.department.ToListAsync();
      return depts;
    }

    public async Task<Department?> GetDepartmentByName(string name)
    {
      var customer = await _Context.department.FindAsync(name);
      if (customer is null)
      {
        throw new ArithmeticException("Invalid Department name");
      }
      return customer;
    }

    public async Task<List<Department>> AddDepartment(Department dept)
    {
      _Context.department.Add(dept);
      await _Context.SaveChangesAsync();
      return await _Context.department.ToListAsync();
    }

    public async Task<List<Department>?> UpdateDepartment(string name, Department dept)
    {
      var customer = await _Context.department.FindAsync(name);
      if (customer is null)
      {
        throw new ArithmeticException("Invalid department to update details");
      }
     
      customer.Description = dept.Description;
      customer.Img = dept.Img;
    
      await _Context.SaveChangesAsync();
      return await _Context.department.ToListAsync();
    }

    public async Task<List<Department>?> DeleteDepartmentByName(string name)
    {
      var customer = await _Context.department.FindAsync(name);
      if (customer is null)
      {
        throw new ArithmeticException("Invalid name to delete");

      }
      _Context.Remove(customer);
      await _Context.SaveChangesAsync();
      return await _Context.department.ToListAsync();
    }
  }
}
