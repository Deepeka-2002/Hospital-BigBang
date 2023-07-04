using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
  public interface IAppointment
  {
    Task<List<Appointment>> GetAppointments();
    // Task<Appointment>? GetAppointmentById(int id);
    IEnumerable<Appointment> FilterAppointment(int id);
    Task<List<Appointment>> AddAppointment(Appointment apps);

    Task<List<Appointment>?> UpdateAppointmentById(int id, Appointment apps);
    Task<List<Appointment>?> DeleteAppointmentById(int id);
  }
}
