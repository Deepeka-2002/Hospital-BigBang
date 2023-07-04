using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AppointmentController : ControllerBase
  {

    private readonly IAppointment IApp;

    public AppointmentController(IAppointment IApp)
    {
      this.IApp = IApp;
    }

    // GET: api/Customers

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
    {
      var customers = await IApp.GetAppointments();
      return Ok(customers);
    }


    // GET: api/Customers/5
    //[HttpGet("{id}")]
    //public async Task<ActionResult<Appointment>> GetAppointmentById(int id)
    //{
    //  try
    //  {
    //    var customer = await IApp.GetAppointmentById(id);
    //    return Ok(customer);
    //  }

    //  catch (ArithmeticException ex)
    //  {
    //    return NotFound(ex.Message);
    //  }
    //}

    [HttpGet("FilterAppointment")]
    public IEnumerable<Appointment> FilterAppointment(int Id)
    {

      return IApp.FilterAppointment(Id);

    }

    // PUT: api/Customers/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<ActionResult<List<Appointment>>> UpdateAppointment(int id, Appointment apps)
    {

      try
      {
        var customer = await IApp.UpdateAppointmentById(id, apps);
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
    public async Task<ActionResult<List<Appointment>>> AddAppointment(Appointment apps)
    {
      var customer = await IApp.AddAppointment(apps);
      return Ok(customer);
    }

    // DELETE: api/Customers/5

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Appointment>>> DeleteAppointmentById(int id)
    {
      try
      {
        var customer = await IApp.DeleteAppointmentById(id);
        return Ok(customer);
      }
      catch (ArithmeticException ex)
      {
        return NotFound(ex.Message);
      }
    }
  }
}
