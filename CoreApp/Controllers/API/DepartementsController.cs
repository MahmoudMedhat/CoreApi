using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreApp.Models;

namespace CoreApp.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartementsController : ControllerBase
    {
        private readonly ApplicationDBContextcs _context;

        public DepartementsController(ApplicationDBContextcs context)
        {
            _context = context;
        }

        // GET: api/Departements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Departement>>> Getdepartements()
        {
            return await _context.departements.Include(x=>x.employees).ToListAsync();
        }

        // GET: api/Departements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Departement>> GetDepartement(int id)
        {
            var departement = await _context.departements.FindAsync(id);

            if (departement == null)
            {
                return NotFound();
            }

            return departement;
        }

        // PUT: api/Departements/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartement(int id, Departement departement)
        {
            if (id != departement.ID)
            {
                return BadRequest();
            }

            _context.Entry(departement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Departements
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Departement>> PostDepartement(Departement departement)
        {
            _context.departements.Add(departement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartement", new { id = departement.ID }, departement);
        }

        // DELETE: api/Departements/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Departement>> DeleteDepartement(int id)
        {
            var departement = await _context.departements.FindAsync(id);
            if (departement == null)
            {
                return NotFound();
            }

            _context.departements.Remove(departement);
            await _context.SaveChangesAsync();

            return departement;
        }

        private bool DepartementExists(int id)
        {
            return _context.departements.Any(e => e.ID == id);
        }
    }
}
