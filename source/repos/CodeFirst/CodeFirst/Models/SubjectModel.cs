using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirst.Models
{
    public class SubjectModel
    {
        public int id { get; set; }

        public string name { get; set; }

        public TeacherModel teacher
        {
            get;
            set;

        }

    }
}
