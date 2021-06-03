using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirst.Models
{
    public class StudentTeacherModel
    {
        public int StudentModelid
        {
            get;
            set;
        }

        public StudentModel Student { get; set; }

        public int TeacherModelid { get; set; }

        public StudentModel teacher { get; set; }

    }
}
