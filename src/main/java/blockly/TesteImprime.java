package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class TesteImprime {

public static final int TIMEOUT = 300;

/**
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 22/11/2023, 16:56:11
 *
 */
public static Var Executar() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    System.out.println(
    cronapi.util.Operations.getURLFromOthers(
    Var.valueOf("POST"),
    Var.valueOf("application/x-www-form-urlencoded"),
    Var.valueOf("http://20.226.77.43:31003/wsDataServer/IwsDataServer"), Var.VAR_NULL,
    cronapi.map.Operations.createObjectMapWith(Var.valueOf("Authorization",
    Var.valueOf("Basic bWVzdHJlOnRvdHZz")) , Var.valueOf("Content-Type",
    Var.valueOf("text/xml; charset=utf-8")) , Var.valueOf("SOAPAction",
    Var.valueOf("http://www.totvs.com/IwsDataServer/ReadView"))),
    cronapi.xml.Operations.xmlFromStrng(
    Var.valueOf("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tot=\"http://www.totvs.com/\">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tot:ReadView>\n         <!--Optional:-->\n         <tot:DataServerName>FopFuncData</tot:DataServerName>\n         <!--Optional:-->\n         <tot:Filtro>PFUNC.CODCOLIGADA=1 AND PFUNC.CODFILIAL = 1 AND PFUNC.RECMODIFIEDON = \'2023-10-13T16:24:32\' </tot:Filtro>\n         <!--Optional:-->\n         <tot:Contexto>CODCOLIGADA=1;CODAPLICACAO=P;CODUSUARIO=mestre</tot:Contexto>\n      </tot:ReadView>\n   </soapenv:Body>\n</soapenv:Envelope>")),
    Var.valueOf(""),
    Var.valueOf("ALL")).getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

}

