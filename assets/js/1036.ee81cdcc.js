(window.webpackJsonp=window.webpackJsonp||[]).push([[1036],{1941:function(i,t,e){"use strict";e.r(t);var a=e(21),o=Object(a.a)({},(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[e("h1",{attrs:{id:"layout-limitations-spec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-limitations-spec"}},[i._v("#")]),i._v(" Layout Limitations Spec")]),i._v(" "),e("p",[i._v("This document provides information on layout limitations, sizes, and positioning.")]),i._v(" "),e("h2",{attrs:{id:"layout-limitations-specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout-limitations-specification"}},[i._v("#")]),i._v(" Layout limitations specification")]),i._v(" "),e("h3",{attrs:{id:"definitions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[i._v("#")]),i._v(" Definitions")]),i._v(" "),e("p",[e("strong",[i._v("View Constrained Dimension")]),i._v(" - a view has a dimension either fixed or SIZE.\n"),e("strong",[i._v("View Flexible Dimension")]),i._v(" - a view has a dimension either percentage or FILL.\n"),e("strong",[i._v("Container Constrained Dimension")]),i._v(" - a container has a dimension either fixed or relative to its parent such as percentage or FILL.\n"),e("strong",[i._v("Container Flexible Dimension")]),i._v(" - a container has the SIZE dimension.")]),i._v(" "),e("p",[i._v("In these definition, for container (parent) view both "),e("em",[i._v("View")]),i._v(" and "),e("em",[i._v("Container")]),i._v(" definitions apply depending if the container is being layout as a child, or it layouts others.")]),i._v(" "),e("h2",{attrs:{id:"size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[i._v("#")]),i._v(" Size")]),i._v(" "),e("h3",{attrs:{id:"all-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-layouts"}},[i._v("#")]),i._v(" All Layouts")]),i._v(" "),e("ol",[e("li",[e("p",[i._v("For a container with flexible height ("),e("em",[i._v("Container Flexible Dimension")]),i._v("), effective height of children with flexible height ("),e("em",[i._v("View Flexible Dimension")]),i._v(") is 0. In other words, the effective height of a container with flexible height is the sum heights of all its children with constrained height ("),e("em",[i._v("View Constrained Dimension")]),i._v("). A runtime warning should be issued for these child views.")])]),i._v(" "),e("li",[e("p",[i._v("For container with flexible width ("),e("em",[i._v("Container Flexible Dimension")]),i._v("), effective width of children with flexible width ("),e("em",[i._v("View Flexible Dimension")]),i._v(") is 0. In other words, the effective width of a container with flexible width is the sum widths of all its children with constrained width ("),e("em",[i._v("View Constrained Dimension")]),i._v("). A runtime warning should be issued for these child views.")])])]),i._v(" "),e("h3",{attrs:{id:"vertical-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vertical-layout"}},[i._v("#")]),i._v(" Vertical layout")]),i._v(" "),e("p",[i._v("For vertical container with constrained height ("),e("em",[i._v("Container Constrained Dimension")]),i._v("), only one child with FILL height is supported.\nThat child will occupy all the remaining vertical space of the container (container height minus heights of all other children).\nEffective height for any other children with FILL height is 0. A runtime warning should be issued for these child views.")]),i._v(" "),e("h3",{attrs:{id:"horizontal-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-layout"}},[i._v("#")]),i._v(" Horizontal Layout")]),i._v(" "),e("p",[i._v("Horizontal layout has two modes: with wrap (default) and without wrap.")]),i._v(" "),e("ol",[e("li",[e("p",[i._v("For horizontal non-wrapping container with constrained width ("),e("em",[i._v("Container Constrained Dimension")]),i._v("), only one child with FILL width is supported. That child will occupy all the remaining horizontal space of the container (container width minus widths of all other children). Effective width for any other children with FILL width is 0. A runtime warning should be issued for these child views.")])]),i._v(" "),e("li",[e("p",[i._v("No other restrictions for horizontal wrapping container with constrained width ("),e("em",[i._v("Container Constrained Dimension")]),i._v(").")])])]),i._v(" "),e("h3",{attrs:{id:"absolute-composite-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#absolute-composite-layout"}},[i._v("#")]),i._v(" Absolute (composite) layout")]),i._v(" "),e("p",[i._v("No other restrictions regarding container/child view size.")]),i._v(" "),e("h2",{attrs:{id:"positioning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#positioning"}},[i._v("#")]),i._v(" Positioning")]),i._v(" "),e("h3",{attrs:{id:"vertical-layout-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vertical-layout-2"}},[i._v("#")]),i._v(" Vertical layout")]),i._v(" "),e("p",[i._v("Views are centered horizontally unless horizontal pins (left/right) specified.")]),i._v(" "),e("h3",{attrs:{id:"horizontal-layout-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-layout-2"}},[i._v("#")]),i._v(" Horizontal layout")]),i._v(" "),e("h4",{attrs:{id:"without-wrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#without-wrap"}},[i._v("#")]),i._v(" Without Wrap")]),i._v(" "),e("p",[i._v("For horizontal non-wrapping container, views are centered vertically unless vertical pins (top/bottom) specified. Vertical pins behave the same as they would in absolute layout. They are used for positioning, and can also be used to determine implicit height. Horizontal pins are used for padding only.")]),i._v(" "),e("h4",{attrs:{id:"with-wrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with-wrap"}},[i._v("#")]),i._v(" With Wrap")]),i._v(" "),e("p",[i._v("For horizontal wrapping container, views are centered vertically within individual layout rows. Both vertical and horizontal pins are used for padding. In the case where implicit height needs to be calculated by pins, it will follow the same precedence and behavior as the "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/UI_Composite_Layout_Behavior_Spec/"}},[i._v("UI Composite Layout Behavior Spec")]),i._v(".")],1),i._v(" "),e("h3",{attrs:{id:"absolute-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#absolute-layout"}},[i._v("#")]),i._v(" Absolute layout")]),i._v(" "),e("p",[i._v("Views are centered horizontally and vertically unless pins (left/right/top/bottom) specified.")])])}),[],!1,null,null,null);t.default=o.exports}}]);