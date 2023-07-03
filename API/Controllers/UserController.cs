using JWTAuthenticationApp.Models.DTO;
using JWTAuthenticationApp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RoleBasedAuthorization.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class UserController : ControllerBase
    {
            private readonly UserService _service;
            public UserController(UserService service)
            {
                _service = service;
            }


    [HttpPost("Register")]
    public ActionResult<UserDTO> Register([FromBody] UserRegisterDTO userDTO)
    {
      var user = _service.Register(userDTO);
      if (user == null)
      {
        return BadRequest("Unable to register");
      }
      return Created("Home", user);
    }

    //[HttpPost("Register")]
    //public ActionResult<List<UserDTO>> Register([FromBody] List<UserRegisterDTO> userDTOs)
    //{
    //  List<UserDTO> registeredUsers = new List<UserDTO>();

    //  foreach (var userDTO in userDTOs)
    //  {
    //    var user = _service.Register(userDTO);
    //    if (user == null)
    //    {
    //      return BadRequest("Unable to register");
    //    }

    //    registeredUsers.Add(user);
    //  }

    //  return Created("Home", registeredUsers);
    //}

           [HttpPost("Login")]
            public ActionResult<UserDTO> Login([FromBody] UserDTO userDTO)
            {
                var user = _service.Login(userDTO);
                if (user == null)
                {
                    return BadRequest("Invalid username or password");
                }
                return Ok(user);
            }
        }
}
