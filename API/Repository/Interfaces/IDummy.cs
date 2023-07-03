using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
  public interface IDummy
  {
    Task<List<Dummy>> GetDoctors();
    Task<List<Dummy>> AddDoctor(Dummy doc);
    Task<List<Dummy>?> DeleteDoctorById(int id);

  }
}
