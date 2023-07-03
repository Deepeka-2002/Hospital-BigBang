using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
  public class DummyService : IDummy
  {
    public RoleBasedAuthorizationDbContext _Context;
    public DummyService(RoleBasedAuthorizationDbContext Context)
    {
      _Context = Context;
    }

    public async Task<List<Dummy>> GetDoctors()
    {
      var doc = await _Context.dummy.ToListAsync();
      return doc;
    }
    public async Task<List<Dummy>> AddDoctor(Dummy doc)
    {
      _Context.dummy.Add(doc);
      await _Context.SaveChangesAsync();
      return await _Context.dummy.ToListAsync();
    }

    public async Task<List<Dummy>?> DeleteDoctorById(int id)
    {
      var doc = await _Context.dummy.FindAsync(id);
      if (doc is null)
      {
        throw new ArithmeticException("Invalid  id to delete");

      }
      _Context.Remove(doc);
      await _Context.SaveChangesAsync();
      return await _Context.dummy.ToListAsync();
    }
  }
}
