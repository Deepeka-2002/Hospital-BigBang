using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoleBasedAuthorization.Models
{
  public class Department
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public string DepName { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Img { get; set; } = string.Empty;

    public ICollection<User>? Users { get; set; }
  }
}
