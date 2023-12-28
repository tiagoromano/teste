package api.cronapi;
import org.apache.commons.httpclient.protocol.Protocol;
import cronapi.*;
import cronapi.CronapiMetaData.*;

/**
* Controller para expor serviços de WsDataServerStub
*
* @generated
**/
@CronapiMetaData(categoryName = "WsDataServer")
public class WsDataServerAPI {

private static void setAuth(org.apache.axis2.client.ServiceClient client) {
}

@CronapiMetaData(type = "function", returnType = ObjectType.OBJECT)
public static Var checkServiceActivity (
) throws Exception {


com.totvs.www.WsDataServerStub.CheckServiceActivityResponse respn = null;


com.totvs.www.WsDataServerStub stub = new com.totvs.www.WsDataServerStub();
WsDataServerAPI.setAuth(stub._getServiceClient());

        com.totvs.www.WsDataServerStub.CheckServiceActivity checkServiceActivity20 = new com.totvs.www.WsDataServerStub.CheckServiceActivity();

org.apache.commons.httpclient.protocol.Protocol.unregisterProtocol("https");
org.apache.commons.httpclient.protocol.Protocol.registerProtocol("https",  new Protocol("https", new org.apache.commons.httpclient.contrib.ssl.EasySSLProtocolSocketFactory(), 443));
respn = stub.checkServiceActivity(checkServiceActivity20);

return Var.valueOf(respn);
}

}