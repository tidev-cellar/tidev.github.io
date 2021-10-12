(window.webpackJsonp=window.webpackJsonp||[]).push([[1066],{1981:function(t,a,n){"use strict";n.r(a);var s=n(21),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-angular-routing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-angular-routing"}},[t._v("#")]),t._v(" Titanium Angular Routing")]),t._v(" "),n("p",[t._v("Up to this point most of the Angular concepts are the same as in a normal Angular web application. This makes it possible to share a great part of you application logic within Angular regardless of whether your develop for the web or Titanium apps.")]),t._v(" "),n("p",[t._v("Starting with the application routing however, there are a few fundamental changes. How to setup and use routing in Titanium Angular will be described in detail here. If you haven't dealt with routing in Angular before, the "),n("a",{attrs:{href:"https://angular.io/guide/router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Routing & Navigation"),n("OutboundLink")],1),t._v(" guide is a great read.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Updated Angular Template")]),t._v(" "),n("p",[t._v("The Angular template was recently updated and now already contains a routing setup. The steps described here are now already built-in into the default Angular template and not required anymore. You can still read through this page for additional information about routing and the reasoning behind the implementation details.")])]),t._v(" "),n("h2",{attrs:{id:"setting-up-routing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-routing"}},[t._v("#")]),t._v(" Setting up routing")]),t._v(" "),n("p",[t._v("If you followed our "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Getting_Started_Guide/"}},[t._v("Titanium Angular Getting Started Guide")]),t._v(" and "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Basics/"}},[t._v("Titanium Angular Basics")]),t._v(" guides you noticed that until now everything revolved around the "),n("code",[t._v("app.component.ts")]),t._v(" and "),n("code",[t._v("app.component.html")]),t._v(". Let's change that and move to multiple components and setup the routing for those.")],1),t._v(" "),n("p",[t._v("First, open "),n("code",[t._v("src/app/app.component.ts")]),t._v(" and copy its content to "),n("code",[t._v("src/app/intro.component.ts")]),t._v(". Do the same for "),n("code",[t._v("src/app/app.component.html")]),t._v(" and copy it over to "),n("code",[t._v("src/app/intro.component.html")]),t._v(". Open "),n("code",[t._v("intro.component.ts")]),t._v(" again and change the component name and its template to reflect those recent changes.")]),t._v(" "),n("p",[n("strong",[t._v("intro.component.ts")])]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    templateUrl"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./intro.component.html"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntroComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AfterViewInit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OnInit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Now, open "),n("code",[t._v("app.component.ts")]),t._v(" and replace it with an empty "),n("code",[t._v("AppComponent")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import { Component } from \'@angular/core\';\n\n@Component({\n    selector: "ti-app",\n    templateUrl: "./app.component.html"\n})\nexport class AppComponent { }\n')])])]),n("p",[t._v("After that, open "),n("code",[t._v("app.component.html")]),t._v(" and replace its content with the Titanium router outlet directive.")]),t._v(" "),n("p",[n("strong",[t._v("app.component.html")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ti-router-outlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ti-router-outlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("This is the place where Angular will load the routed views.")]),t._v(" "),n("p",[t._v("To let Angular know which routes your application has, create another file named "),n("code",[t._v("app-routing.module.ts")]),t._v(" and paste the following code into it.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Routes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TitaniumRouterModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'titanium-angular'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IntroComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./intro.component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appRoutes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Routes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirectTo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/intro'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathMatch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'full'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'intro'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IntroComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    imports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TitaniumRouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forRoot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appRoutes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    exports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TitaniumRouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoutingModule")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("This will setup a route for your previously created Intro"),n("code",[t._v("Component")]),t._v(" under the path "),n("code",[t._v("/intro")]),t._v(". It also instructs Angular to load this route upon the initial app launch by setting up a redirect for an empty path string.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("💡 Path routing in Titanium")]),t._v(" "),n("p",[t._v("You may be wondering how routing via paths is working inside a native app. The short answer is that we emulate the browsers "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"}},[t._v("History API"),n("OutboundLink")],1),t._v(" and let Angular's router do its magic to load the configured components. We also make sure to properly handle native navigation events such the Android back button or the iOS swipe left-to-right gesture to trigger a back navigation.")])]),t._v(" "),n("p",[t._v("Finally, open up the "),n("code",[t._v("app.module.ts")]),t._v(" and add imports for the "),n("code",[t._v("AppRoutingModule")]),t._v(" and "),n("code",[t._v("IntroComponent")]),t._v(", add the module to the "),n("code",[t._v("imports")]),t._v(" and the component to the "),n("code",[t._v("declarations")]),t._v(" of the "),n("code",[t._v("AppModule")]),t._v(" configuration. Your "),n("code",[t._v("app.module.ts")]),t._v(" should look like this afterwards:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';\nimport { TitaniumModule } from 'titanium-angular';\n\nimport { AppComponent } from './app.component';\nimport { AppRoutingModule } from './app-routing.module';\nimport { HomeComponent } from './home.component';\n\n@NgModule({\n    imports: [\n        TitaniumModule,\n        AppRoutingModule\n    ],\n    declarations: [\n        AppComponent,\n        HomeComponent\n    ],\n    bootstrap: [AppComponent],\n    schemas: [NO_ERRORS_SCHEMA]\n})\nexport class AppModule { }\n")])])]),n("p",[t._v("You can now build your app again and routing will be enabled. But the app won't be any different than before so let's change that and see the router in action.")]),t._v(" "),n("h2",{attrs:{id:"adding-another-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-another-component"}},[t._v("#")]),t._v(" Adding another component")]),t._v(" "),n("p",[t._v("Now that routing is in place, it is time to add a new component and navigate to it using the Angular Router. Create "),n("code",[t._v("src/app/home.component.ts")]),t._v(" and paste the following code.")]),t._v(" "),n("p",[n("strong",[t._v("home.component.ts")])]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    templateUrl"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./home.component.html"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Since we focus on the routing aspect here, we just use a very simple template. Create "),n("code",[t._v("app/src/home.component.html")]),t._v(" and create the following user interface.")]),t._v(" "),n("p",[n("strong",[t._v("home.component.html")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#fafafa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello World!"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Label")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Now you need to go back to your "),n("code",[t._v("app-routing.module.ts")]),t._v(" and add a route for your newly created component.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Routes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TitaniumRouterModule "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'titanium-angular'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IntroComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./intro.component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./home.component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appRoutes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Routes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirectTo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/intro'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathMatch"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'full'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'intro'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IntroComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HomeComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    imports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TitaniumRouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forRoot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appRoutes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    exports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TitaniumRouterModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppRoutingModule")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("After that, go to your "),n("code",[t._v("app.module.ts")]),t._v(" and add the HomeComponent to the declarations property.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';\nimport { TitaniumModule } from 'titanium-angular';\n\nimport { AppComponent } from './app.component';\nimport { AppRoutingModule } from './app-routing.module';\nimport { IntroComponent } from './intro.component';\nimport { HomeComponent } from 'home.component';\n\n@NgModule({\n    imports: [\n        TitaniumModule,\n        AppRoutingModule\n    ],\n    declarations: [\n        AppComponent,\n        IntroComponent,\n        HomeComponent\n    ],\n    bootstrap: [AppComponent],\n    schemas: [NO_ERRORS_SCHEMA]\n})\nexport class AppModule { }\n")])])]),n("p",[t._v("At this point the routing setup is done and Angular knows about your new component and its route. The last thing that is missing now is to actually trigger the navigation. Go back to the "),n("code",[t._v("intro.component.html")]),t._v(" and change the "),n("code",[t._v("Button")]),t._v(" element that is marked with the "),n("code",[t._v("#demoButton")]),t._v(" identifier to the following.")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#demoButton")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Tap me!"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tiRouterLink")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("40"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("40"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("150"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#1976d2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("borderRadius")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Note the usage of the "),n("code",[t._v("tiRouterLink")]),t._v(" directive which is used to trigger the navigation to a new route. You can use this directive on all elements that support the "),n("code",[t._v("click")]),t._v(" Event. If you need to trigger the navigation from your code, for example, the click event isn't available or you need to execute some other logic first, you can also navigate using the "),n("code",[t._v("TitaniumRouter")]),t._v(". For this you inject the router into your component and then call the "),n("code",[t._v("navigate")]),t._v(" or "),n("code",[t._v("navigateByUrl")]),t._v(" methods as demonstrated by the code below.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { TitaniumRouter } from 'titanium-angular';\n\nclass ExampleComponent {\n  constructor(private router: TitaniumRouter) { }\n\n  openHome() {\n    this.router.navigate(['home']).catch(e => Ti.API.error(e.message));\n  }\n}\n")])])]),n("p",[t._v("These methods take the same parameters as "),n("a",{attrs:{href:"https://angular.io/api/router/Router#navigate",target:"_blank",rel:"noopener noreferrer"}},[t._v("navigate"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://angular.io/api/router/Router#navigateByUrl",target:"_blank",rel:"noopener noreferrer"}},[t._v("navigateByUrl"),n("OutboundLink")],1),t._v(" from the original Angular router.")]),t._v(" "),n("p",[t._v("Thats it! If you build the app again and tap on the button, it will now navigate to your second component.")]),t._v(" "),n("h2",{attrs:{id:"appendix"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[t._v("#")]),t._v(" Appendix")]),t._v(" "),n("h3",{attrs:{id:"additional-information-on-routing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-information-on-routing"}},[t._v("#")]),t._v(" Additional information on routing")]),t._v(" "),n("p",[t._v("In some guides, the routing configuration is added directly into the "),n("code",[t._v("app.module.ts")]),t._v(" along wit the import of the "),n("code",[t._v("TitaniumRouter")]),t._v(" (or it's web equvalent). That way you don't need a specilal module only for routing. For simple apps that only have a handful of views, this is totally fine. But as your app grows, you will find it useful to split up routing configurations over different modules and seperate routing concers from other app concerns.")]),t._v(" "),n("p",[t._v("For more details in this topic make sure to read the extensive Angular "),n("a",{attrs:{href:"https://angular.io/guide/router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Routing & Navigation"),n("OutboundLink")],1),t._v(" guide. There you will learn more about routing modules or feature modules and how to organize your routing using those. This goes far beyond the goal of this simple getting started guide. If you want to see an example of all this applied to Titanium Angular check the "),n("a",{attrs:{href:"https://github.com/appcelerator/titanium-angular/tree/master/ti-angular-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("ti-angular-example"),n("OutboundLink")],1),t._v(" app.")])])}),[],!1,null,null,null);a.default=e.exports}}]);