using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirst.Models
{
    public class RoomModel
    {
        public int id { get; set; }

        [Required]
        public Boolean Empty { get; set; }

        public int FloorNumber { get; set; }

        public int StudentModelid
        {
            get;
            set;
        }

        public StudentModel Student
        {
            get;
            set;
        }
    }
}
