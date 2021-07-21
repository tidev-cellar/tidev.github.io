(window.webpackJsonp=window.webpackJsonp||[]).push([[689],{1484:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-network-httpclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-network-httpclient"}},[t._v("#")]),t._v(" Titanium.Network.HTTPClient")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Use "),s("type-link",{attrs:{type:"Titanium.Network.createHTTPClient"}},[t._v("Titanium.Network.createHTTPClient")]),t._v(" to create a new "),s("code",[t._v("HTTPClient")]),t._v(" object.")],1),t._v(" "),s("p",[t._v("An "),s("code",[t._v("HTTPClient")]),t._v(" object is intended to be used for a single request. It may be\npossible to re-use an "),s("code",[t._v("HTTPClient")]),t._v(" object, but this use case is not tested.")]),t._v(" "),s("p",[t._v("There are three steps in making a typical HTTP request:")]),t._v(" "),s("ul",[s("li",[t._v("Creating an "),s("code",[t._v("HTTPClient")]),t._v(" object.")]),t._v(" "),s("li",[t._v("Opening the "),s("code",[t._v("HTTPClient")]),t._v(" object.")]),t._v(" "),s("li",[t._v("Sending the request.")])]),t._v(" "),s("p",[t._v("Before opening the request, you must define one or more callbacks to handle\nthe HTTP response, as well as errors, progress updates, and other conditions.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("HTTPClient")]),t._v(" callbacks operate somewhat differently from other\nTitanium callbacks, in accordance with the XMLHttpRequest specification.")]),t._v(" "),s("p",[t._v("When the callbacks are invoked, the "),s("code",[t._v("this")]),t._v(" value is set to either the\noriginal "),s("code",[t._v("HTTPClient")]),t._v(" object itself, or a response object that holds all\nof the response-related properties defined for the "),s("code",[t._v("HTTPClient")]),t._v(" object. So the\ncallbacks can use code like this to access the response values:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("httpResponse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstatus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"content-type-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type-header"}},[t._v("#")]),t._v(" Content-Type Header")]),t._v(" "),s("p",[t._v("When sending a POST request with the HTTP client, the Content-Type header is set automatically\ndepending on the platform and data type sent.")]),t._v(" "),s("p",[t._v("On the Android and iOS platforms:")]),t._v(" "),s("ul",[s("li",[t._v("If you are sending a JavaScript object, the content type is set to "),s("code",[t._v("multipart/form-data")]),t._v(".")]),t._v(" "),s("li",[t._v("For all other data types on Android, the content type is set to "),s("code",[t._v("application/x-www-form-urlencoded")]),t._v(".")]),t._v(" "),s("li",[t._v("For all other data types on iOS, the content type is "),s("strong",[t._v("NOT")]),t._v(" set.")])]),t._v(" "),s("p",[t._v("Use the "),s("type-link",{attrs:{type:"Titanium.Network.HTTPClient.setRequestHeader"}},[t._v("setRequestHeader")]),t._v(" method to override the\ndefault Content-Type header.")],1),t._v(" "),s("h3",{attrs:{id:"asynchronous-vs-synchronous-http-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-vs-synchronous-http-requests"}},[t._v("#")]),t._v(" Asynchronous vs. Synchronous HTTP Requests")]),t._v(" "),s("p",[t._v("By default, the "),s("code",[t._v("HTTPClient")]),t._v(" makes asynchronous requests.  Asynchronous requests do not block\nthe application and use callbacks to process responses when they are received.")]),t._v(" "),s("p",[t._v("Synchronous requests block the execution of the application until it receives a response.\nOn the iOS platform,  you can make synchronous requests by setting the optional\n"),s("code",[t._v("async")]),t._v(" parameter to "),s("code",[t._v("false")]),t._v(" when calling the "),s("type-link",{attrs:{type:"Titanium.Network.HTTPClient.open"}},[t._v("open")]),t._v(" method.")],1),t._v(" "),s("p",[t._v("The Android platform does not support synchronous requests.")]),t._v(" "),s("h3",{attrs:{id:"tls-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls-support"}},[t._v("#")]),t._v(" TLS Support")]),t._v(" "),s("p",[t._v("Transport Layer Security (TLS) is a protocol that ensures privacy between communicating applications\nand their users on the Internet. When a server and client communicate, TLS ensures that no third\nparty may eavesdrop or tamper with any message. TLS is the successor to the Secure Sockets Layer (SSL).")]),t._v(" "),s("p",[t._v("To communicate to servers with the TLS protocol, you need to use the same TLS version between\nthe client and server.")]),t._v(" "),s("table",{staticClass:"doc-table",attrs:{summary:"This table provides information about TLS versions."}},[s("caption",[s("b",[t._v("TLS versions by platform")])]),t._v(" "),s("thead",[s("tr",[s("th",[t._v("Protocol")]),t._v(" "),s("th",[t._v("Android")]),t._v(" "),s("th",[t._v("iOS")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{attrs:{align:"left"}},[t._v("TLS 1.0")]),t._v(" "),s("td",[t._v("1.0+")]),t._v(" "),s("td",[t._v("1.0+")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[t._v("TLS 1.1")]),t._v(" "),s("td",[t._v("4.1+")]),t._v(" "),s("td",[t._v("5.0+")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[t._v("TLS 1.2")]),t._v(" "),s("td",[t._v("4.1+")]),t._v(" "),s("td",[t._v("5.0+")])]),t._v(" "),s("tr",[s("th",{attrs:{align:"left"}},[t._v("TLS 1.3")]),t._v(" "),s("td",[t._v("10.0+")]),t._v(" "),s("td",[t._v("12.2+")])])])]),t._v(" "),s("p",[t._v("In Titanium, if a connection with TLS 1.2 fails, Titanium will re-attempt the connection with\nTLS 1.1 and TLS 1.0. By default, TLS 1.2 is attempted first.")]),t._v(" "),s("p",[t._v("On Android, use the "),s("type-link",{attrs:{type:"Titanium.Network.HTTPClient.tlsVersion"}},[t._v("Titanium.Network.HTTPClient.tlsVersion")]),t._v(" property to set the version of the TLS protocol\nif you know the version the server is running.  If you do not know, do not set this property.")],1),t._v(" "),s("p",[t._v("On iOS, add the "),s("code",[t._v("NSExceptionMinimumTLSVersion")]),t._v(" key in the "),s("code",[t._v("<plist>")]),t._v(" section of "),s("code",[t._v("tiapp.xml")]),t._v(" to set a minimum TLS version.\nSee following example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<key>NSAppTransportSecurity</key>\n<dict>\n  <key>NSExceptionDomains</key>\n  <dict>\n    <key>www.appcelerator.com</key>\n    <dict>\n      <key>NSExceptionMinimumTLSVersion</key>\n      <string>TLSv1.3</string>\n    </dict>\n  </dict>\n</dict>\n")])])]),s("p",[t._v("Titanium will not fallback with a lower TLS version if the "),s("code",[t._v("tlsVersion")]),t._v(" property in android or "),s("code",[t._v("NSExceptionMinimumTLSVersion")]),t._v(" in iOS, is set.\nSetting the TLS version saves time from re-attempting connections with lower TLS versions and\nprovides added security by denying attempts to use lower TLS versions.")]),t._v(" "),s("h3",{attrs:{id:"caching-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-data"}},[t._v("#")]),t._v(" Caching Data")]),t._v(" "),s("p",[t._v("You can also use the HTTP client API to cache image, response data or related. A convenient\nway to do so is by setting the "),s("type-link",{attrs:{type:"Titanium.Network.HTTPClient.file"}},[t._v("Titanium.Network.HTTPClient.file")]),t._v(" property to a path or target\nfile, which will be populated with the response data in a successful case (e.g. in the "),s("code",[t._v("onload")]),t._v("\ncallback). For more complex use cases, make sure to check "),s("a",{attrs:{href:"https://github.com/Topener/To.ImageCache/",target:"_blank",rel:"noopener noreferrer"}},[t._v("To.ImageCache"),s("OutboundLink")],1),t._v("\nwhich also supports expire-handling and extended cache control.")],1),t._v(" "),s("h3",{attrs:{id:"android-platform-implementation-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-implementation-notes"}},[t._v("#")]),t._v(" Android Platform Implementation Notes")]),t._v(" "),s("p",[t._v("On Android, the "),s("code",[t._v("HTTPClient")]),t._v(" uses its own cookie store which does not share cookies with the\nsystem cookie store used by "),s("type-link",{attrs:{type:"Titanium.UI.WebView"}},[t._v("Titanium.UI.WebView")]),t._v(". Developers can manage their cookies for both\ncookie stores using the methods "),s("type-link",{attrs:{type:"Titanium.Network.addHTTPCookie"}},[t._v("Titanium.Network.addHTTPCookie")]),t._v(", "),s("type-link",{attrs:{type:"Titanium.Network.addSystemCookie"}},[t._v("Titanium.Network.addSystemCookie")]),t._v(",\n"),s("type-link",{attrs:{type:"Titanium.Network.getHTTPCookies"}},[t._v("Titanium.Network.getHTTPCookies")]),t._v(", "),s("type-link",{attrs:{type:"Titanium.Network.getHTTPCookiesForDomain"}},[t._v("Titanium.Network.getHTTPCookiesForDomain")]),t._v(", "),s("type-link",{attrs:{type:"Titanium.Network.getSystemCookies"}},[t._v("Titanium.Network.getSystemCookies")]),t._v(",\n"),s("type-link",{attrs:{type:"Titanium.Network.removeHTTPCookie"}},[t._v("Titanium.Network.removeHTTPCookie")]),t._v(", "),s("type-link",{attrs:{type:"Titanium.Network.removeHTTPCookiesForDomain"}},[t._v("Titanium.Network.removeHTTPCookiesForDomain")]),t._v(", "),s("type-link",{attrs:{type:"Titanium.Network.removeAllHTTPCookies"}},[t._v("Titanium.Network.removeAllHTTPCookies")]),t._v(",\n"),s("type-link",{attrs:{type:"Titanium.Network.removeSystemCookie"}},[t._v("Titanium.Network.removeSystemCookie")]),t._v(", "),s("type-link",{attrs:{type:"Titanium.Network.removeAllSystemCookies"}},[t._v("Titanium.Network.removeAllSystemCookies")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"connect-to-local-network-in-ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-local-network-in-ios"}},[t._v("#")]),t._v(" Connect to local network in iOS")]),t._v(" "),s("p",[t._v("On iOS 14 and later, while connecting to local network a prompt will be shown to request user's permission.\nAdd key "),s("code",[t._v("NSLocalNetworkUsageDescription")]),t._v(" to the "),s("code",[t._v("ios plist")]),t._v(" section of the tiapp.xml file to show the message on prompt.\nIf this key is not added default message will be shown in prompt.")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Reason to access local network--\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("NSLocalNetworkUsageDescription"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            Specify the reason for accessing the local network.\n            This appears in the alert dialog when asking the user \n            for permission to access local network.\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"simple-get-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-get-request"}},[t._v("#")]),t._v(" Simple GET Request")]),t._v(" "),s("p",[t._v("The following code excerpt does a simple GET request and logs the response text.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.appcelerator.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHTTPClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function called when the response data is available")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Received text: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function called when an error occurs, including a timeout")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in milliseconds")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare the connection.")]),t._v("\nclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send the request.")]),t._v("\nclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);