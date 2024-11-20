using System.ComponentModel.DataAnnotations;

namespace MyWebAPI.Entities
{
    public class Laptop
    {
        public int Id { get; set; }
        [Required]
        public required string Name { get; set; }
    }
}
