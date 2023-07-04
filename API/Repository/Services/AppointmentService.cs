using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;

namespace RoleBasedAuthorization.Repository.Services
{
  public class AppointmentService : IAppointment
  {

    public RoleBasedAuthorizationDbContext _Context;
    public AppointmentService(RoleBasedAuthorizationDbContext Context)
    {
      _Context = Context;
    }


    public async Task<List<Appointment>> GetAppointments()
    {
      var apps = await _Context.appointment.ToListAsync();
      return apps;
    }

    //public async Task<Appointment?> GetAppointmentById(int id)
    //{
    //  var apps = await _Context.appointment.FindAsync(id);
    //  if (apps is null)
    //  {
    //    throw new ArithmeticException("Invalid  id");
    //  }
    //  return apps;
    //}

    public IEnumerable<Appointment> FilterAppointment(int id)
    {
      List<Appointment> Appointments = _Context.appointment.Where(x => x.Id == id).ToList();
      return Appointments;
    }

    //public async Task<int> GetUserIdByEmail(string email)
    //{
    //  var customer = await _Context.Users.FirstOrDefaultAsync(c => c.Email == email);
    //  return customer?.Id ?? 0;
    //}

    public async Task<List<Appointment>> AddAppointment(Appointment apps)
    {
      
      _Context.appointment.Add(apps);
      await _Context.SaveChangesAsync();
      return await _Context.appointment.ToListAsync();
    }

    public async Task<List<Appointment>?> UpdateAppointmentById(int id, Appointment apps)
    {
      var customer = await _Context.appointment.FindAsync(id);
      if (customer is null)
      {
        throw new ArithmeticException("Invalid  id to update details");
      }
      customer.userEmail = apps.userEmail;
      customer.PatientName = apps.PatientName;
      customer.Age = apps.Age;
      customer.Gender = apps.Gender;
      customer.DiseaseDescription = apps.DiseaseDescription;
      customer.AppointmentSchedule = apps.AppointmentSchedule;
      await _Context.SaveChangesAsync();
      return await _Context.appointment.ToListAsync();
    }

    public async Task<List<Appointment>?> DeleteAppointmentById(int id)
    {
      var customer = await _Context.appointment.FindAsync(id);
      if (customer is null)
      {
        throw new ArithmeticException("Invalid  id to delete");

      }
      _Context.Remove(customer);
      await _Context.SaveChangesAsync();
      return await _Context.appointment.ToListAsync();
    }
  }
}
