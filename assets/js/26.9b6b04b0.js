(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2050:function(e,t,a){"use strict";a.r(t);var o=a(21),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ios-launch-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-launch-files"}},[e._v("#")]),e._v(" iOS Launch Files")]),e._v(" "),o("h2",{attrs:{id:"what-this-guide-is-about"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-this-guide-is-about"}},[e._v("#")]),e._v(" What this guide is about")]),e._v(" "),o("p",[e._v("This guide walks you through using Launch Files instead of traditional Launch Images for iOS. It was originally published as "),o("a",{attrs:{href:"http://www.appcelerator.com/blog/2016/02/titanium-5-2-0-launch-files-ipad-pro-slide-over-and-split-view/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post"),o("OutboundLink")],1),e._v(" and is illustrated by the "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium 5.2.0 Sample App"),o("OutboundLink")],1),e._v(" .")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Minimum Titanium SDK version:")]),e._v(" 5.2.0")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Minimum iOS SDK version:")]),e._v(" 8.0")])])]),e._v(" "),o("h2",{attrs:{id:"what-are-launch-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-launch-files"}},[e._v("#")]),e._v(" What are Launch Files?")]),e._v(" "),o("p",[e._v("Until now, you used to create a bunch of "),o("code",[e._v("Default*.png")]),e._v(" Launch Images. In iOS 8 Apple introduced "),o("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/LaunchImages.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Launch Files"),o("OutboundLink")],1),e._v(". These are the same XIB files or Storyboards that you’d normally build you UI with in Xcode. This means you can use any iOS UI component and only need one file to support all devices. When you app first runs, iOS takes a snapshot image of the launch file to use as launch image. A great way to slim down your IPA!")]),e._v(" "),o("h2",{attrs:{id:"why-use-launch-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-use-launch-files"}},[e._v("#")]),e._v(" Why use Launch Files?")]),e._v(" "),o("p",[e._v("The iPad Pro no longer supports Launch Images. Without it, a (Titanium) iOS app will be stretched to fit the iPad Pro:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(899),alt:"ipadpro"}})]),e._v(" "),o("p",[e._v("Split View and Slide Over for the iPad also requires Launch Files. Since your app might now be opened as Slide Over in either landscape or portrait you would otherwise need 6 more launch images to cover the different sizes of iPad screens out there.")]),e._v(" "),o("p",[e._v("Launch Files allow you to strip down the size of your final "),o("code",[e._v(".ipa")]),e._v(" considerably. You only need a single storyboard and a logo in a handful of densities to cover all iOS devices.")]),e._v(" "),o("h2",{attrs:{id:"how-to-enable-launch-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-launch-files"}},[e._v("#")]),e._v(" How to enable Launch Files?")]),e._v(" "),o("p",[e._v("You have two ways to use Launch Files: with our builtin Storyboard or your own.")]),e._v(" "),o("p",[e._v("Both need to be enabled in the "),o("code",[e._v("<ios>")]),e._v(" section of your "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520/blob/master/tiapp.xml#L28",target:"_blank",rel:"noopener noreferrer"}},[e._v("tiapp.xml"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("p",[o("strong",[e._v("tiapp.xml")])]),e._v(" "),o("div",{staticClass:"language-xml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-xml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("enable-launch-screen-storyboard")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("true"),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("enable-launch-screen-storyboard")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),o("p",[e._v("The templates for new Titanium projects have this property enabled by default.")]),e._v(" "),o("h3",{attrs:{id:"option-a-use-the-builtin-storyboard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-a-use-the-builtin-storyboard"}},[e._v("#")]),e._v(" Option A: Use the builtin Storyboard")]),e._v(" "),o("p",[e._v("The builtin Storyboard features a centered image on a solid background color. The sample uses the builtin storyboard with a "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520/tree/master/app/assets/iphone",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom image"),o("OutboundLink")],1),e._v(" on an "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520/blob/master/tiapp.xml#L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("Appcelerator red Background Color"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("p",[o("img",{attrs:{src:a(900),alt:"launch-builtin"}})]),e._v(" "),o("h4",{attrs:{id:"customising-the-image"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customising-the-image"}},[e._v("#")]),e._v(" Customising the image")]),e._v(" "),o("p",[e._v("By default we’ll generate the image from "),o("code",[e._v("DefaultIcon[-ios].png")]),e._v(". To use a different image, add the following "),o("code",[e._v("LaunchLogo*.png")]),e._v(" files to the "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520/tree/master/app/assets/iphone",target:"_blank",rel:"noopener noreferrer"}},[e._v("app/assets/iphone"),o("OutboundLink")],1),e._v(" folder:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Filename")]),e._v(" "),o("th",[e._v("Scale")]),e._v(" "),o("th",[e._v("Size")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("LaunchLogo~iphone.png")]),e._v(" "),o("td",[e._v("1x")]),e._v(" "),o("td",[e._v("320×320")])]),e._v(" "),o("tr",[o("td",[e._v("LaunchLogo@2x~iphone.png")]),e._v(" "),o("td",[e._v("2x")]),e._v(" "),o("td",[e._v("374×374")])]),e._v(" "),o("tr",[o("td",[e._v("LaunchLogo@3x~iphone.png")]),e._v(" "),o("td",[e._v("3x")]),e._v(" "),o("td",[e._v("621×621")])]),e._v(" "),o("tr",[o("td",[e._v("LaunchLogo~ipad.png")]),e._v(" "),o("td",[e._v("1x")]),e._v(" "),o("td",[e._v("384×384")])]),e._v(" "),o("tr",[o("td",[e._v("LaunchLogo@2x~ipad.png")]),e._v(" "),o("td",[e._v("2x")]),e._v(" "),o("td",[e._v("1024×1024")])])])]),e._v(" "),o("p",[e._v("You can generate these images with TiCons "),o("a",{attrs:{href:"http://ticons.fokkezb.nl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://www.npmjs.com/package/ticons",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI"),o("OutboundLink")],1),e._v(" "),o("code",[e._v("--storyboard")]),e._v(" option.")]),e._v(" "),o("h4",{attrs:{id:"customising-the-background-color"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customising-the-background-color"}},[e._v("#")]),e._v(" Customising the background color")]),e._v(" "),o("p",[e._v("By default the background color is white. You can set a different color via the "),o("code",[e._v("<ios>")]),e._v("section of your "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520/blob/master/tiapp.xml#L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("tiapp.xml"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("p",[o("strong",[e._v("tiapp.xml")])]),e._v(" "),o("div",{staticClass:"language-xml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-xml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("default-background-color")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("#C7172C"),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("default-background-color")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),o("p",[e._v("This will also change the background color of your app between after the launch files is dismissed and before a view (with a solid background color) is opened, or "),o("a",{attrs:{href:"#!/api/Titanium.UI-property-backgroundColor"}},[e._v("Ti.UI.backgroundColor")]),e._v(" is set. The sample "),o("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/appc-sample-ti520/blob/master/app/controllers/index.js#L23-L30",target:"_blank",rel:"noopener noreferrer"}},[e._v("opens with a 2s delay"),o("OutboundLink")],1),e._v(" so you can see this better.")]),e._v(" "),o("h3",{attrs:{id:"option-b-use-a-custom-storyboard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-b-use-a-custom-storyboard"}},[e._v("#")]),e._v(" Option B: Use a custom Storyboard")]),e._v(" "),o("p",[e._v("To use a custom Storyboard, put this file in "),o("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/blob/master/iphone/iphone/LaunchScreen.storyboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("app/platform/ios/LaunchScreen.storyboard"),o("OutboundLink")],1),e._v(" (for Alloy projects) or "),o("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/blob/master/iphone/iphone/LaunchScreen.storyboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("platform/ios/LaunchScreen.storyboard"),o("OutboundLink")],1),e._v(" (for classic projects). As you can see the sample has it disabled using a "),o("code",[e._v("_")]),e._v(" prefix. Just remove the underscore and do a clean build to see the difference:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(901),alt:"launch-custom"}})]),e._v(" "),o("p",[e._v("As you can see I’ve used an iOS Activity Indicator. Notice that it is not spinning as iOS uses a snapshot image of the storyboard.")]),e._v(" "),o("h4",{attrs:{id:"using-images"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-images"}},[e._v("#")]),e._v(" Using images")]),e._v(" "),o("p",[e._v("To use an image in your custom Storyboard, simply set the "),o("code",[e._v("Image")]),e._v(" property of an "),o("em",[e._v("Image View")]),e._v(" to the path under "),o("code",[e._v("app/assets/")]),e._v(" without the image modifier ("),o("code",[e._v("~ipad")]),e._v(", "),o("code",[e._v("@2x")]),e._v(") or extension:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(902),alt:"image"}})]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-20429",target:"_blank",rel:"noopener noreferrer"}},[e._v("Currently"),o("OutboundLink")],1),e._v(" Titanium does not package the "),o("code",[e._v("LaunchLogo*.png")]),e._v(" file if you use a custom storyboard. You need to rename this image before you can use it.")])]),e._v(" "),o("p",[o("strong",[e._v("Important")]),e._v(": If you have the "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/#use-app-thinning"}},[e._v("use-app-thinning")]),e._v(" enabled, you will have to use the name of the generated asset catalog. This is a hash based on the image path. To find out the hash for your image build the app, look up the right "),o("code",[e._v("[hash].imageset")]),e._v(" under "),o("code",[e._v("build/iphone/Assets.xcassets/")]),e._v(" and use the "),o("code",[e._v("[hash]")]),e._v(" part.")],1),e._v(" "),o("h2",{attrs:{id:"advanced-use-cases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advanced-use-cases"}},[e._v("#")]),e._v(" Advanced use-cases")]),e._v(" "),o("p",[e._v("Using native Storyboards, you can even do complex complex layouts inside your launch-screen, for example split-screen layouts. To do so, open the "),o("code",[e._v("LaunchScreen.storyboard")]),e._v(' in Xcode and start adding UI-elements from the bottom right "Object library":')]),e._v(" "),o("p",[o("img",{attrs:{src:a(903),alt:"SplitScreenStoryboard"}})]),e._v(" "),o("p",[e._v('Now drag the "Split View Controller" element to the center, remove the old "View Controller" and set the Split View Controller as the "Initial View Controller". Finally, add a label to the detail-view by searching and dragging the "Label" object into your space:')]),e._v(" "),o("p",[o("img",{attrs:{src:a(904),alt:"InitialVC"}})]),e._v(" "),o("p",[e._v('Thats it! Save the storyboard, clean the build directory and cache (see chapter below) and run your app. If you want to include images, make sure to check the "'),o("strong",[e._v("Use images")]),e._v('" paragraph above to handle image hashes.')]),e._v(" "),o("h2",{attrs:{id:"dealing-with-launch-file-cache"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-launch-file-cache"}},[e._v("#")]),e._v(" Dealing with Launch File cache")]),e._v(" "),o("p",[e._v("As you modify the (custom) storyboard, you might not always see your changes immediately. This is because iOS caches the snapshot it makes from your Launch File and a "),o("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-20430",target:"_blank",rel:"noopener noreferrer"}},[e._v("known issue"),o("OutboundLink")],1),e._v(" where Titanium does not always recompile the storyboard.")]),e._v(" "),o("p",[e._v("To deal with this follow these steps before you build:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Use "),o("em",[e._v("Simulator > Reset Content and Settings…")])])]),e._v(" "),o("li",[o("p",[e._v("Use "),o("em",[e._v("Project > Clean…")]),e._v(" or "),o("code",[e._v("appc ti clean")]),e._v(" from CLI.")])])]),e._v(" "),o("p",[e._v("Alternatively you can reset an individual app using a tool like "),o("a",{attrs:{href:"https://simpholders.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SimPholders"),o("OutboundLink")],1),e._v(". With this app, just hold "),o("code",[e._v("alt/⌥")]),e._v(" and click the app from the dropdown:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(905),alt:"simpholders"}})])])}),[],!1,null,null,null);t.default=s.exports},899:function(e,t,a){e.exports=a.p+"assets/img/ipadpro.0d753272.png"},900:function(e,t,a){e.exports=a.p+"assets/img/launch-builtin.36c93aa3.png"},901:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAFkCAYAAABl8XS/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAUjElEQVR4Ae2aaahVZRuG36PHeTZn0xwqTZstiiysqGywIoogqKg/QWT9KOhHEEhUvxr+RTSSRYZBUVipYdo8QBSWkFIOiGNqmvO4vvW8tnb7pPY931fnnJv9XAu2Zw/P3ut5r3tf633X2jallIryVtsGDBiQmpqa0q+//lp77mh3OnbsmHr06JF+//33o73c4rlhw4alTp06paIo8m3Dhg1p3759eT/2XKNvxnPo0KFp9+7d6bfffmsx3F69euXH27dvT/369UvdunVLa9eurdUcd9xxqbm5OW3evDkdOnQoWf22bdvy67179067du1KBw4cqNVz50gCnTt3ToMGDUr2nT3W980ysu/k+vXrj6ixb2i+lQHV7pdf/qJLly5Fnz59ijKgfCvDKcoven6uek+506IMqujatWt+r9VU98udFva4qq3/271796M+X1/TCPc7dOhQ2K0aS3kAKsovfWFsjFv1/ODBg2v3qxyMbfW6ZVDdN76WTfW4vq56jr+Hv9P13LxM6vNq+uNNeTbYuXNnuuWWW/LRfubMmeVLx9569uyZLr/88vTOO+/kI5tV2tHNjoS2lSHmI5sd3aZPn57OPffc/LnLli1LM2bMyDX2GTt27Mj3G/EfO2IdPHgwD+2+++5LP/74Y/roo49aDHXkyJF5dvn666/TFVdckcaMGZOeffbZVB5A8uxgjI8//vj08ssv5/edcMIJadWqVfn+wIED8+yybt26MLNxC3j/5YGtWvbv359OP/30zNa+kzYL/3WzWcVm6a1bt6ZZs2bl2dpmlKq2GDJkSD4aPfTQQ8Wrr75avPDCC8Xjjz+en7vppptqR6rLLrusmDBhQlHusLjmmmuK22+/Pb9WBlucdNJJ+f75559fTJkypfael156qVi0aFHx2muvFa+//nrx/vvvF3Pnzq3NQjZTlQ035K38AudxPf3008V7771XLFiwoLjjjjuKBx54oJg4cWJ+7dtvvy1mz55dnHfeecXChQvz7ZlnnsmvXX/99UUpTlEehIo333yzuOeee4ryAFNMnjy5GDt2bL5fHnxybZVho7L8f8Y1YsSIzOaRRx4pygN16UFRlF/6I27lQSy/tnHjxuKiiy7K7ymXZPlvczmd5HWXWXXGGWekMpz08ccfp+uuuy7dddddqQwjG2hr4zKEtHjx4nTBBRekTz75JNka+N57701nnnlmXr/ZEfLKK69M7777bv6Mvn37pjlz5uTnqjW4zVLz58/P621bS5vhjbjZEWjLli15aG+//XaaNGlSuvHGG/NRqVy2JptJS3HSmjVraucQNsuUEiSbVWyzGcJmoCeffDLXrlixIjM3xsbRzk8sP9tsf2wtCdgMbpvNxna/tKBlQfnIuFXP29+bb745nXLKKem55547zPevYKuT7u+++y6V6+JUWpVOPvnkHMy8efOyCBZUOQvkIC+88MK0adOmPC2NGjUqT//PP/98XhbYl/+tt95Kn376aV5K2Un9V199lez1lStX5sbtxKhRN/ty20HElkB20WPv3r15OWUHkDvvvDOVs0ZeRp144onJlliXXHJJsgsa06ZNy0iMvUny2GOP5aWZPV6yZEk+IJWzdPrhhx8yw0bl90/HVX236//a/fqb7aM6yFRC1e+32UK0mcHO3u2odv/99+crU3bVxNa+9mb7EtsVGPtr9Xb0Mist8OXLl2fjLCz7DFtD22brN6sbN25cKpdtedaxK2R2NLSZxT6nOl+pb6iR7tsR3jjamPv3759Z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"},902:function(e,t,a){e.exports=a.p+"assets/img/image.7df29c4e.png"},903:function(e,t,a){e.exports=a.p+"assets/img/SplitScreenStoryboard.f165d95a.png"},904:function(e,t,a){e.exports=a.p+"assets/img/InitialVC.819786cd.png"},905:function(e,t,a){e.exports=a.p+"assets/img/simpholders.06641bd7.png"}}]);