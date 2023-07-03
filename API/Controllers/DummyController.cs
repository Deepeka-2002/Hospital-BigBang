using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Controllers
{
 
    [Route("api/[controller]")]
    [ApiController]
    public class DummyController : ControllerBase
    {
      private readonly IDummy IDum;

      public DummyController(IDummy IDum)
      {
        this.IDum = IDum;
      }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Dummy>>> GetDoctors()
    {
      var doc= await IDum.GetDoctors();
      return Ok(doc);
    }


    [HttpPost]
    public async Task<ActionResult<List<Dummy>>> AddDoctor(Dummy doc)
    {
      var Doc = await IDum.AddDoctor(doc);
      return Ok(Doc);
    }


    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Dummy>>> DeleteCustomerById(int id)
    {
      try
      {
        var Doc = await IDum.DeleteDoctorById(id);
        return Ok(Doc);
      }
      catch (ArithmeticException ex)
      {
        return NotFound(ex.Message);
      }
    }
  }
}
