﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyWebAPI.Entities;

namespace MyWebAPI.Controllers
{
    [Route("api/laptops")]
    [ApiController]
    public class LaptopsController: ControllerBase
    {
        private readonly ApplicationDbContext context;

        public LaptopsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<Laptop>> Get()
        {
            return await context.Laptops.ToListAsync();
        }

        [HttpGet("{id:int}", Name = "GetLaptopById")]
        public async Task<ActionResult<Laptop>> Get(int id)
        {
            var laptop = await context.Laptops.FirstOrDefaultAsync(x => x.Id == id);

            if (laptop is null)
            {
                return NotFound();
            }

            return laptop;
        }

        [HttpPost]
        public async Task<CreatedAtRouteResult> Post([FromBody] Laptop laptop)
        {
            context.Add(laptop);
            await context.SaveChangesAsync();
            return CreatedAtRoute("GetLaptopById", new { id = laptop.Id }, laptop);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] Laptop laptop)
        {
            var laptopExists = await context.Laptops.AnyAsync(x => x.Id == id);

            if (!laptopExists)
            {
                return NotFound();
            }

            laptop.Id = id;
            context.Update(laptop);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var recordsDeleted = await context.Laptops.Where(x => x.Id == id).ExecuteDeleteAsync();

            if (recordsDeleted == 0)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}