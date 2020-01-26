using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreApp.Models
{
    public class Departement
    {
        public int ID { get; set; }
        public string Name { get; set; }  
        public ICollection<Employees> employees { get; set; }
    }
}
