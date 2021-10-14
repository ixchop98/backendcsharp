CREATE SEQUENCE prodid
 START WITH     1006
 INCREMENT BY   1;
CREATE TABLE Producto(
    id int,
    nombre varchar(50),
    precio number(10,2),
    constraint prod_pk primary key(id)
);
insert into Producto values(1001,'Producto1',22.50);
insert into Producto values(1002,'Producto2',59);
insert into Producto values(1003,'Producto3',59);
insert into Producto values(1004,'Producto4',73);

insert into Producto values(prodid.nextval,CONCAT('Prod',7),7);
insert into Producto values(prodid.nextval,CONCAT('Prod',10),10);
insert into Producto values(prodid.nextval,CONCAT('Prod',53),53);
insert into Producto values(prodid.nextval,CONCAT('Prod',20),20);
insert into Producto values(prodid.nextval,CONCAT('Prod',9),9);
insert into Producto values(prodid.nextval,CONCAT('Prod',60),60);
insert into Producto values(prodid.nextval,CONCAT('Prod',19),19);
insert into Producto values(prodid.nextval,CONCAT('Prod',12),12);
insert into Producto values(prodid.nextval,CONCAT('Prod',25),25);
insert into Producto values(prodid.nextval,CONCAT('Prod',4),4);
insert into Producto values(prodid.nextval,CONCAT('Prod',66),66);
insert into Producto values(prodid.nextval,CONCAT('Prod',16),16);
insert into Producto values(prodid.nextval,CONCAT('Prod',55),55);
insert into Producto values(prodid.nextval,CONCAT('Prod',28),28);
insert into Producto values(prodid.nextval,CONCAT('Prod',43),43);
insert into Producto values(prodid.nextval,CONCAT('Prod',23),23);
insert into Producto values(prodid.nextval,CONCAT('Prod',48),48);
insert into Producto values(prodid.nextval,CONCAT('Prod',13),13);
insert into Producto values(prodid.nextval,CONCAT('Prod',8),8);
insert into Producto values(prodid.nextval,CONCAT('Prod',63),63);
insert into Producto values(prodid.nextval,CONCAT('Prod',51),51);
insert into Producto values(prodid.nextval,CONCAT('Prod',15),15);
insert into Producto values(prodid.nextval,CONCAT('Prod',14),14);
insert into Producto values(prodid.nextval,CONCAT('Prod',31),31);
insert into Producto values(prodid.nextval,CONCAT('Prod',42),42);
insert into Producto values(prodid.nextval,CONCAT('Prod',22),22);
insert into Producto values(prodid.nextval,CONCAT('Prod',36),36);
insert into Producto values(prodid.nextval,CONCAT('Prod',37),37);
insert into Producto values(prodid.nextval,CONCAT('Prod',62),62);
insert into Producto values(prodid.nextval,CONCAT('Prod',26),26);
insert into Producto values(prodid.nextval,CONCAT('Prod',3),3);
insert into Producto values(prodid.nextval,CONCAT('Prod',69),69);
insert into Producto values(prodid.nextval,CONCAT('Prod',65),65);
insert into Producto values(prodid.nextval,CONCAT('Prod',29),29);
insert into Producto values(prodid.nextval,CONCAT('Prod',46),46);
insert into Producto values(prodid.nextval,CONCAT('Prod',59),59);
insert into Producto values(prodid.nextval,CONCAT('Prod',6),6);
insert into Producto values(prodid.nextval,CONCAT('Prod',35),35);
insert into Producto values(prodid.nextval,CONCAT('Prod',68),68);
insert into Producto values(prodid.nextval,CONCAT('Prod',67),67);
insert into Producto values(prodid.nextval,CONCAT('Prod',58),58);
insert into Producto values(prodid.nextval,CONCAT('Prod',27),27);
insert into Producto values(prodid.nextval,CONCAT('Prod',38),38);
insert into Producto values(prodid.nextval,CONCAT('Prod',34),34);
insert into Producto values(prodid.nextval,CONCAT('Prod',41),41);
insert into Producto values(prodid.nextval,CONCAT('Prod',54),54);
insert into Producto values(prodid.nextval,CONCAT('Prod',30),30);
insert into Producto values(prodid.nextval,CONCAT('Prod',33),33);
insert into Producto values(prodid.nextval,CONCAT('Prod',39),39);
insert into Producto values(prodid.nextval,CONCAT('Prod',24),24);

