using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace RoleBasedAuthorization.Models
{
    public class User
    {
        [Key]
       
        public int Id { get; set; }
        public string? Email { get; set; } 
        public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    public bool AvailableStatus { get; set; }
        

        /*[Column(TypeName = "Date")]*/
        /*public DateTime DateOfBirth { get; set; }*/
        public string Gender { get; set; } = string.Empty;
        public string Role { get; set; }=string.Empty;
        public byte[]? Password { get; set; }
        public byte[]? HashKey { get; set; }

    public string DepName { get; set; }
    public Department? department { get; set; }

    public ICollection<Appointment>? appointment { get; set; }


  }
}
