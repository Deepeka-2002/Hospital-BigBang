using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {

    private readonly IUsers IUse;
    public UsersController(IUsers IUse)
    {
      this.IUse = IUse;
    }
    [HttpGet]
    public IEnumerable<User> Get()
    {
      return IUse.GetAllUsers();
    }
    //[HttpGet("{id}")]
    //public User GetById(int id)
    //{
    //  return IUse.GetUserById(id);
    //}

    [HttpGet("FilterDoctors")]
    public IEnumerable<User> FilterDoctors()
    {

      return IUse.FilterDoctors();

    }

    [HttpGet("FilterUsers")]
    public IEnumerable<User> FilterUsers()
    {

      return IUse.FilterUsers();

    }

    //[HttpGet("FilterAppointment")]
    //public IEnumerable<User> FilterAppointment(int Id)
    //{

    //  return IUse.FilterAppointment(Id);

    //}

    [HttpGet("Filter/{dept}")]
    public IEnumerable<User> FilterSpecialisation(string dept)
    {

      return IUse.FilterSpecialisation(dept);

    }

    [HttpGet("FilterDoctorAppointment")]
    public IEnumerable<User> FilterDoctorAppointment(string email)
    {

      return IUse.FilterDoctorAppointment(email);

    }



    //[HttpPost]
    //public async Task<ActionResult<List<User>>> AddUser(User user)
    //{
    //    var users = await _user.AddUser(user);
    //    return Ok(users);
    //}
    //[HttpPost]
    //public async Task<ActionResult<User>> Post([FromForm] User doctor, IFormFile imageFile)
    //{

    //  try
    //  {
    //    var createdDoctor = await _user.CreateDoctor(doctor, imageFile);
    //    return CreatedAtAction("Get", new { id = createdDoctor.Id }, createdDoctor);

    //  }
    //  catch (ArgumentException ex)
    //  {
    //    ModelState.AddModelError("", ex.Message);
    //    return BadRequest(ModelState);
    //  }
    //}

    //[HttpPut("{id}/image")]
    //public async Task<ActionResult<User>> UpdateImage(string id, IFormFile imageFile)
    //{
    //  try
    //  {
    //    var updatedDoctor = await _user.UpdateDoctorImage(id, imageFile);
    //    return Ok(updatedDoctor);
    //  }
    //  catch (ArgumentException ex)
    //  {
    //    ModelState.AddModelError("", ex.Message);
    //    return BadRequest(ModelState);
    //  }
    //}


    [HttpPut("{id}")]
    public async Task<ActionResult<List<User>>> UpdateDoctor(int id, User use)
    {

      try
      {
        var customer = await IUse.UpdateUser(id, use);
        return Ok(customer);
      }
      catch (ArithmeticException ex)
      {
        return NotFound(ex.Message);
      }
    }

    [HttpDelete("{id}")]
      public async Task<ActionResult<List<User>>> DeleteUserById(int id)
      {
        var users = await IUse.DeleteUserById(id);
        if (users is null)
        {
          return NotFound("userid not matching");
        }
        return Ok(users);
      }
    }
}
