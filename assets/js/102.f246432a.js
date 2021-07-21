(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1784:function(e,t,o){"use strict";o.r(t);var a=o(21),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-new-titanium-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-titanium-module"}},[e._v("#")]),e._v(" Creating a New Titanium Module")]),e._v(" "),a("p",[e._v("This guide details the module creation process inside Appcelerator Studio. For more information on what methods and properties are available as part of the module API and specific platform notes, see the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/"}},[e._v("Android Module Development Guide")]),e._v(" and "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/iOS_Module_Development_Guide/"}},[e._v("iOS Module Development Guide")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"preparing-appcelerator-studio-for-module-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparing-appcelerator-studio-for-module-creation"}},[e._v("#")]),e._v(" Preparing Appcelerator Studio for Module Creation")]),e._v(" "),a("p",[e._v("If you are going to be creating Android modules, you will need to install Java support inside Appcelerator Studio. See "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Installing_the_Java_Development_Tools/"}},[e._v("Installing the Java Development Tools")]),e._v(" for the brief steps if you have not already done so.")],1),e._v(" "),a("h3",{attrs:{id:"for-android-module-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-android-module-development"}},[e._v("#")]),e._v(" For Android Module Development")]),e._v(" "),a("p",[e._v("You will need to install the Android NDK. Download the appropriate .zip file from "),a("a",{attrs:{href:"http://developer.android.com/sdk/ndk/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://developer.android.com/sdk/ndk/index.html"),a("OutboundLink")],1),e._v(" and extract it to some location on disk. Remember this location.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),a("p",[e._v("As an additional note, you need to make sure the path to your Studio workspace does not contain spaces. See "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Switching_your_Workspace/"}},[e._v("Switching your Workspace")]),e._v(" for how to switch your workspace location. You can then import your projects from the old to the new workspace. This is a limitation of the Android NDK")],1)]),e._v(" "),a("h2",{attrs:{id:"creating-a-new-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-module"}},[e._v("#")]),e._v(" Creating a New Module")]),e._v(" "),a("p",[e._v("Creating a new module is accomplished by running through a wizard. Below summarizes the properties required, and a description of the values.")]),e._v(" "),a("table",{staticClass:"confluenceTable"},[a("thead",{staticClass:" "}),a("tfoot",{staticClass:" "}),a("tbody",{staticClass:" "},[a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("Property")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("Description/Purpose")])])]),a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("moduleid")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("This is a read-only module id of your module that is generated when you created your project. You should not edit this value.")]),a("div",{staticClass:"confbox admonition admonition-note aui-message warning shadowed information-macro"},[a("p",[e._v("You must generate a unique id. We recommend using your reverse-DNS company name + module_name as a pattern to guarantee uniqueness. If you must edit this value, you must also edit the value in your module implementation file.")])])])]),a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("version")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("This is the version of your module. You should change this value each time you make major changes and distribute them. Version should be in the dotted notation (X.Y.Z) and must not con-tain any spaces or non-number characters.")])])]),a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("description")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("This is a human-readable description of your module. It should be short and suitable for display next to your module name.")])])]),a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("author")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v('This is a human-readable author name you want to display next to your module. It can simply be your personal name or an organizational name such as "Appcelerator".')])])]),a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("license")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v('This is a human-readable name of your license. You should use a short description such as "Apache Public License" or "Commercial".')])])]),a("tr",[a("td",{staticClass:"confluenceTh",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v("copyright")])]),a("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[a("p",[e._v('This is a human-readable copyright string for your module. For example, "Copyright (c) 2010 by Appcelerator, Inc."')])])])])]),e._v(" "),a("h3",{attrs:{id:"module-creation-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-creation-steps"}},[e._v("#")]),e._v(" Module Creation Steps")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open "),a("strong",[e._v("File > New > Mobile Module Project")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Choose a project name, a module ID, and a deployment target (native platform).")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Fill out the remainder of the items on the next page.")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(574),alt:"New_Titanium_Mobile_Module_Project_2"}})])])]),e._v(" "),a("p",[e._v("Your module is created. Note the two different folder structures, depending on the platform.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("You may need to refresh your project to show missing files. See related ticket "),a("a",{attrs:{href:"http://jira.appcelerator.org/browse/TISTUD-948",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://jira.appcelerator.org/browse/TISTUD-948"),a("OutboundLink")],1),e._v(". For Android, you may also need to manually add JARs to your build path. See related ticket "),a("a",{attrs:{href:"http://jira.appcelerator.org/browse/TIMOB-6839",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://jira.appcelerator.org/browse/TIMOB-6839"),a("OutboundLink")],1),e._v(" for the workaround.")])]),e._v(" "),a("h2",{attrs:{id:"building-packaging-a-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-packaging-a-module"}},[e._v("#")]),e._v(" Building/Packaging a Module")]),e._v(" "),a("p",[e._v("Choose "),a("strong",[e._v("Deploy")]),e._v(" > "),a("strong",[e._v("Package - iOS")]),e._v(" "),a("strong",[e._v("Module")]),e._v(" or "),a("strong",[e._v("Package - Android Module")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(575),alt:"Screen_Shot_2011-11-08_at_9.48.29_PM"}})]),e._v(" "),a("p",[e._v("You may then choose to deploy the module for all projects, or for a specific project. This follows the installation rules as noted in "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/"}},[e._v("Using Titanium Modules")]),e._v(", though to summarize:")],1),e._v(" "),a("ul",[a("li",[a("p",[e._v("For all projects: the module .zip file is dropped at the root of the the Titanium SDK installation location.")])]),e._v(" "),a("li",[a("p",[e._v("For a particular project: The module .zip file is dropped at the root of your project.")])])]),e._v(" "),a("h3",{attrs:{id:"troubleshooting-build-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-build-errors"}},[e._v("#")]),e._v(" Troubleshooting Build Errors")]),e._v(" "),a("h4",{attrs:{id:"your-android-application-project-path-contains-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#your-android-application-project-path-contains-spaces"}},[e._v("#")]),e._v(" Your Android application project path contains spaces")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[exec] Android NDK: Your Android application project path contains spaces: '/Users/username/Documents/Aptana Studio 3 Workspace/testModule/build/generated'\n[exec] Android NDK: The Android NDK build cannot work here. Please move your project to a different location.\n[exec] /Users/username/Documents/android-ndk-r7/build/core/build-local.mk:109: *** Android NDK: Aborting.    .  Stop.\n")])])]),a("p",[e._v("You need to change your Studio workspace to not have spaces in the path. See the top of the page for information on how to do that.")]),e._v(" "),a("h4",{attrs:{id:"android-ndk-property-is-not-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk-property-is-not-set"}},[e._v("#")]),e._v(" Android.ndk property is not set")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BUILD FAILED\n/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/module/android/build.xml:192: The following error occurred while executing this line:\n/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/module/android/build.xml:175: Neither the ANDROID_NDK environment variable, or the android.ndk property is not set to an existing Android NDK installation (check your module's build.properties)\n")])])]),a("p",[e._v("If you see this, you need to add android.ndk to the build.properties file. Set it to the path where you installed the NDK to begin with.")]),e._v(" "),a("h2",{attrs:{id:"using-your-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-your-module"}},[e._v("#")]),e._v(" Using Your Module")]),e._v(" "),a("p",[e._v("Follow the instructions in "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/"}},[e._v("Using Titanium Modules")]),e._v(" for more information.")],1)])}),[],!1,null,null,null);t.default=r.exports},574:function(e,t,o){e.exports=o.p+"assets/img/New_Titanium_Mobile_Module_Project_2.fc4e799f.png"},575:function(e,t,o){e.exports=o.p+"assets/img/Screen_Shot_2011-11-08_at_9.48.29_PM.65afc865.png"}}]);