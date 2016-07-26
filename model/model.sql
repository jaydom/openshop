CREATE TABLE "product" (
"pid" int4 NOT NULL,
"sid" int4,
"name" varchar,
"image" varchar,
"price" decimal(10,2),
"salecount" int8,
"description" varchar,
PRIMARY KEY ("pid") 
)
WITHOUT OIDS;

