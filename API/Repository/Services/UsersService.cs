using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
  public class UsersService : IUsers
  {

    public RoleBasedAuthorizationDbContext _Context;
    public UsersService(RoleBasedAuthorizationDbContext Context)
    {
      _Context = Context;
    }
    
      //GetAllUsers
      public IEnumerable<User> GetAllUsers()
      {
        return _Context.Users.ToList();
      }
      //GetUserById
      //public User GetUserById(int User_Id)
      //{
      //  return _Context.Users.FirstOrDefault(x => x.Id == User_Id);
      //}

     

    public async Task<List<User>?> UpdateUser(int id, User user)
    {
      var customer = await _Context.Users.FindAsync(id);
      if (customer is null)
      {
        throw new ArithmeticException("Invalid  to update details");
      }

      customer.FirstName = user.FirstName;
      customer.LastName = user.LastName;
      customer.Email = user.Email;
      customer.DepName = user.DepName;
      customer.AvailableStatus = user.AvailableStatus;
      


      await _Context.SaveChangesAsync();
      return await _Context.Users.ToListAsync();
    }

    public IEnumerable<User> FilterDoctors()
    {
      List<User> users = _Context.Users.Where(x => x.Role == "Doctor").ToList();
      return users;
    }

    public IEnumerable<User> FilterUsers()
    {
      List<User> users = _Context.Users.Where(x => x.Role == "User").ToList();
      return users;
    }

    //public IEnumerable<User> FilterAppointment(int id)
    //{
    //  List<User> users = _Context.Users.Where(x => x.Id == id).ToList();
    //  return users;
    //}
    public IEnumerable<User> FilterSpecialisation(string dept)
    {
      List<User> users = _Context.Users.Where(x => x.DepName == dept).ToList();
      return users;
    }

   
    //public async Task<User> CreateDoctor([FromForm] User doctor, IFormFile imageFile)
    //{
    //  if (imageFile == null || imageFile.Length == 0)
    //  {
    //    throw new ArgumentException("Invalid file");
    //  }

    //  var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Uploads/Doctor");
    //  var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
    //  var filePath = Path.Combine(uploadsFolder, fileName);

    //  using (var stream = new FileStream(filePath, FileMode.Create))
    //  {
    //    await imageFile.CopyToAsync(stream);
    //  }

    //  doctor.Image = fileName;

    //  _UserContext.Users.Add(doctor);
    //  await _UserContext.SaveChangesAsync();

    //  return doctor;
    //}
    ////PostUser
    //public async Task<List<User>> AddUser(User user)
    //{
    //    _UserContext.Users.Add(user);
    //    await _UserContext.SaveChangesAsync();

    //    return await _UserContext.Users.ToListAsync();
    //}

    //Delete


    public IEnumerable<User> FilterDoctorAppointment(string email)
    {
      List<User> users = _Context.Users.Where(x => x.Email== email).ToList();
      return users;

    }
    public async Task<List<User>?> DeleteUserById(int id)
      {
        var users = await _Context.Users.FindAsync(id);
        if (users is null)
        {
          return null;
        }
        _Context.Remove(users);
        await _Context.SaveChangesAsync();
        return await _Context.Users.ToListAsync();
      }
    }

}
