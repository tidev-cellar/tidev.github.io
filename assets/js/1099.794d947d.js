(window.webpackJsonp=window.webpackJsonp||[]).push([[1099],{2067:function(e,t,a){"use strict";a.r(t);var i=a(21),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"choosing-a-persistence-strategy-for-your-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-persistence-strategy-for-your-application"}},[e._v("#")]),e._v(" Choosing a Persistence Strategy for Your Application")]),e._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),a("p",[e._v("Titanium provides various means to save data to the user's mobile device. In this chapter, you will examine those options and select the best technique for a given situation.")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("p",[e._v("Even the most rudimentary applications usually have some data storage requirements. As always, Titanium provides access to all the native functionality via its convenient, uniform interface. To use a device's local storage, the following objects are needed:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Titanium.App.Properties")]),e._v(" is ideal for storing application-related settings")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Titanium.Database")]),e._v(" gives access to local SQLite3 databases")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Titanium.Filesystem")]),e._v(" facilitates file and directory manipulation")])])]),e._v(" "),a("p",[e._v("Each of these enable data to persist on a device across application restarts, power cycles, re-installation and even migration to a new device.")]),e._v(" "),a("h3",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Titanium.App.Properties")]),e._v(" API provides a lightweight key/value store. Titanium provides methods for reading and writing string, integer, boolean, and array values in properties. Any data that can be JSON serialized can be stored in an application property. Properties are a great place to store small chunks of data, such as configuration data for your app. But if you've got a lot of data to store, or you need to set up relationships between those data points, you'd be better served putting it in a database.")]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("Both iOS and Android include a SQLite3 database engine. If you're not familiar with SQLite, you might want to take a brief side trip to "),a("a",{attrs:{href:"http://sqlite.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://sqlite.org"),a("OutboundLink")],1),e._v(". In a nutshell, SQLite is a simplified database management system that supports "),a("a",{attrs:{href:"http://sqlite.org/omitted.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("most of the SQL92 specification"),a("OutboundLink")],1),e._v(", including most of the familiar SQL statements and even transactions.")]),e._v(" "),a("p",[e._v("The database is the appropriate place to store lots of structured data or when you need transactional support. You can define tables and columns, and enforce relationships between tables just as you would with a SQLServer or MySQL database. Data persists in the database until the user uninstalls your app or until you overwrite or remove the data.")]),e._v(" "),a("h3",{attrs:{id:"filesystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filesystem"}},[e._v("#")]),e._v(" Filesystem")]),e._v(" "),a("p",[a("code",[e._v("Titanium.Filesystem")]),e._v(" let's you read from and write to files on the user's device. Broadly speaking, your app is restricted to reading and writing its own files and cannot access files created by other apps. On Android devices, your app can save files to internal or external (SD card) storage. Files are a great place to store images or other binary data.")]),e._v(" "),a("h3",{attrs:{id:"what-kind-of-data-storage-should-i-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-kind-of-data-storage-should-i-use"}},[e._v("#")]),e._v(" What kind of data storage should I use?")]),e._v(" "),a("p",[e._v("The decision about which of the three local storage options you choose is usually determined by the following:")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Application Properties")]),e._v(" - used when one or all of the following is true:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("the data consists of simple key/value pairs")])]),e._v(" "),a("li",[a("p",[e._v("the data is related to the application rather than the user")])]),e._v(" "),a("li",[a("p",[e._v("the data does not require other data in order to be meaningful or useful")])]),e._v(" "),a("li",[a("p",[e._v("there only needs to be one version of the data stored at any one time")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Database")]),e._v(" - used this when one or all of the following is true:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("there are many similar data items")])]),e._v(" "),a("li",[a("p",[e._v("items of data relate to each other")])]),e._v(" "),a("li",[a("p",[e._v("you require flexibility over how the data will be presented when you retrieve it")])]),e._v(" "),a("li",[a("p",[e._v("the data accumulates over time, such as transaction, logging or archiving data")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Filesystem")]),e._v(" - used when one or all of the following is true:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("the data is already provided in file format")])]),e._v(" "),a("li",[a("p",[e._v("the data is an image file")])])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("Although the local database has the capability to store images in blob (binary) format, this won't lead to optimal performance from your application. Instead, use "),a("code",[e._v("Titanium.Database")]),e._v(" to store the image file path and name in the database, and "),a("code",[e._v("Titanium.Filesystem")]),e._v(" to manage the physical files.")])]),e._v(" "),a("h2",{attrs:{id:"references-and-further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[e._v("#")]),e._v(" References and Further Reading")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("API docs:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.Properties-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("Properties API"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("Database API"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filesystem API"),a("OutboundLink")],1)])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/appcelerator-archive/sample-persistence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Persistence demo app"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://sqlite.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://sqlite.org"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("In this chapter, you examined the local storage options available to your Titanium apps. And we gave you some recommendations of which option to use in various situations. While we didn't dig into the implementation details yet, you got a chance to see when to use each of these persistence options. In the upcoming sections, we'll dig deep into each storage option.")])])}),[],!1,null,null,null);t.default=o.exports}}]);