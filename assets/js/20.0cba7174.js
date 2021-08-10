(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1939:function(e,t,i){"use strict";i.r(t);var o=i(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"distributing-ios-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distributing-ios-apps"}},[e._v("#")]),e._v(" Distributing iOS apps")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("In this section, you will learn how to distribute your iOS application. Apple provides three ways to distribute your application based on which developer program you are a member of:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("App Store or iTunes Store")]),e._v(": Publish your application to the iTunes Store.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("In House")]),e._v(": Publish your application in house for your company's employees. Members of the Apple Developer Enterprise program see this option instead of the App Store option.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Ad Hoc")]),e._v(": Publish your application as a package that can be distributed on a limited number of devices for testing.")])])]),e._v(" "),o("p",[e._v("Both work flows are similar except ad hoc distribution requires you to specify a list of devices when creating your provisioning profile and you need to specify two extra options (file format and location) when packaging your application with Studio.")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("p",[e._v("Publishing your iOS application involves a few, somewhat involved steps. Fortunately, you have done two of these steps already if you have deployed your app to a device for testing. The steps are:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Register with the iOS Developer Center")])]),e._v(" "),o("li",[o("p",[e._v("Create an App ID in the iOS Certificates, Identifiers & Profiles page")])]),e._v(" "),o("li",[o("p",[e._v("Create and install the distribution certificate")])]),e._v(" "),o("li",[o("p",[e._v("Create and install a distribution provisioning profile")])]),e._v(" "),o("li",[o("p",[e._v("Build your app, embedding the distribution provisioning profile")])]),e._v(" "),o("li",[o("p",[e._v("Upload the app to iTunes Connect and kick-off the Apple review process "),o("strong",[e._v("OR")]),e._v(" distribute your application package.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:i(720),alt:"ios_publishing_process"}})]),e._v(" "),o("h3",{attrs:{id:"registering-and-creating-the-app-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registering-and-creating-the-app-id"}},[e._v("#")]),e._v(" Registering and creating the App ID")]),e._v(" "),o("p",[e._v("By now, you should have registered for the "),o("a",{attrs:{href:"http://developer.apple.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS developer program"),o("OutboundLink")],1),e._v(". And you should have tested your app on a device, which means you've created an App ID on the iOS Certificates, Identifiers & Profiles page. If you plan to sell your app, rather than distribute it for free, you need to register on the iTunes Connect site and supply legal and banking information to Apple. They must verify your legal status and banking info. That process can take as much as a week or more.")]),e._v(" "),o("p",[e._v("An App ID is a unique identifier for your app. It is composed of two parts: the App ID Prefix and the App ID Suffix. The App ID Prefix is a 10-character hexadecimal string generated by the iOS Certificates, Identifiers & Profiles page. It is unique to you and your developer account. The App ID Suffix is a name you enter called the Bundle Identifier.")]),e._v(" "),o("p",[e._v("The Bundle Identifier can be explicit, meaning you enter a name on the iOS Certificates, Identifiers & Profiles page and enter that exact same identifier as the App ID of your application. You can also create a wildcard Bundle Identifier. Wildcard Bundle IDs are great for quick development – you do not have to create a new ID for each and every app you test. However, you cannot use some iOS features with a wildcard ID. You must create an explicit Bundle ID if you plan to use push notifications, iAd, or Game Center features.")]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/#create-an-app-id"}},[e._v("Deploying to iOS devies: Create an App ID")]),e._v(" for step-by-step instructions on creating an App ID.")],1),e._v(" "),o("h3",{attrs:{id:"create-and-install-the-distribution-certificate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-and-install-the-distribution-certificate"}},[e._v("#")]),e._v(" Create and install the distribution certificate")]),e._v(" "),o("p",[e._v('The distribution certificate attests to the identity of the entity publishing the app. According to Apple: "Only Team Agents are authorized to prepare and submit applications for distribution." The Team Agent is the person at your organization who oversees development and final distribution of your app. While each developer on your team could have their own developer certificate, you or your company will have a single distribution certificate. This arrangement enables you to add or remove people from your development team, while not giving those folks the means to publish your final app. That will be controlled by you.')]),e._v(" "),o("p",[e._v("The Team Agent will be the user account associated with creation and first-logon to your provisioning portal account.")]),e._v(" "),o("p",[e._v("To create a distribution certificate:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Agent or Admin.")])]),e._v(" "),o("li",[o("p",[e._v("Click the link under "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Certificates")]),e._v(", then click the plus sign (+) button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("App Store and Ad Hoc")]),e._v(", then click "),o("strong",[e._v("Continue")]),e._v("**.**")])]),e._v(" "),o("li",[o("p",[e._v("Follow the directions to create a Certificate Signing Request (CSR). Click "),o("strong",[e._v("Continue")]),e._v("**.**")])]),e._v(" "),o("li",[o("p",[e._v("Upload your CSR and click "),o("strong",[e._v("Generate")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("You will be returned to the Certificates page with the status listed as Pending. Wait a moment then refresh the page in your browser.")])]),e._v(" "),o("li",[o("p",[e._v("Even though you are logged in as the Team Agent or Admin, you will need to approve your certificate. Click "),o("strong",[e._v("Approve")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Download the distribution certificate (.cer) file to your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Double-click the file to install it into your keychain.")])])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("h6",{attrs:{id:"back-up-your-private-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#back-up-your-private-key"}},[e._v("#")]),e._v(" Back Up Your Private Key")]),e._v(" "),o("p",[e._v("It is critical that you save your private key somewhere safe in the event that you need to develop on multiple computers or decide to reinstall your system OS. Without your private key, you will be unable to sign binaries and test your application on any Apple device. The private key was generated by the Keychain application when you created the Certificate Signing Request (CSR). It has the same name as the "),o("strong",[e._v("Common Name")]),e._v(" field when you generated the CSR.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("To export your private key, open up the Keychain Access Application and select "),o("strong",[e._v("login")]),e._v(" under Keychains and "),o("strong",[e._v("Keys")]),e._v(" under Category.")])]),e._v(" "),o("li",[o("p",[e._v("Highlight the private key associated with your iOS Distribution Certificate.")])]),e._v(" "),o("li",[o("p",[e._v("From the menu bar, select "),o("strong",[e._v("File >")]),e._v(" "),o("strong",[e._v("Export Items...")]),e._v(". Save your key in the Personal Information Exchange (.p12) file format.")])]),e._v(" "),o("li",[o("p",[e._v("You will be prompted to create a password which will be used when you attempt to import this key on another computer.")])]),e._v(" "),o("li",[o("p",[e._v("You can now transfer this .p12 file between systems. Double-click on the .p12 file to install it on a system. You will be prompted for the password you entered above.")])])])]),e._v(" "),o("h3",{attrs:{id:"create-and-install-the-distribution-provisioning-profile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-and-install-the-distribution-provisioning-profile"}},[e._v("#")]),e._v(" Create and install the distribution provisioning profile")]),e._v(" "),o("p",[e._v("As with deploying an app for testing, you need to create a provisioning profile file. The distribution provisioning profile gathers together your distribution certificate and App ID. If this is an Ad Hoc provision profile, you also need to specify your devices.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the "),o("a",{attrs:{href:"https://developer.apple.com/membercenter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Developer Member Center"),o("OutboundLink")],1),e._v(" as the Team Agent or Admin.")])]),e._v(" "),o("li",[o("p",[e._v("Click the link under "),o("strong",[e._v("Certificates, Identifiers & Profiles")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Provisioning Profiles")]),e._v(", then click the plus sign (+) button near the top-right corner.")])]),e._v(" "),o("li",[o("p",[e._v("Select either "),o("strong",[e._v("App Store")]),e._v(" to distribute to the App Store, "),o("strong",[e._v("In House")]),e._v(" to distribute in house to your company's employees or "),o("strong",[e._v("Ad Hoc")]),e._v(" to distribute to a limited number of devices, then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select the App ID from the drop-down list, then click "),o("strong",[e._v("Continue")]),e._v(" .")])]),e._v(" "),o("li",[o("p",[e._v("Select the distribution certificate(s) to include, then click "),o("strong",[e._v("Continue")]),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("For ad hoc distributions")]),e._v(" , select the devices you want to be able to run the app on, then click "),o("strong",[e._v("Continue")]),e._v(" .")])]),e._v(" "),o("li",[o("p",[e._v('Enter a name for your provisioning profile. You should use a word like "distribution" or "ad hoc" in the name so that it is clear later that this profile is for final distribution or ad hoc distribution, respectively. Click '),o("strong",[e._v("Generate")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Click "),o("strong",[e._v("Download")]),e._v(" to save your provisioning profile file (.mobileprovision) to your computer, then click "),o("strong",[e._v("Done")]),e._v(".")])])]),e._v(" "),o("p",[e._v("You have two options to install the provisioning profile file onto your development computer. You can drag the file and drop it on the Xcode icon, or you can install it from Studio by following the steps in the following section. Either way, installing the provisioning profile is a one-time operation (on each computer, until it expires).")]),e._v(" "),o("h3",{attrs:{id:"build-your-app-embedding-the-profile-within-the-app-s-bundle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-your-app-embedding-the-profile-within-the-app-s-bundle"}},[e._v("#")]),e._v(" Build your app, embedding the profile within the app's bundle")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("If you are using Mac OS X 10.9 (Mavericks), make sure you grant Studio access to the computer as described in "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/#note-for-mavericks-and-later"}},[e._v("Installing the iOS SDK: Running on Mavericks")]),e._v(".")],1)]),e._v(" "),o("p",[o("img",{attrs:{src:i(721),alt:"DiA_Package"}})]),e._v(" "),o("p",[e._v("Once you are done with the preceding steps, use Studio to build your app for final distribution. To package your application for distribution, first select the project in the "),o("strong",[e._v("Project Explorer")]),e._v(" view, then in the global tool bar, select "),o("strong",[e._v("Package")]),e._v(" from the "),o("strong",[e._v("Launch Mode")]),e._v(" drop-down list. From the "),o("strong",[e._v("Target")]),e._v(" drop-down list, choose "),o("strong",[e._v("iOS iTunes Store")]),e._v(" to distribute to the App Store or "),o("strong",[e._v("iOS")]),e._v(" "),o("strong",[e._v("Ad Hoc/Enterprise")]),e._v(" to distribute to a limited number of devices (ad hoc) or for in-house distribution. If the "),o("strong",[e._v("Launch Automatically")]),e._v(" option is enabled under the "),o("strong",[e._v("Target")]),e._v(" drop-down list, the application will be automatically launched after the target is selected. If not, you need to click the "),o("strong",[e._v("Launch")]),e._v(" button to start the build process.")]),e._v(" "),o("p",[e._v("If you have not previously distributed your app using Studio, you will see the following wizard dialog box. The wizard walks you through the necessary steps to build and distribute your app.")]),e._v(" "),o("p",[e._v("On the "),o("strong",[e._v("General")]),e._v(" page, ensure the requirements have been satisfied and select the desired SDK version. "),o("strong",[e._v("For ad hoc and in-house distribution,")]),e._v(" specify the package format as "),o("strong",[e._v("ipa")]),e._v(" and a path to copy the package to. Click "),o("strong",[e._v("Next")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:i(722),alt:"DiA_Distribute"}})]),e._v(" "),o("p",[e._v("On the "),o("strong",[e._v("Certificates")]),e._v(" page, select your distribution certificate and keychain. Click "),o("strong",[e._v("Next")]),e._v(" to proceed.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(723),alt:"DiA_Certificates"}}),e._v("\nProvisioning profiles are specified on the last page. To install the provisioning profile, click the "),o("strong",[e._v("Browse...")]),e._v(" button, locate your .mobileprovision file, and click "),o("strong",[e._v("Open")]),e._v(" to install that profile into Xcode. If you have installed more than one provisioning profile, make sure to choose the one that corresponds to your app and your distribution certificate. Select a Provisioning Profile and click "),o("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:i(724),alt:"DiA_Provisioning"}})]),e._v(" "),o("p",[e._v("Studio packages your iOS application. For App Store distributions, the final signed IPA file is installed into the "),o("strong",[e._v("Archives")]),e._v(" tab of the Xcode Organizer and should be automatically lauched after building the package. For Ad Hoc distributions, the file is copied to the specified path.")]),e._v(" "),o("p",[e._v("If you get errors, most likely source of trouble is that the app ID you entered in the tiapp.xml file doesn't match your distribution certificate and your provisioning file. Check each carefully to be sure that you're selecting the right requirements.")]),e._v(" "),o("p",[e._v("The next time you execute the Distribute action, you will see a more simplified wizard where you specify the certificate, provisioning profile, and iOS SDK. You can navigate to the iOS Platform preference page to view and modify current iOS platform settings using the "),o("strong",[e._v("Manage settings")]),e._v(" link")]),e._v(" "),o("p",[o("img",{attrs:{src:i(725),alt:"DiA_Simple"}}),e._v(" "),o("img",{attrs:{src:i(726),alt:"DiA_Preferences"}})]),e._v(" "),o("h3",{attrs:{id:"distribute-and-install-your-ad-hoc-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distribute-and-install-your-ad-hoc-application"}},[e._v("#")]),e._v(" Distribute and install your ad hoc application")]),e._v(" "),o("p",[e._v("For Ad Hoc builds, you need to give the provision profile (.mobileprovision) and package to your testers to install it to their device. Their device needs to be included in the provisioning profile for them to use it.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Launch Xcode.")])]),e._v(" "),o("li",[o("p",[e._v("Click on the device you will install the app on.")])]),e._v(" "),o("li",[o("p",[e._v("Under the "),o("strong",[e._v("Installed Apps")]),e._v(" section, click the "),o("strong",[e._v("+")]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("Select your app's IPA file and click "),o("strong",[e._v("Open")]),e._v(".")])])]),e._v(" "),o("p",[e._v("Your app will be installed on your device. See "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/#installing-apps-to-remote-devices"}},[e._v("Deploying to iOS devices: Installing apps to remote devices")]),e._v(" for additional methods of distributing the provision profile and package.")],1),e._v(" "),o("h3",{attrs:{id:"creating-the-app-id-on-itunes-connect"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-app-id-on-itunes-connect"}},[e._v("#")]),e._v(" Creating the App ID on iTunes Connect")]),e._v(" "),o("p",[e._v("The iTunes Connect site is your app distribution management portal for App Store builds. You can get to iTunes Connect from the Apple Developer Member Center site. If you have not done so yet, make sure to set up your iTunes Connect profile and supply the legal and banking information required by Apple. They verify all the documents you supply, a process that can take more than a week in some cases. You will not be able to publish your app until that process is complete.")]),e._v(" "),o("p",[e._v("From the iTunes Connect site, click "),o("strong",[e._v("Manage Your Apps")]),e._v(" then click "),o("strong",[e._v("Add New App")]),e._v(". You need to supply:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Your app's name (by which it will be listed in the App Store).")])]),e._v(" "),o("li",[o("p",[e._v("A SKU number, which is a unique ID for your app. You can use letters, numbers, hyphens, periods, and underscores. The SKU cannot start with a hyphen, period, or underscore.")])]),e._v(" "),o("li",[o("p",[e._v("Select the Bundle ID, which you created in the iOS Certificates, Identifiers & Profiles page.")])]),e._v(" "),o("li",[o("p",[e._v("If the Bundle ID is a Wildcard Bundle Identifier, you need to enter a Bundle ID Suffix, which you entered in the "),o("code",[e._v("tiapp.xml")]),e._v("file as the name portion of the app ID.")])])]),e._v(" "),o("p",[e._v("Through a series of pages, you then define the following information about your app:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The date on which it should be available (defaults to the current date).")])]),e._v(" "),o("li",[o("p",[e._v("The price tier. You do not set a specific price, but instead set a tier. Each tier specifies a selling price in a selection of countries around the world. Optionally, you select specific locales in which your app will be sold.")])]),e._v(" "),o("li",[o("p",[e._v("App metadata:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Version Number")])]),e._v(" "),o("li",[o("p",[e._v("Description (4000 characters max.)")])]),e._v(" "),o("li",[o("p",[e._v("Primary Category")])]),e._v(" "),o("li",[o("p",[e._v("Keywords (100 characters max.)")])]),e._v(" "),o("li",[o("p",[e._v("Copyright")])]),e._v(" "),o("li",[o("p",[e._v("Contact Email Address")])]),e._v(" "),o("li",[o("p",[e._v("Support URL")])])])]),e._v(" "),o("li",[o("p",[e._v("Rating info – you must specify the frequency of certain app characteristics by which Apple judges the age-appropriateness of your app")])]),e._v(" "),o("li",[o("p",[e._v("One (1) high resolution app icon: A large version of your app icon that will be used on the App Store. It must be at least 72 DPI, in the RGB color space, and 1024 x 1024 pixels (it cannot be scaled up). The file type must be .jpeg, .jpg, .tif, .tiff, or .png. It must be flat artwork without rounded corners.")])]),e._v(" "),o("li",[o("p",[e._v("One (1) screenshot of your app:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Screenshots for 3.5-inch iPhone and iPod touch Retina display must be 960x640, 960x600, 640x960 or 640x920 pixels, at least 72 DPI, in the RGB color space, and in the JPG or PNG format.")])]),e._v(" "),o("li",[o("p",[e._v("Screenshots for 4-inch iPhone 5 and iPod touch (5th generation) Retina display must be 1136x640, 1136x600, 640x1136 or 640x1096 pixels, at least 72 DPI, in the RGB color space, and in the JPG or PNG format.")])]),e._v(" "),o("li",[o("p",[e._v("iPad Screenshots must be .jpeg, .jpg, .tif, .tiff, or .png file that is 1024x768, 1024x748, 768x1024, 768x1004, 2048x1536, 2048x1496, 1536x2048 or 1536x2008 pixels, at least 72 DPI, and in the RGB color space.")])])])])]),e._v(" "),o("p",[e._v("As a final step, make sure to click the "),o("strong",[e._v("Ready to Upload Binary")]),e._v(" button. You should see the status of your app change to Waiting for Upload.")]),e._v(" "),o("h3",{attrs:{id:"uploading-your-app-to-itunes-connect"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uploading-your-app-to-itunes-connect"}},[e._v("#")]),e._v(" Uploading your app to iTunes Connect")]),e._v(" "),o("p",[e._v("If you built your app with Studio, it should be stored in the "),o("strong",[e._v("Archives")]),e._v(" tab of the Xcode Organizer. Open that window now and select your app. Click "),o("strong",[e._v("Verify")]),e._v(". You will be prompted for your iTunes Connect user name and password. At this point, Xcode will check for an app definition on iTunes Connect and make sure it matches the app you have created. Both sides of that app need matching names, bundle IDs, and so forth.")]),e._v(" "),o("p",[e._v("Assuming you have passed the verification step, click the "),o("strong",[e._v("Submit")]),e._v(" button. Again, you will be prompted for your iTunes Connect credentials (unless you specified to save them). Xcode makes sure your iTunes Connect app is in the Waiting for Upload state and if so, it will upload your app. This switches your app to the Waiting for Review state. This is the point where your app is submitted to Apple for their review and final approval.")]),e._v(" "),o("h3",{attrs:{id:"app-store-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-store-requirements"}},[e._v("#")]),e._v(" App Store requirements")]),e._v(" "),o("p",[e._v("Apple publishes many guidelines that describe what they look for when deciding to approve an app. We encourage you to "),o("a",{attrs:{href:"http://developer.apple.com/appstore/resources/approval/guidelines.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("read their guidelines"),o("OutboundLink")],1),e._v(" carefully. A few of the requirements include:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Apps must be useful, well-designed, and run without errors")])]),e._v(" "),o("li",[o("p",[e._v("Apps cannot download and execute code")])]),e._v(" "),o("li",[o("p",[e._v("You must own all copyrights and trademarks used within the app and its promotional resources")])]),e._v(" "),o("li",[o("p",[e._v("Apps cannot contain hidden features or use non-public APIs")])])]),e._v(" "),o("h3",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"http://developer.apple.com/library/mac/#documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iTune Connect Developer Guide"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://www.curioustimes.de/iphonesimulatorcropper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS Simulator Cropper"),o("OutboundLink")],1),e._v(", an optional, though helpful tool for capturing iOS simulator screenshots")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"http://itunes.apple.com/us/app/unretiner/id411277085?mt=12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unretiner"),o("OutboundLink")],1),e._v(", a tool for automatically creating non-retina images from retina-resolution (@2x) files.")])])]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("In this section, you learned how to publish your iOS app. You learned how to generate distribution certificate and provisioning required to sign your app. You saw how to build and sign your distribution-ready IPA file. You learned how to create an app ID on iTunes Connect and upload your app for Apple's review. And finally, you examined the App Store and Apple's requirements for acceptance.")])])}),[],!1,null,null,null);t.default=r.exports},720:function(e,t,i){e.exports=i.p+"assets/img/ios_publishing_process.7e3a3ef8.png"},721:function(e,t,i){e.exports=i.p+"assets/img/DiA_Package.50977d9d.png"},722:function(e,t,i){e.exports=i.p+"assets/img/DiA_Distribute.97159666.png"},723:function(e,t,i){e.exports=i.p+"assets/img/DiA_Certificates.f43a5d14.png"},724:function(e,t,i){e.exports=i.p+"assets/img/DiA_Provisioning.e0e3ea77.png"},725:function(e,t,i){e.exports=i.p+"assets/img/DiA_Simple.e5a17ec1.png"},726:function(e,t,i){e.exports=i.p+"assets/img/DiA_Preferences.abbb879b.png"}}]);