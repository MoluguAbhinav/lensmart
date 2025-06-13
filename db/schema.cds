namespace lensmart;
entity Customers {
 key ID         : UUID;
 name           : String;
 address        : String;
 orders         : Composition of many Orders on orders.customer = $self;
}
entity Products {
 key ID         : UUID;
 name           : String;
 brand          : String;
 price          : Decimal(10,2);
 stock          : Integer;
 imageUrl       : String;
}
entity Orders {
 key ID         : UUID;
 customer       : Association to Customers;
 items          : Composition of many OrderItems on items.order = $self;
 totalPrice     : Decimal(10,2);
 createdAt      : Timestamp;
}
entity OrderItems {
 key ID         : UUID;
 order          : Association to Orders;
 product        : Association to Products;
 quantity       : Integer;
}
entity Admins {
 key ID         : UUID;
 name           : String;
}