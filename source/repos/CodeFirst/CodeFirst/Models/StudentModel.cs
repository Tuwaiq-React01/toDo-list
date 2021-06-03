using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirst.Models
{
    public class StudentModel
    {
        public int id { get; set; }

        public string fn { get; set; }

        public string ln { get; set; }


        public string email { get; set; }


        //Navigation properties
        public RoomModel Room
        {
            get;
            set;
        }
        [NotMapped]
        public List<StudentTeacherModel> StudentsTeachers { get; set; }
    }
}
