(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{1409:function(t,a,n){"use strict";n.r(a);var s=n(21),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-android-intent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-android-intent"}},[t._v("#")]),t._v(" Titanium.Android.Intent")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("In Android, applications and application components cannot directly communicate with each other.\nIn order to communicate with another application, use an intent. An intent is a message sent\nto the Android OS. Android directs the message to an application or application component based\non the intent's settings.")]),t._v(" "),n("p",[t._v("To receive an intent, an application needs to declare an Intent Filter. An intent filter\nindicates to the Android OS that your application can handle certain data types or URIs.\nFor details on using Intent Filters, see the\n"),n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Intent_Filters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Intent Filters guide"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("Intents can be used to start an activity, start a service or start a broadcast.")]),t._v(" "),n("ul",[n("li",[t._v("To create an intent to start an "),n("strong",[t._v("Activity")]),t._v(", use the "),n("type-link",{attrs:{type:"Titanium.Android.createIntent"}},[t._v("Titanium.Android.createIntent")]),t._v(" method.")],1),t._v(" "),n("li",[t._v("To create an intent to start a "),n("strong",[t._v("Broadcast")]),t._v(", use the "),n("type-link",{attrs:{type:"Titanium.Android.createBroadcastIntent"}},[t._v("Titanium.Android.createBroadcastIntent")]),t._v(" method.")],1),t._v(" "),n("li",[t._v("To create an intent to start a "),n("strong",[t._v("Service")]),t._v(", use the "),n("type-link",{attrs:{type:"Titanium.Android.createServiceIntent"}},[t._v("Titanium.Android.createServiceIntent")]),t._v(" method.")],1)]),t._v(" "),n("p",[t._v("You can create either an implicit intent or an explicit intent.")]),t._v(" "),n("p",[t._v("An "),n("em",[t._v("explicit intent")]),t._v(" specifies the application or application component to launch. To create an\nexplicit intent, specify the Intent's "),n("code",[t._v("className")]),t._v(" and "),n("code",[t._v("packageName")]),t._v(" properties to specify the\napplication component to launch or the "),n("code",[t._v("url")]),t._v(" property to specify a JavaScript file to handle\nthe data.")]),t._v(" "),n("p",[t._v("An "),n("em",[t._v("implicit intent")]),t._v(" does not specify a particular application.  Android will present the options\nto the user of which applications to launch if a default application was not selected to handle\na particular data type or content URI. To create an implicit intent, do not specify the\n"),n("code",[t._v("className")]),t._v(", "),n("code",[t._v("packageName")]),t._v(" or "),n("code",[t._v("url")]),t._v(" properties.")]),t._v(" "),n("p",[t._v("Note that the parameters to create a Service Intent are different than the ones used to\ncreate an Activity or Broadcast.  The properties and methods listed below\nare used for Activity and Broadcast Intents.  See the "),n("type-link",{attrs:{type:"Titanium.Android.createServiceIntent"}},[t._v("Titanium.Android.createServiceIntent")]),t._v(" method\nfor the parameters to create a Service Intent.")],1),t._v(" "),n("h3",{attrs:{id:"action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("action")]),t._v(" property specifies the action you want the activity to perform, or in the case of\nbroadcasts, the action that just completed you want to report.")]),t._v(" "),n("p",[t._v("Titanium exposes some of the Android Intent actions as the "),n("code",[t._v("Titanium.Android.ACTION_*")]),t._v(" constants.\nNote that some of these actions are for system-level broadcasts that only Android can send.\nIf Titanium has not exposed a particular constant, you can pass the string value listed in the\nAndroid API reference guide instead.")]),t._v(" "),n("p",[t._v("You can also define your own custom action names. Use a reverse domain scheme to name the\naction to avoid potential conflicts, for example, "),n("code",[t._v("com.appcelerator.action.LINT")]),t._v(".\nCustom actions are only useful to communicate between your applications and application\nactivities using intents.")]),t._v(" "),n("h3",{attrs:{id:"data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),n("p",[t._v("The "),n("type-link",{attrs:{type:"Titanium.Android.Intent.data"}},[t._v("data")]),t._v(" property specifies a content URI you want the activity to handle.")],1),t._v(" "),n("p",[t._v("The "),n("type-link",{attrs:{type:"Titanium.Android.Intent.type"}},[t._v("type")]),t._v(" property specifies a MIME type the activity can handle.")],1),t._v(" "),n("p",[t._v("For Broadcast Intents, do not use the "),n("code",[t._v("data")]),t._v(" or "),n("code",[t._v("type")]),t._v(" properties. Use extras to pass data.\nSee the "),n("em",[t._v("Extras")]),t._v(" section below.")]),t._v(" "),n("h3",{attrs:{id:"category"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#category"}},[t._v("#")]),t._v(" Category")]),t._v(" "),n("p",[t._v("Add a category to your Intent by invoking the "),n("type-link",{attrs:{type:"Titanium.Android.Intent.addCategory"}},[t._v("addCategory()")]),t._v("\nmethod on it.  A category provides additional details about the purpose of the intent.\nNote that most categories are only useful for intent filters.")],1),t._v(" "),n("p",[t._v("Titanium exposes some of the Android Intent categories as the "),n("code",[t._v("Titanium.Android.CATEGORY_*")]),t._v(" constants.\nNote that some of these categories are for Notifications.  If Titanium has not exposed a\nparticular constant, you can pass the string value listed in the Android API reference instead.")]),t._v(" "),n("p",[t._v("You can also define your own custom category names. Use a reverse domain scheme to name the\ncategory to avoid potential conflicts, for example, "),n("code",[t._v("org.foo.category.SUPER")]),t._v(".\nCustom categories are only useful to communicate between your applications and application\nactivities using intents.")]),t._v(" "),n("h3",{attrs:{id:"flags"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[t._v("#")]),t._v(" Flags")]),t._v(" "),n("p",[t._v("Bitwise-OR flags with the Intent's "),n("type-link",{attrs:{type:"Titanium.Android.Intent.flags"}},[t._v("flags")]),t._v(" property\nor pass a flag to the "),n("type-link",{attrs:{type:"Titanium.Android.Intent.addFlags"}},[t._v("addFlags()")]),t._v(" method.\nFlags modify the behavior of the intent.")],1),t._v(" "),n("p",[t._v("Titanium exposes some of the Android Intent flags as the "),n("code",[t._v("Titanium.Android.FLAG_*")]),t._v(" constants.\nIf Titanium has not exposed a particular constant, you can pass the constant value listed in\nthe Android API reference instead.")]),t._v(" "),n("h3",{attrs:{id:"extras"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extras"}},[t._v("#")]),t._v(" Extras")]),t._v(" "),n("p",[t._v("Extras are key-value pairs that are useful to pass on extra data with the Intent that can be\nused by another application component.")]),t._v(" "),n("ul",[n("li",[t._v("Use one of the "),n("code",[t._v("get*Extra()")]),t._v(" methods to retrieve the data. Pass the method the extra key.")]),t._v(" "),n("li",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.Android.Intent.hasExtra"}},[t._v("hasExtra()")]),t._v(" method to check if the intent contains an extra.\nPass the method the key of the extra.")],1),t._v(" "),n("li",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.Android.Intent.putExtra"}},[t._v("putExtra()")]),t._v(" method to add data to the intent.\nPass the method the extra key and data.")],1)]),t._v(" "),n("p",[t._v("Titanium exposes the Android-defined extra keys as the "),n("code",[t._v("Titanium.Android.EXTRA_*")]),t._v(" constants.\nYou can also define your own custom extra keys to use between your applications and application\ncomponents.")]),t._v(" "),n("h3",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Intents",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Intents guide"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.android.com/reference/android/content/Intent.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developer: Intent"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"create-an-intent-for-launching-an-activity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-an-intent-for-launching-an-activity"}},[t._v("#")]),t._v(" Create an Intent for Launching an Activity")]),t._v(" "),n("p",[t._v("This example creates an intent and uses it to launch a new activity.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIntent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    action"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION_MAIN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'activity1.js'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCategory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CATEGORY_LAUNCHER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"create-an-intent-to-get-a-contact-uri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-an-intent-to-get-a-contact-uri"}},[t._v("#")]),t._v(" Create an Intent to get a Contact URI")]),t._v(" "),n("p",[t._v("This example creates an intent to retrieve contact information from the user's\ncontacts.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIntent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    action"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION_GET_CONTENT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vnd.android.cursor.item/phone"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"pick-a-photo-from-the-photo-gallery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pick-a-photo-from-the-photo-gallery"}},[t._v("#")]),t._v(" Pick a Photo from the Photo Gallery")]),t._v(" "),n("p",[t._v("This example creates an intent to pick an image from the photo gallery.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIntent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    action"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION_PICK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/*"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCategory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CATEGORY_DEFAULT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"create-an-imageview-from-an-image-send-intent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-an-imageview-from-an-image-send-intent"}},[t._v("#")]),t._v(" Create an ImageView from an Image Send Intent")]),t._v(" "),n("p",[t._v("This example requires that an intent filter be set up in the project's "),n("code",[t._v("tiapp.xml")]),t._v(" file.\nAfter copying the default root activity of your application from the "),n("code",[t._v("AndroidManifest.xml")]),t._v("\nfile to the Android manifest section of the "),n("code",[t._v("tiapp.xml")]),t._v(" file, add an intent filter.\nFor detailed instructions, refer to the\n"),n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Intent_Filters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Intent Filters guide"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v('You can trigger this intent filter by long pressing on an image in the Android gallery\nand selecting "share".')]),t._v(" "),n("p",[n("code",[t._v("tiapp.xml")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("activity")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".YourapplicationnameActivity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("intent-filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("mimeType")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image/*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("action")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.intent.action.SEND"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("category")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.intent.category.DEFAULT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("intent-filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("activity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("code",[t._v("app.js")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fullscreen"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exitOnClose"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" intent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentActivity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIntent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXTRA_STREAM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" intent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasExtra")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create ImageView from TiBlob")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" intent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBlobExtra")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImageView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              image"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" blob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'No extra named \"'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" iname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\" found in Intent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports}}]);