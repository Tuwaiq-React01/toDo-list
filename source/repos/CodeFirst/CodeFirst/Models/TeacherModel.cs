using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirst.Models
{
    public class TeacherModel
    {
        public int id { get; set; }

        public string fullname { get; set; }

        public string email { get; set; }

        public List<SubjectModel> SubjectModels
        {
            get;
            set;
        }
        [NotMapped]
        public List<StudentTeacherModel> StudentsTeachers { get; set; }
    }
}
