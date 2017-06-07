// app.js  
  
var oracledb = require('oracledb');  
var FOOBAR = '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=10.0.110.197)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=mysid)))';
oracledb.getConnection({  
     connectString : '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=10.0.110.197)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=dbtd)))',
     user: "faq_bhxh",  
     password: "faq_bhxh",  
     // connectString: "oci:dbname=//10.0.110.197:1521/dbtd;charset=UTF8"  
}, function(err, connection) {  
     if (err) {  
          console.error(err.message);  
          return;  
     }  
     connection.execute( "SELECT USERNAME FROM USERS WHERE id = 141",  
     [],  
     function(err, result) {  
          if (err) {  
               console.error(err.message);  
               doRelease(connection);  
               return;  
          }  
          console.log(result.metaData);  
          console.log(result.rows);  
          doRelease(connection);  
     });  
});  
  
function doRelease(connection) {  
     connection.release(  
          function(err) {  
               if (err) {console.error(err.message);}  
          }  
     );  
} 