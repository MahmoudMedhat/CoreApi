using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Models
{
    

    public class Employees
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public DateTime ExpireDate { get; set; }
        public string gender { get; set; }
        public Nullable <int> Dep_ID { get; set; }
        [ForeignKey("Dep_ID")]
        public Departement Dep { get; set; }

    }
}
