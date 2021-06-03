﻿// <auto-generated />
using CodeFirst.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CodeFirst.Migrations
{
    [DbContext(typeof(AppDBContext))]
    [Migration("20210601075108_addedData")]
    partial class addedData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("CodeFirst.Models.RoomModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<bool>("Empty")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("FloorNumber")
                        .HasColumnType("int")
                        .HasMaxLength(20);

                    b.HasKey("id");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("CodeFirst.Models.StudentModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.Property<string>("fn")
                        .HasColumnType("text");

                    b.Property<string>("ln")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Students");

                    b.HasData(
                        new
                        {
                            id = 1,
                            email = "reema@gmail.com",
                            fn = "Reema",
                            ln = "Alyousef"
                        },
                        new
                        {
                            id = 2,
                            email = "hala@gmail.com",
                            fn = "Hala",
                            ln = "Alyousef"
                        },
                        new
                        {
                            id = 3,
                            email = "waz@gmail.com",
                            fn = "Wedad",
                            ln = "Alzamil"
                        });
                });

            modelBuilder.Entity("CodeFirst.Models.TeacherModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.Property<string>("fullname")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Teachers");
                });
#pragma warning restore 612, 618
        }
    }
}
