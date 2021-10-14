using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Oracle.ManagedDataAccess.Client;

namespace WebApplication3.Model
{
    


    public class Factura
    {
        
        public long nit;
        public String nombre;
        public String fecha;
        public long correlativo;
        private static string dbstring = "User Id=admin;Password=admin;Data Source=35.224.60.205:49161/xe";
        private static OracleConnection con = new OracleConnection(dbstring);
        public Factura(long nit,String nombre,String fecha,long correlativo) {
            this.nit = nit;
            this.nombre = nombre;
            this.fecha = fecha;
            this.correlativo = correlativo;
        }


        public static object createFactura(int nit, string nombre)
        {           
            OracleCommand cmd = new OracleCommand();
            
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //cmd.CommandText = "exec addfactura (:nit,:nombre)";
            cmd.CommandText = "addfactura";
            OracleParameter pnit = new OracleParameter("nit", nit);
            OracleParameter pnombre = new OracleParameter("nombre", nombre);
            cmd.Parameters.Add(pnit);
            cmd.Parameters.Add(pnombre);
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    con.Close();
                    return dr.Read();
                }
            }
            con.Close();

            return new { };
        }



        public static List<object> getAllFacturas() {
            List<object>facturas = new List<object>();
            OracleConnection  con =new  OracleConnection("User Id=admin;Password=admin;Data Source=35.224.60.205:49161/xe");
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "select f.nit,f.nombre,f.fecha,f.correlativo,(select sum(p.precio*d.cantidad) from detalle d,producto p where d.producto=p.id and factura=f.correlativo) as total from factura f";
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    long nit = long.Parse(dr["nit"].ToString());
                    String nombre = dr["nombre"].ToString();
                    String fecha = dr["fecha"].ToString();
                    long corr = long.Parse(dr["correlativo"].ToString());
                    string total = (dr["total"].ToString());
                    facturas.Add( new { nit = nit,nombre=nombre,fecha=fecha,corr=corr,total= total});                
                }
            }
            con.Close();
            con.Dispose();
            
            return facturas;
        }

        public static object getFactura(long id)
        {            
            OracleConnection con = new OracleConnection("User Id=admin;Password=admin;Data Source=35.224.60.205:49161/xe");
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "select f.nit,f.nombre,f.fecha,f.correlativo,(select sum(p.precio*d.cantidad) from detalle d,producto p where d.producto=p.id and factura=f.correlativo) as total from factura f where f.correlativo = :id";
            //cmd.CommandText = "select * from factura where correlativo = :id";
            OracleParameter pid = new OracleParameter("id", id);
            cmd.Parameters.Add(pid);
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    object[] respuesta = new object[5];
                    dr.GetValues(respuesta);
                    long nit = long.Parse(respuesta[0].ToString());
                    String nombre = respuesta[1].ToString();
                    String fecha = respuesta[2].ToString();
                    long corr = long.Parse(respuesta[3].ToString());
                    con.Close();
                    return (new { nit = nit, nombre = nombre, fecha = fecha, corr = corr ,total= respuesta[4].ToString() });
                }
            }
            con.Close();
            //con.Dispose();

            return new { };
        }


      

        public static object delteFactura(long corr)
        {
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "delete from factura where correlativo =:corr";
            OracleParameter pcorr = new OracleParameter("corr", corr);
            cmd.Parameters.Add(pcorr);           
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    con.Close();
                    return new { msg = "Eliminado" };
                }
            }
            con.Close();

            return new {msg="No se borro ninguna factura"};
        }

        public static List<object> getCurCarrito(int id)
        {
            List<object> facturas = new List<object>();
            OracleConnection con = new OracleConnection("User Id=admin;Password=admin;Data Source=35.224.60.205:49161/xe");
            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "select c.id,p.nombre,p.precio,c.cantidad,(p.precio*c.cantidad) as subtotal from detalle c,producto p where c.producto=p.id and factura =:id";
            OracleParameter pcorr = new OracleParameter("id", id);
            cmd.Parameters.Add(pcorr);
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    long cor= long.Parse(dr["id"].ToString());
                    String nombre = dr["nombre"].ToString();
                    float  precio = float.Parse(dr["precio"].ToString());
                    long cantidad= long.Parse(dr["cantidad"].ToString());
                    float subtotal = float.Parse(dr["subtotal"].ToString());
                    facturas.Add(new { id= cor ,nombre=nombre,precio=precio,cantidad=cantidad,subtota=subtotal});
                }
            }
            con.Close();
            con.Dispose();

            return facturas;
        }

        public static object updateFactura(int corr,int nit, string nombre)
        {
            OracleCommand cmd = new OracleCommand();

            //cmd.CommandType = System.Data.CommandType.StoredProcedure;
            //cmd.CommandText = "exec addfactura (:nit,:nombre)";
            cmd.CommandText = "update factura set nit=:nit, nombre=:nombre where correlativo=:correlativo";
            OracleParameter pnit = new OracleParameter("nit", nit);
            OracleParameter pnombre = new OracleParameter("nombre", nombre);
            OracleParameter pcorrelativo = new OracleParameter("correlativo", corr);
            cmd.Parameters.Add(pnit);
            cmd.Parameters.Add(pnombre);
            cmd.Parameters.Add(pcorrelativo);
            cmd.Connection = con;
            con.Open();
            OracleDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    con.Close();
                    return dr.Read();
                }
            }
            con.Close();

            return new { };
        }


    }
}
