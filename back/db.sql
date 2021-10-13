CREATE TABLE factura(
    nit number(10,0),
    nombre varchar(50),
    fecha date,
    correlativo number(10,0),
    CONSTRAINT fpk PRIMARY KEY(correlativo)    
);
CREATE TABLE detalle(
    id  int,
    factura number(10,0),
    producto varchar(60),
    cantidad number(5,0),
    monto number(10,2),
    CONSTRAINT dpk PRIMARY KEY(id),    
    constraint dfk foreign key (factura) references factura(correlativo)
);
CREATE TABLE detalle(
    id  int,
    factura number(10,0),
    producto varchar(60),
    cantidad number(5,0),
    monto number(10,2),
    CONSTRAINT dpk PRIMARY KEY(id),    
    constraint dfk foreign key (factura) references factura(correlativo)
);


CREATE SEQUENCE corr
 START WITH     1
 INCREMENT BY   1
 NOCACHE
 NOCYCLE;
CREATE SEQUENCE corr2
 START WITH     1
 INCREMENT BY   1
 NOCACHE
 NOCYCLE; 

insert into factura values(2017001,'Nombre1',TO_DATE('31/05/2020','DD/MM/YYYY'),corr.nextval);
insert into detalle values(corr2.nextval,5,'Producto1',2,12.52);
commit;

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