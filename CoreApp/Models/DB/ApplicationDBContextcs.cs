using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Models
{
    public class ApplicationDBContextcs : DbContext
    {
        public ApplicationDBContextcs(DbContextOptions<ApplicationDBContextcs> options)
            : base(options)
        {

        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Departement>().HasData(new Departement{ Name="Finance"});
        //}
        public DbSet<Departement> departements { get; set; }
        public DbSet<Employees> Employees { get; set; }
       

    }
}
