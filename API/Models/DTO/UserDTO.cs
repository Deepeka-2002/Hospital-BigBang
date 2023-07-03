namespace JWTAuthenticationApp.Models.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
    }
}