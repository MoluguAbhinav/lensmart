using lensmart from '../db/schema';
service CatalogService {
 entity Products as projection on lensmart.Products;
 entity Customers as projection on lensmart.Customers;
 entity Orders as projection on lensmart.Orders;
 entity OrderItems as projection on lensmart.OrderItems;
 entity Admins as projection on lensmart.Admins;
}