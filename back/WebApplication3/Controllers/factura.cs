using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication3.Model;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class factura : ControllerBase
    {
        // GET: api/<factura>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Factura.getAllFacturas());
        }

        // GET api/<factura>/5
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {

            return Ok(Factura.getFactura(id));
        }
        // GET api/<factura>/fcarrito
        [HttpGet("fcarrito/{id}")]
        public IActionResult fcarrito(int id)
        {

            return Ok(Factura.getCurCarrito(id));
        }

        // POST api/<factura>
        [HttpPost]
        public IActionResult Post([FromBody] Model2 value)
        {

            return Ok(Factura.createFactura(value.nit,value.name));
        }

        // PUT api/<factura>
        [HttpPut()]
        public IActionResult Put([FromBody] Model3 value)
        {
            return Ok(Factura.updateFactura(value.corr, value.nit,value.name));
        }

        // DELETE api/<factura>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(Factura.delteFactura(id));
            
        }
    }


    public class Model2
    {
        public int nit { get; set; }
        public string name{ get; set; }
    }
    public class Model3
    {
        public int corr { get; set; }
        public int nit { get; set; }
        public string name { get; set; }
    }

}
