using Microsoft.EntityFrameworkCore;
using MyWebAPI.Entities;

namespace MyWebAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Laptop> Laptops { get; set; }
    }
}
