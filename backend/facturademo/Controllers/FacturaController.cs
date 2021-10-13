using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace facturademo.Controllers
{
    [Route("factura")]
    [ApiController]
    public class Factura : Controller
    {
        [HttpGet("hola")]
        public IActionResult Get()
        {
            //return Ok("HOla");
            //return BadRequest("Error");
            return Ok(
                new object[]
                {
                    new {id=1,nombre="Object special"}
                }
                );
        }

        [HttpPost]//CREATE
        public IActionResult CreateFactura()
        {
            return Ok("creando factura");
        }

        [HttpGet]//READ all
        public IActionResult getFacturas()
        {
            return Ok("retornando facturas");
        }
        [HttpGet("{id}")]//READ by id
        public IActionResult getFacturabyid()
        {
            return Ok("retornando facturas");
        }

        [HttpPut]//UPDATE
        public IActionResult updateFactura()
        {
            return Ok("Modificando factura");
        }
        [HttpDelete]//DELETE
        public IActionResult delteFactura()
        {
            return Ok("Borrando factura");
        }


    }
}
