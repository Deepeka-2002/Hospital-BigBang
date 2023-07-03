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

    [HttpGet("{email}")]
    public IActionResult GetUserIdByEmail(string email)
    {
      int userId = IUse.GetUserIdByEmail(email);

      if (userId != 0)
      {
        return Ok(userId);
      }

      return NotFound("User not found.");
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
