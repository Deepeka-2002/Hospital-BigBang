using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
  public interface IDepartment
  {
    Task<List<Department>> GetDepts();

    Task<Department>? GetDepartmentByName(string name);
    Task<List<Department>> AddDepartment(Department dept);
    Task<List<Department>?> UpdateDepartment(string name, Department dept);
    Task<List<Department>?> DeleteDepartmentByName(string name);
  }
}
