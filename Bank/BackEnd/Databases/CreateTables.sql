CREATE TABLE IF NOT EXISTS "Teller" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Name"	TEXT NOT NULL,
	"LastName"	TEXT NOT NULL,
	"Username"	TEXT NOT NULL UNIQUE,
	"Password"	TEXT NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Transactions" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Number"	TEXT NOT NULL UNIQUE,
	"DateTime"	TEXT NOT NULL,
	"Amount"	NUMERIC NOT NULL,
	"Type"	TEXT NOT NULL,
	"Details"	TEXT NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "University" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Name"	TEXT NOT NULL UNIQUE,
	"DepositAmount"	NUMERIC NOT NULL,
	"Username"	TEXT NOT NULL UNIQUE,
	"Password"	TEXT NOT NULL,
	"Email"	TEXT NOT NULL UNIQUE,
	"Phone"	TEXT,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "User" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Name"	TEXT NOT NULL,
	"LastName"	TEXT NOT NULL,
	"Username"	TEXT NOT NULL UNIQUE,
	"Password"	TEXT NOT NULL,
	"Email"	TEXT NOT NULL,
	"Phone"	TEXT,
	"Address"	TEXT,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "BussinessAccount" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Number"	TEXT NOT NULL UNIQUE,
	"Balance"	NUMERIC NOT NULL,
	"Currency"	TEXT NOT NULL,
	"Type"	TEXT NOT NULL,
	"Status"	TEXT NOT NULL,
	"BussinessID"	INTEGER NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT),
	FOREIGN KEY("BussinessID") REFERENCES "University"("ID")
);
CREATE TABLE IF NOT EXISTS "PersonalAccount" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"Number"	TEXT NOT NULL UNIQUE,
	"Balance"	NUMERIC NOT NULL,
	"Currency"	TEXT NOT NULL,
	"Type"	TEXT NOT NULL,
	"Status"	TEXT NOT NULL,
	"UserID"	INTEGER NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT),
	FOREIGN KEY("UserID") REFERENCES "User"("ID")
);
CREATE TABLE IF NOT EXISTS "UniversityServiceLocal" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"ClientID"	TEXT NOT NULL,
	"ClientName"	TEXT NOT NULL,
	"StudentCode"	TEXT NOT NULL,
	"Details"	TEXT,
	"UniversitAccountID"	INTEGER NOT NULL,
	"TellerID"	INTEGER NOT NULL,
	"TransactionID"	INTEGER NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT),
	FOREIGN KEY("TellerID") REFERENCES "Teller"("ID"),
	FOREIGN KEY("UniversitAccountID") REFERENCES "BussinessAccount"("ID"),
	FOREIGN KEY("TransactionID") REFERENCES "Transaction"("ID")
);
CREATE TABLE IF NOT EXISTS "UniversityServiceOnline" (
	"ID"	INTEGER NOT NULL UNIQUE,
	"StudentCode"	TEXT NOT NULL,
	"Details"	TEXT,
	"UniversityAccountID"	INTEGER NOT NULL,
	"UserAccountID"	INTEGER NOT NULL,
	"TransactionID"	INTEGER NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT),
	FOREIGN KEY("UserAccountID") REFERENCES "PersonalAccount"("ID"),
	FOREIGN KEY("UniversityAccountID") REFERENCES "BussinessAccount"("ID"),
	FOREIGN KEY("TransactionID") REFERENCES "Transaction"("ID")
);
INSERT INTO Teller (Name, LastName, Username, Password) VALUES ("admin", "admin", "admin", "21232f297a57a5a743894a0e4a801fc3");
INSERT INTO Teller (Name, LastName, Username, Password) VALUES ("Alan", "Brito", "alanbrito", "e420c33ec3207e1f3609bc8f8edb992b");
INSERT INTO Teller (Name, LastName, Username, Password) VALUES ("Elena", "Nito", "elenanito", "938a5ae9f9c44aa4c4df3742f7d42841");
INSERT INTO User (Name, LastName, Username, Password, Email) VALUES ("Carlos", "Menacho", "carlosmenacho", "d489db2778f4b0fda1fb77bdc982fb67", "carlosmenacho@jalasoft.com");
INSERT INTO User (Name, LastName, Username, Password, Email) VALUES ("Jhimi", "Vargas", "jhimivargas", "9f33a3f7164e4f6d5e7e699385b0a4b6", "jhimivargas@jalasoft.com");
INSERT INTO User (Name, LastName, Username, Password, Email) VALUES ("Juan Pablo", "von Landwüst", "juanpavon", "8db21c7ba3b572a7043a220582b2163a", "juanpavon@jalasoft.com");
INSERT INTO University (Name, DepositAmount, Username, Password, Email) VALUES ("Universidad Católica", 1000.11, "uc", "d38af049e086eb7b59102bcf0c93974c", "contacto@uc.edu");
INSERT INTO University (Name, DepositAmount, Username, Password, Email) VALUES ("Universidad Mayor", 2000.20, "um", "0dd00e33b6fc67b811ebe3177217d6c0", "contacto@um.edu");
INSERT INTO University (Name, DepositAmount, Username, Password, Email) VALUES ("Universidad Autónoma", 3000.30, "ua", "5269f4d75f5bc75f0f94bab2100a5531", "contacto@ua.edu");
INSERT INTO BussinessAccount (Number, Balance, Currency, Type, Status, BussinessID) VALUES ("1111-1111", 0.00, "USD", "Savings", "Active", 1);
INSERT INTO BussinessAccount (Number, Balance, Currency, Type, Status, BussinessID) VALUES ("2222-2222", 0.00, "USD", "Savings", "Active", 2);
INSERT INTO BussinessAccount (Number, Balance, Currency, Type, Status, BussinessID) VALUES ("3333-3333", 0.00, "USD", "Savings", "Active", 3);
INSERT INTO PersonalAccount (Number, Balance, Currency, Type, Status, UserID) VALUES ("9999-9999", 2000.00, "USD", "Savings", "Active", 1);
INSERT INTO PersonalAccount (Number, Balance, Currency, Type, Status, UserID) VALUES ("8888-8888", 2000.00, "USD", "Savings", "Active", 2);
INSERT INTO PersonalAccount (Number, Balance, Currency, Type, Status, UserID) VALUES ("7777-7777", 2000.00, "USD", "Savings", "Active", 3);