
app.userEvents.checkServiceActivityWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/WsDataServer/checkServiceActivity",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.fullCountryInfoWS = function(sCountryISOCodeParam, callback) {
   var request = {
     sCountryISOCode: sCountryISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/fullCountryInfo",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.countryFlagWS = function(sCountryISOCodeParam, callback) {
   var request = {
     sCountryISOCode: sCountryISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/countryFlag",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.countryNameWS = function(sCountryISOCodeParam, callback) {
   var request = {
     sCountryISOCode: sCountryISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/countryName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.countryCurrencyWS = function(sCountryISOCodeParam, callback) {
   var request = {
     sCountryISOCode: sCountryISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/countryCurrency",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfCountryNamesByCodeWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfCountryNamesByCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfCurrenciesByNameWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfCurrenciesByName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.countryIntPhoneCodeWS = function(sCountryISOCodeParam, callback) {
   var request = {
     sCountryISOCode: sCountryISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/countryIntPhoneCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.currencyNameWS = function(sCurrencyISOCodeParam, callback) {
   var request = {
     sCurrencyISOCode: sCurrencyISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/currencyName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfCurrenciesByCodeWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfCurrenciesByCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfLanguagesByCodeWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfLanguagesByCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.languageISOCodeWS = function(sLanguageNameParam, callback) {
   var request = {
     sLanguageName: sLanguageNameParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/languageISOCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.capitalCityWS = function(sCountryISOCodeParam, callback) {
   var request = {
     sCountryISOCode: sCountryISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/capitalCity",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfLanguagesByNameWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfLanguagesByName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfCountryNamesGroupedByContinentWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfCountryNamesGroupedByContinent",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfCountryNamesByNameWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfCountryNamesByName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfContinentsByNameWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfContinentsByName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.languageNameWS = function(sISOCodeParam, callback) {
   var request = {
     sISOCode: sISOCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/languageName",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.listOfContinentsByCodeWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/listOfContinentsByCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.countriesUsingCurrencyWS = function(sISOCurrencyCodeParam, callback) {
   var request = {
     sISOCurrencyCode: sISOCurrencyCodeParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/countriesUsingCurrency",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.countryISOCodeWS = function(sCountryNameParam, callback) {
   var request = {
     sCountryName: sCountryNameParam
   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/countryISOCode",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};

app.userEvents.fullCountryInfoAllCountriesWS = function(callback) {
   var request = {

   };

   $.ajax({
     method: "GET", 
     url: "api/rest/webservices/CountryInfoService/fullCountryInfoAllCountries",
     data: request,
     success: function(data) {
       if (callback)
         callback(data);
       else
         console.log(data);
     }
   });
};
