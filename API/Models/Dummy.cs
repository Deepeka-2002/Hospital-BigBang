using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoleBasedAuthorization.Models
{
  public class Dummy
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string? Email { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public bool AvailableStatus { get; set; }


    /*[Column(TypeName = "Date")]*/
    /*public DateTime DateOfBirth { get; set; }*/
    public string Gender { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;

    public string PasswordClear { get; set; } = string.Empty;

    public string DepName { get; set; }
  }
}