CREATE SEQUENCE carritoseq
 START WITH     2001
 INCREMENT BY   1;
 drop sequence carritoseq;
create table carrito(
    id int,
    idprod int,
    cantidad int,
    constraint carrpk primary key (id),
    constraint carrfk foreign key (idprod)references producto(id)
);

select c.id,p.nombre,p.precio,c.cantidad,(p.precio*c.cantidad) as subtotal from carrito c,producto p where c.idprod=p.id ;

insert into carrito values(carritoseq.nextval,1001,1);
insert into carrito values(carritoseq.nextval,1002,10);


CREATE SEQUENCE factcor
 START WITH     3001
 INCREMENT BY   1;

CREATE TABLE factura(
    nit number(10,0),
    nombre varchar(50),
    fecha date,
    correlativo int,
    CONSTRAINT fpk PRIMARY KEY(correlativo)     
);
insert into factura values(2017001,'nombre1',TO_DATE('30/01/2020','DD/MM/YYYY'),factcor.nextval);

select * from factura;
select * from detalle;
commit;

CREATE TABLE detalle(
    id  int,
    factura int,
    producto varchar(60),
    cantidad number(5,0),
    CONSTRAINT dpk PRIMARY KEY(id),    
    constraint dfk foreign key (factura) references factura(correlativo) ON DELETE CASCADE
);
commit;





-----------------------------------------
--------------------------------------------------------
--------------------------------------------------------
--Obtener los productos
select * from Producto;

--Insertar en el carrito
insert into carrito values(carritoseq.nextval,1001,1);
--Obtener el carrito
select * from Carrito;
--quitar del carrito
delete from Carrito where id=2001;
--limpiar del carrito
delete from Carrito;

--Crear Factura
CREATE  or replace PROCEDURE addfactura(nit int, nombre varchar2)
IS
   newid number;
BEGIN
    commit;
    newid := factcor.nextval;   
    insert into factura values(nit,nombre,SYSDATE,newid);      
    insert into detalle (id,factura,producto,cantidad)  select car.id,newid,car.idprod,car.cantidad from carrito car;
    commit;
    DELETE FROM carrito;   
END;
   
exec addfactura (2017001,'nombre1');


--Ver Facturas
select (p.precio*d.cantidad) from detalle d,producto p where d.producto=p.id and factura=;
select f.nit,f.nombre,f.fecha,f.correlativo,(select sum(p.precio*d.cantidad) from detalle d,producto p where d.producto=p.id and factura=f.correlativo) as total from factura f;
select * from detalle;
select * from carrito;
delete from factura where correlativo in (3001,3002,3003,3004,3005,3006,3007,3008)
commit;
--Ver Detalle Factura (correlativo);
select * from detalle where factura in (3001,3002,3003,3004,3005,3006,3007,3008)

select c.id,p.nombre,p.precio,c.cantidad,(p.precio*c.cantidad) as subtotal from detalle c,producto p where c.producto=p.id and factura =3009

--------------------------------------------------------
--------------------------------------------------------





select * from factura;
select * from detalle;
drop table detalle;
--Conect as admin
--hostname: 35.224.60.205
--port: 49161
--sid: xe
--username: system
--password: oracle

--Conect as user admin
--hostname: 35.224.60.205
--port: 49161
--sid: xe
--username: admin
--password: admin
rollback


update  factura set nit =2017002 where correlativo =1;
delete from factura where correlativo =1; 

drop table detalle;
drop table factura;