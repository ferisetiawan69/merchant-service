# merchant-service

DOCUMENTATION

•	Make database for Merchant & Product in MySQL

![image](https://user-images.githubusercontent.com/97323565/155865898-bc16d2c1-9040-4eee-89fe-cf3a1441d1ae.png)

![image](https://user-images.githubusercontent.com/97323565/155865931-4a505639-9a4c-477d-9dbc-064abceff2de.png)

•	Insert into database for Merchant & Product

![image](https://user-images.githubusercontent.com/97323565/155865970-eb49c65e-fc56-47c1-9823-d99ed9acfa0f.png)

![image](https://user-images.githubusercontent.com/97323565/155865976-2885c8ec-c152-44ef-952d-2aa11ed28f2d.png)

•	API Usage

1. Merchant

   - POST Login
     
     Required: name & password
     
     Result: JSON
     
     Status: 400 (Failed to Login)
     
          {"message": "Data not found","data": []}
          
     Status: 200 (Success to Login)
     
          {"message": "Data is found","data": {"token": token}}
          
   - GET List Merchant
   
     Required: name, password, phone_number, address (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to get data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success get data)
     
          {"message": "Data is found"}
          
   - POST Insert Merchant
   
     Required: name, password, phone_number, address (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to post data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success post data)
     
          {"message": "Merchant data has been inserted"}
          
   - PUT Update Merchant
   
     Required: phone_number, address (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to put data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success put data)
     
          {"message": "Merchant data has been updated"}
          
   - DEL Delete Merchant
   
     Required: id (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to delete data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success delete data)
     
          {"message": "Merchant data has been deleted"}
          
2. Product

   - POST Login
     
     Required: name & password
     
     Result: JSON
     
     Status: 400 (Failed to Login)
     
          {"message": "Data not found","data": []}
          
     Status: 200 (Success to Login)
     
          {"message": "Data is found","data": {"token": token}}
          
   - GET List Product
   
     Required: name, quantity, price (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to get data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success get data)
     
          {"message": "Data is found"}
          
   - POST Insert Product
   
     Required: name, quantity, price (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to post data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success post data)
     
          {"message": "Product data has been inserted"}
          
   - PUT Update Product
   
     Required: name (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to put data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success put data)
     
          {"message": "Product data has been updated"}
          
   - DEL Delete Merchant
   
     Required: id (Token Authorization)
     
     Result: JSON
     
     Status: 401 (Failed to delete data)
     
          {"message": "Unauthorized"}
          
     Status: 401 (Incorrect token entered)
     
          {"message": "Invalid Token"}
          
     Status: 200 (Success delete data)
     
          {"message": "Product data has been deleted"}
