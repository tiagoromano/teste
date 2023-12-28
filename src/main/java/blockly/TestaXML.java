package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class TestaXML {

public static final int TIMEOUT = 300;

/**
 *
 * @author Andre Lucio Rocha Wanderley
 * @since 22/11/2023, 16:15:19
 *
 */
public static Var Executar() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    System.out.println(
    cronapi.xml.Operations.xmlFromStrng(
    Var.valueOf("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tot=\"http://www.totvs.com/\">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tot:ReadView>\n         <!--Optional:-->\n         <tot:DataServerName>FopFuncData</tot:DataServerName>\n         <!--Optional:-->\n         <tot:Filtro>PFUNC.CODCOLIGADA=1 AND PFUNC.CODFILIAL = 1 AND PFUNC.RECMODIFIEDON = \'2023-10-13T16:24:32\' </tot:Filtro>\n         <!--Optional:-->\n         <tot:Contexto>CODCOLIGADA=1;CODAPLICACAO=P;CODUSUARIO=mestre</tot:Contexto>\n      </tot:ReadView>\n   </soapenv:Body>\n</soapenv:Envelope>")).getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

}

