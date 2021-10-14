using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Model;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Producto : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return Ok(Model.Producto.getAllProductos());
        }

        [HttpPost]
        public ActionResult addcarrito([FromBody] Model1 data)
        {
           
            return Ok(Model.Producto.agregarCarrito(data.id,data.cant));
        }
        [HttpGet("carrito")]
        public ActionResult getcarrito()
        {

            return Ok(Model.Producto.getCarrito());
        }
        [HttpDelete("carrito/{id}")]
        public ActionResult deleteCarrito(int id)
        {

            return Ok(Model.Producto.deleteCarrito(id));
        }
        [HttpGet("carritoclean")]
        public ActionResult carritoclean()
        {

            return Ok(Model.Producto.clearCarrito());
        }



    }

    public class Model1
    {
        public int id { get; set; }
        public int cant { get; set; }
        //public string Key { get; set; }
    }


}
