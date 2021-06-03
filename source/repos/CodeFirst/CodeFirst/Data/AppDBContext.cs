using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CodeFirst.Models;
using Microsoft.AspNetCore.Identity;
namespace CodeFirst.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
        {

        }

/*        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RoomModel>()
                .Property(r => r.FloorNumber)
                .HasMaxLength(20);

            modelBuilder.Entity<StudentModel>().HasData(new StudentModel
            {
                id=1,
                fn = "Reema",
                ln = "Alyousef",
                email = "reema@gmail.com"
            });

            modelBuilder.Entity<StudentModel>().HasData(new StudentModel
            {
                id=2,
                fn = "Hala",
                ln = "Alyousef",
                email = "hala@gmail.com"
            });

            modelBuilder.Entity<StudentModel>().HasData(new StudentModel
            {
                id = 3,
                fn = "Wedad",
                ln = "Alzamil",
                email = "waz@gmail.com"
            }); ;

        }*/



        public DbSet<StudentModel> Students { get; set; }
        public DbSet<RoomModel> Rooms { get; set; }
        public DbSet<SubjectModel> Subjects { get; set; }
        public DbSet<TeacherModel> Teachers { get; set; }

        public DbSet<StudentTeacherModel> StudentsTeachers { get; set; }
    }

    
}
