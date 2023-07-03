using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
  public interface IUsers
  {
    IEnumerable<User> GetAllUsers();
    //User GetUserById(int User_Id);
    //Task<User> CreateDoctor([FromForm] User doctor, IFormFile imageFile);
    Task<List<User>?> UpdateUser(int id, User user);

    IEnumerable<User> FilterDoctors();

    public int GetUserIdByEmail(string email);
  
    Task<List<User>?> DeleteUserById(int id);

  }
}
