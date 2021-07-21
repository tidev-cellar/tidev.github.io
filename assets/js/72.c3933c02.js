(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1970:function(e,t,o){"use strict";o.r(t);var i=o(21),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"native-ios-debugging-and-testing-tools"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#native-ios-debugging-and-testing-tools"}},[e._v("#")]),e._v(" Native iOS Debugging and Testing Tools")]),e._v(" "),i("h2",{attrs:{id:"objective"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),i("p",[e._v("In this section, you will about the testing and debugging tools provided as part of the Xcode environment.")]),e._v(" "),i("h2",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),i("p",[e._v("The iOS SDK provides various tools that are useful for debugging native apps. May of them can also be used for your Titanium application development. In this section, we'll take a look at how to view log output within Xcode, view device logs, and view crash logs. We'll introduce, but not dig too deep into the Instruments tool. We'll cover it in more depth in another section.")]),e._v(" "),i("h3",{attrs:{id:"view-log-output-in-console"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#view-log-output-in-console"}},[e._v("#")]),e._v(" View log output in Console")]),e._v(" "),i("p",[e._v("You can use the "),i("strong",[e._v("Console")]),e._v(" application to view log output from an iOS simulator. You can either open the "),i("strong",[e._v("Console")]),e._v(" application from the iOS simulator or through the "),i("code",[e._v("Applications")]),e._v(" folder.")]),e._v(" "),i("p",[e._v("To open "),i("strong",[e._v("Console")]),e._v(" from the iOS simulator, from the menu bar, select "),i("strong",[e._v("Debug")]),e._v(" > "),i("strong",[e._v("Open System Log")]),e._v(" "),i("strong",[e._v("...")]),e._v(".")]),e._v(" "),i("p",[e._v("To open "),i("strong",[e._v("Console")]),e._v(" from the "),i("code",[e._v("Applications")]),e._v(" folder:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Click "),i("strong",[e._v("Applications")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Select "),i("strong",[e._v("Utilities")]),e._v(" > "),i("strong",[e._v("Console")]),e._v("**.app**.")])]),e._v(" "),i("li",[i("p",[e._v("On the left bar, expand "),i("strong",[e._v("iOS Simulator")]),e._v(", then expand the version of the simulator you are using.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("system.log")]),e._v(" item to view the simulator's log output.")])])]),e._v(" "),i("h3",{attrs:{id:"view-log-output-in-xcode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#view-log-output-in-xcode"}},[e._v("#")]),e._v(" View log output in Xcode")]),e._v(" "),i("p",[e._v("You can view log output within Xcode. This includes the same information output to the Studio console. Viewing the Xcode (gdb) console is useful if you build your Titanium app from within Xcode to set project-specific parameters, build options, and so forth. (Keep in mind that you lose Titanium's i18n string handling if you build via Xcode.) It would also be useful when debugging a native iOS module for Titanium.")]),e._v(" "),i("p",[e._v("To view log output in Xcode:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Build your project via Studio, then close the simulator.")])]),e._v(" "),i("li",[i("p",[e._v("Open "),i("code",[e._v("yourproject/build/iphone/yourproject.xcodeproj")]),e._v(" (e.g. "),i("code",[e._v("KitchenSink.xcodeproj")]),e._v(") in Xcode.")])]),e._v(" "),i("li",[i("p",[e._v("Build and run the project within Xcode. Log output is shown in the Console output panel.")])])]),e._v(" "),i("p",[i("img",{attrs:{src:o(750),alt:"Xcode9Console"}})]),e._v(" "),i("h3",{attrs:{id:"view-log-output-on-a-connected-device"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#view-log-output-on-a-connected-device"}},[e._v("#")]),e._v(" View log output on a connected device")]),e._v(" "),i("p",[e._v("A more useful technique is to view the logging messages that are generated by an app running on a connected iOS device. You can do this via the Console view in the Xcode Organizer or using the macOS system Console. The console displays Titanium logging messages, plus iOS system messages that might provide additional useful information.")]),e._v(" "),i("p",[e._v("To view the console output of a connected device:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Connect your device.")])]),e._v(" "),i("li",[i("p",[e._v("Build and deploy the app to the device using either the CLI ("),i("code",[e._v("appc run -p ios -T device")]),e._v(") or Studio.")])]),e._v(" "),i("li",[i("p",[e._v("Sync the application to the device using the "),i("a",{attrs:{href:"https://support.apple.com/downloads/iPhone-Configuration-Utility",target:"_blank",rel:"noopener noreferrer"}},[e._v("iPhone Configuration Utility"),i("OutboundLink")],1),e._v(" (if you are not building directly to device).")])]),e._v(" "),i("li",[i("p",[e._v("Launch Xcode.")])]),e._v(" "),i("li",[i("p",[e._v("Open the "),i("strong",[e._v("Devices")]),e._v(" window. From the menu, select "),i("strong",[e._v("Window")]),e._v(" > "),i("strong",[e._v("Devices and Simulators")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Select your device from the left bar.")])]),e._v(" "),i("li",[i("p",[e._v("Click the "),i("strong",[e._v("Open Device")]),e._v(" button to show the console.")])])]),e._v(" "),i("p",[i("img",{attrs:{src:o(751),alt:"Xcode9Devices"}})]),e._v(" "),i("h3",{attrs:{id:"view-crash-logs-on-a-device"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#view-crash-logs-on-a-device"}},[e._v("#")]),e._v(" View crash logs on a device")]),e._v(" "),i("p",[e._v("You can view crash logs generated when an app running on your device crashes. That data is not hugely useful for debugging Titanium apps because it will include native object related logging messages, not Titanium logging output. That crash data will be tied to the Titanium module (object) that was involved with running your code rather than your JavaScript. This sort of logging information would be most useful when debugging a native iOS module for Titanium.")]),e._v(" "),i("p",[e._v("To view the crash log of a connected device:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Connect your device.")])]),e._v(" "),i("li",[i("p",[e._v("Launch Xcode.")])]),e._v(" "),i("li",[i("p",[e._v("Open the "),i("strong",[e._v("Devices")]),e._v(" window. From the menu, select "),i("strong",[e._v("Window")]),e._v(" > "),i("strong",[e._v("Devices and Simulator")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Select your device from the left bar.")])]),e._v(" "),i("li",[i("p",[e._v("Click the "),i("strong",[e._v("View")]),e._v(" "),i("strong",[e._v("Device Logs")]),e._v(" button.")])]),e._v(" "),i("li",[i("p",[e._v("In the list of available log files, select your app. There might be more than one file for your app, one for each time it has crashed.")])])]),e._v(" "),i("h3",{attrs:{id:"instruments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#instruments"}},[e._v("#")]),e._v(" Instruments")]),e._v(" "),i("p",[e._v("Instruments is a tool for memory monitoring and profiling. It can be a very useful tool for profiling your app to determine if there are memory leaks and perhaps to discover the causes of poor performance. We'll cover this tool in depth in the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Managing_Memory_and_Finding_Leaks/"}},[e._v("Managing Memory and Finding Leaks")]),e._v(" section.")],1),e._v(" "),i("h3",{attrs:{id:"simulate-cellular-network-conditions-with-the-network-link-conditioner"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simulate-cellular-network-conditions-with-the-network-link-conditioner"}},[e._v("#")]),e._v(" Simulate cellular network conditions with the Network Link Conditioner")]),e._v(" "),i("p",[e._v("You should test your app under less-than-ideal conditions so that you know how it will react as users go into roaming mode, operate over low-speed data networks, and so forth. If they run your app in such a state, your app should react appropriately rather than crashing. You can simulate slow, noisy, and lossy networks by using the Network Link Conditioner preferences tool included with macOS.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(752),alt:"NetworkLinkConditioner"}})]),e._v(" "),i("p",[e._v("Network Link Conditioner might not be installed by default. To install it:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Click the Spotlight (magnifying glass) icon and enter "),i("strong",[e._v("Network Link Conditioner")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("When prompted, select "),i("strong",[e._v("Install for all users of this computer")]),e._v(" and click "),i("strong",[e._v("Install")]),e._v(". Enter your password.")])]),e._v(" "),i("li",[i("p",[e._v("Select the profile that represents the network conditions you'd like to simulate.")])]),e._v(" "),i("li",[i("p",[e._v("Click the lock and enter your password.")])]),e._v(" "),i("li",[i("p",[e._v("Turn the link conditioner on.")])])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),i("p",[e._v("Once installed, you can access the Network Link Conditioner via the System Preferences application.")])]),e._v(" "),i("p",[e._v("Once you turn on link conditioning, your network speed will throttled to the level defined by the profile you selected. At this point, you can test your app in the Simulator under conditions that more realistically reflect the real world.")]),e._v(" "),i("p",[e._v("Because the network throttling applies to your entire system, any macOS tasks you have running that use the network will also be throttled. This might include your email application, web browser, or streaming music player. Incidentally, this means you can use the Network Link Conditioner to test Android apps running in the emulator; it too will see network access throttled as you specified.")]),e._v(" "),i("p",[e._v("If the default network condition profiles don't meet your needs, you can create a custom network profile. You might use a custom profile to specify certain conditions, such as packet loss, upload or download delays, and so forth.")]),e._v(" "),i("h3",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Apple Developer docs: "),i("a",{attrs:{href:"http://developer.apple.com/library/IOs/#documentation/Xcode/Conceptual/ios_development_workflow/130-Debugging_Applications/debugging_applications.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Viewing Console Output and Device Logs"),i("OutboundLink")],1)])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"http://titaniumninja.com/simulating-slow-network-links-on-os-x/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simulating slow network connections"),i("OutboundLink")],1),e._v(" with "),i("code",[e._v("ifpw")]),e._v(" for macOS.")])])]),e._v(" "),i("h2",{attrs:{id:"summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),i("p",[e._v("In this section, you learned that how to view log messages on a connected device, how to view crash logs, and how to view logging messages within Xcode. Of these, viewing log messages from a device is the technique most applicable to debugging Titanium JavaScript issues. The other techniques are better suited to module development.")])])}),[],!1,null,null,null);t.default=n.exports},750:function(e,t,o){e.exports=o.p+"assets/img/Xcode9Console.9f32e963.png"},751:function(e,t,o){e.exports=o.p+"assets/img/Xcode9Devices.594253b3.png"},752:function(e,t,o){e.exports=o.p+"assets/img/NetworkLinkConditioner.9781bb11.png"}}]);