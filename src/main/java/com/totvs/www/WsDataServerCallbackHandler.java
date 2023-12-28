
/**
 * WsDataServerCallbackHandler.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.7.2  Built on : May 02, 2016 (05:55:18 BST)
 */

    package com.totvs.www;

    /**
     *  WsDataServerCallbackHandler Callback class, Users can extend this class and implement
     *  their own receiveResult and receiveError methods.
     */
    public abstract class WsDataServerCallbackHandler{



    protected Object clientData;

    /**
    * User can pass in any object that needs to be accessed once the NonBlocking
    * Web service call is finished and appropriate method of this CallBack is called.
    * @param clientData Object mechanism by which the user can pass in user data
    * that will be avilable at the time this callback is called.
    */
    public WsDataServerCallbackHandler(Object clientData){
        this.clientData = clientData;
    }

    /**
    * Please use this constructor if you don't want to set any clientData
    */
    public WsDataServerCallbackHandler(){
        this.clientData = null;
    }

    /**
     * Get the client data
     */

     public Object getClientData() {
        return clientData;
     }

        
           /**
            * auto generated Axis2 call back method for implements method
            * override this method for handling normal response from implements operation
            */
           public void receiveResultimplements(
                    com.totvs.www.WsDataServerStub.ImplementsResponse result
                        ) {
           }

          /**
           * auto generated Axis2 Error handler
           * override this method for handling error response from implements operation
           */
            public void receiveErrorimplements(java.lang.Exception e) {
            }
                
           /**
            * auto generated Axis2 call back method for checkServiceActivity method
            * override this method for handling normal response from checkServiceActivity operation
            */
           public void receiveResultcheckServiceActivity(
                    com.totvs.www.WsDataServerStub.CheckServiceActivityResponse result
                        ) {
           }

          /**
           * auto generated Axis2 Error handler
           * override this method for handling error response from checkServiceActivity operation
           */
            public void receiveErrorcheckServiceActivity(java.lang.Exception e) {
            }
                


    }
    