using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
 
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
      private readonly IDepartment IDept;

      public DepartmentController(IDepartment IDept)
      {
        this.IDept = IDept;
      }

      // GET: api/Customers

      [HttpGet]
      public async Task<ActionResult<IEnumerable<Department>>> GetDepts()
      {
        var depts = await IDept.GetDepts();
        return Ok(depts);
      }

    [HttpGet("{name}")]
    public async Task<ActionResult<Department>> GetDepartmentByName(string name)
    {
      try
      {
        var customer = await IDept.GetDepartmentByName(name);
        return Ok(customer);
      }

      catch (ArithmeticException ex)
      {
        return NotFound(ex.Message);
      }
    }

    // PUT: api/Customers/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{name}")]
    public async Task<ActionResult<List<Department>>> UpdateDepartment(string name, Department dept)
    {

      try
      {
        var customer = await IDept.UpdateDepartment(name,dept);
        return Ok(customer);
      }
      catch (ArithmeticException ex)
      {
        return NotFound(ex.Message);
      }
    }

    // POST: api/Customers
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<List<Department>>> AddDepartment(Department dept)
    {
      var customer = await IDept.AddDepartment(dept);
      return Ok(customer);
    }

    // DELETE: api/Customers/5
  
    [HttpDelete("{name}")]
    public async Task<ActionResult<List<Department>>> DeleteDepartmentByName(string name)
    {
      try
      {
        var customer = await IDept.DeleteDepartmentByName(name);
        return Ok(customer);
      }
      catch (ArithmeticException ex)
      {
        return NotFound(ex.Message);
      }
    }
  }
}
