using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Oracle.ManagedDataAccess.Client;
namespace WebApplication3.Model
{
    public class Producto
    {
        public int id;
        public string name;
        public float precio;
        private static string dbstring = "User Id=admin;Password=admin;Data Source=35.224.60.205:49161/xe";
        private static OracleConnection con = new OracleConnection(dbstring);
        public static List<object> getAllProductos()
        {
            List<object> productos = new List<object>();
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "select * from producto";
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    int id = int.Parse(dr["id"].ToString());
                    String nombre = dr["nombre"].ToString();
                    float precio= float.Parse(dr["precio"].ToString());
                    productos.Add(new { id= id, nombre = nombre, precio= precio});
                }
            }
            con.Close();
            //con.Dispose();

            return productos;
        }
        public static object agregarCarrito(int idproducto,int cantidad)
        {
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "insert into carrito values(carritoseq.nextval,:idprod,:cantidad)";
            OracleParameter p1 = new OracleParameter("idprod", idproducto);
            OracleParameter p2 = new OracleParameter("cantidad", cantidad);
            cmd.Parameters.Add(p1);
            cmd.Parameters.Add(p2);

            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    con.Close();
                    return (new { msg = dr.Read() });
                }
            }
            con.Close();
            //con.Dispose();

            return (new { msg = true });
        }

        public static List<object> getCarrito()
        {
            List<object> productos = new List<object>();
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "select c.id,p.nombre,p.precio,c.cantidad,(p.precio*c.cantidad) as subtotal from carrito c,producto p where c.idprod=p.id ";
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    int id = int.Parse(dr["id"].ToString());
                    String nombre = dr["nombre"].ToString();
                    String subtotal = dr["subtotal"].ToString();
                    int cantidad = int.Parse(dr["cantidad"].ToString());
                    float precio = float.Parse(dr["precio"].ToString());
                    productos.Add(new { id = id, nombre = nombre, precio = precio,cantidad=cantidad,subtotal=subtotal });
                }
            }
            con.Close();
            //con.Dispose();

            return productos;
        }

        public static object deleteCarrito(int id) {
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "delete from carrito where id = :id";
            OracleParameter p1 = new OracleParameter("id", id);
            cmd.Parameters.Add(p1);

            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    con.Close();
                    return (new { msg = dr.Read() });
                }
            }
            con.Close();
            //con.Dispose();

            return (new { msg = true });
        }

        public static object clearCarrito()
        {
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "delete from carrito";
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    con.Close();

                    return (new { msg = dr.Read() });
                }
            }
            con.Close();
            //con.Dispose();

            return (new { msg = true });
        }


    }
}
