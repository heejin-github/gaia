(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{641:function(t,e,a){"use strict";a.r(e);var o=a(1),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("This guide will explain how to install the "),a("code",[t._v("gaiad")]),t._v(" binary and run the cli. With this binary installed on a server, you can participate on the mainnet as either a "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("Full Node")]),t._v(" or a "),a("RouterLink",{attrs:{to:"/validators/validator-setup.html"}},[t._v("Validator")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"build-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-requirements"}},[t._v("#")]),t._v(" Build Requirements")]),t._v(" "),a("p",[t._v("At present, the SDK fully supports installation on linux distributions. For the purpose of this instruction set, we'll be using "),a("code",[t._v("Ubuntu 20.04.3 LTS")]),t._v(". It is also possible to install "),a("code",[t._v("gaiad")]),t._v(" on Unix, while Windows may require additional unsupported third party installation. All steps are listed below for a clean install.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#build-tools"}},[t._v("Update & install build tools")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#install-go"}},[t._v("Install Go")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#install-the-binaries"}},[t._v("Install "),a("code",[t._v("Gaiad")]),t._v(" binaries")])])]),t._v(" "),a("h2",{attrs:{id:"build-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-tools"}},[t._v("#")]),t._v(" Build Tools")]),t._v(" "),a("p",[t._v("Install "),a("code",[t._v("make")]),t._v(" and "),a("code",[t._v("gcc")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Ubuntu:")])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBhcHQtZ2V0IHVwZGF0ZQoKc3VkbyBhcHQtZ2V0IGluc3RhbGwgLXkgbWFrZSBnY2MK"}}),t._v(" "),a("h2",{attrs:{id:"install-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-go"}},[t._v("#")]),t._v(" Install Go")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("strong",[t._v("Go 1.16+")]),t._v(" or later is required for the Cosmos SDK.")])]),t._v(" "),a("p",[t._v("We suggest the following two ways to install Go. Check out the "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("official docs"),a("OutboundLink")],1),t._v(" and Go installer for the correct download for your operating system. Alternatively, you can install Go yourself from the command line. Detailed below are standard default installation locations, but feel free to customize.")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://go.dev/dl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go Binary Downloads"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("Ubuntu:")])]),t._v(" "),a("p",[t._v("At the time of this writing, the latest release is "),a("code",[t._v("1.17.4")]),t._v(". We're going to download the tarball, extract it to "),a("code",[t._v("/usr/local")]),t._v(", and export "),a("code",[t._v("GOROOT")]),t._v(" to our "),a("code",[t._v("$PATH")])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtT0wgaHR0cHM6Ly9nb2xhbmcub3JnL2RsL2dvMS4xNy40LmxpbnV4LWFtZDY0LnRhci5negoKc3VkbyB0YXIgLUMgL3Vzci9sb2NhbCAteHZmIGdvMS4xNy40LmxpbnV4LWFtZDY0LnRhci5negoKZXhwb3J0IFBBVEg9JFBBVEg6L3Vzci9sb2NhbC9nby9iaW4KCg=="}}),t._v(" "),a("p",[t._v("Remember to add "),a("code",[t._v("GOPATH")]),t._v(" to your "),a("code",[t._v("$PATH")]),t._v(" environment variable. If you're not sure where that is, run "),a("code",[t._v("go env GOPATH")]),t._v(". This will allow us to run the "),a("code",[t._v("gaiad")]),t._v(" binary in the next step. If you're not sure how to set your "),a("code",[t._v("$PATH")]),t._v(" take a look at "),a("a",{attrs:{href:"https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them",target:"_blank",rel:"noopener noreferrer"}},[t._v("these instructions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXhwb3J0IFBBVEg9JFBBVEg6JChnbyBlbnYgR09QQVRIKS9iaW4K"}}),t._v(" "),a("h2",{attrs:{id:"install-the-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-binaries"}},[t._v("#")]),t._v(" Install the binaries")]),t._v(" "),a("p",[t._v("Next, let's install the latest version of Gaia. Make sure you "),a("code",[t._v("git checkout")]),t._v(" the\ncorrect "),a("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("released version"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIC1iICZsdDtsYXRlc3QtcmVsZWFzZS10YWcmZ3Q7IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYQpjZCBnYWlhICZhbXA7JmFtcDsgbWFrZSBpbnN0YWxsCg=="}}),t._v(" "),a("p",[t._v("If this command fails due to the following error message, you might have already set "),a("code",[t._v("LDFLAGS")]),t._v(" prior to running this step.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBnaXRodWIuY29tL2Nvc21vcy9nYWlhL2NtZC9nYWlhZApmbGFnIHByb3ZpZGVkIGJ1dCBub3QgZGVmaW5lZDogLUwKdXNhZ2U6IGxpbmsgW29wdGlvbnNdIG1haW4ubwouLi4KbWFrZTogKioqIFtpbnN0YWxsXSBFcnJvciAyCg=="}}),t._v(" "),a("p",[t._v("Unset this environment variable and try again.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"TERGTEFHUz0mcXVvdDsmcXVvdDsgbWFrZSBpbnN0YWxsCg=="}}),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("NOTE")]),t._v(": If you still have issues at this step, please check that you have the latest stable version of GO installed.")])]),t._v(" "),a("p",[t._v("That will install the "),a("code",[t._v("gaiad")]),t._v(" binary. Verify that everything installed successfully by running:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdmVyc2lvbiAtLWxvbmcK"}}),t._v(" "),a("p",[t._v("You should see something similar to the following:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bmFtZTogZ2FpYQpzZXJ2ZXJfbmFtZTogZ2FpYWQKdmVyc2lvbjogdjYuMC4wCmNvbW1pdDogMDdmOTg5MmE5MjdmNDUxYWUyMDRkMGM5ZDFhNTYwMWQ4ZmMyMzJhNQpidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKZ286IGdvIHZlcnNpb24gZ28xLjE1IGxpbnV4L2FtZDY0Cg=="}}),t._v(" "),a("h3",{attrs:{id:"build-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-tags"}},[t._v("#")]),t._v(" Build Tags")]),t._v(" "),a("p",[t._v("Build tags indicate special features that have been enabled in the binary.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Build Tag")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("netgo")]),t._v(" "),a("td",[t._v("Name resolution will use pure Go code")])]),t._v(" "),a("tr",[a("td",[t._v("ledger")]),t._v(" "),a("td",[t._v("Ledger devices are supported (hardware wallets)")])])])]),t._v(" "),a("h2",{attrs:{id:"work-with-a-cosmos-sdk-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-with-a-cosmos-sdk-clone"}},[t._v("#")]),t._v(" Work with a Cosmos SDK Clone")]),t._v(" "),a("p",[t._v("To work with your own modifications of the Cosmos SDK, make a fork of this repo, and add a "),a("code",[t._v("replace")]),t._v(" clause to the "),a("code",[t._v("go.mod")]),t._v(" file.\nThe "),a("code",[t._v("replace")]),t._v(" clause you add to "),a("code",[t._v("go.mod")]),t._v(" must provide the correct import path:")]),t._v(" "),a("ul",[a("li",[t._v("Make appropriate changes")]),t._v(" "),a("li",[t._v("Add "),a("code",[t._v("replace github.com/cosmos/cosmos-sdk => /path/to/clone/cosmos-sdk")]),t._v(" to "),a("code",[t._v("go.mod")])]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("make clean install")]),t._v(" or "),a("code",[t._v("make clean build")])]),t._v(" "),a("li",[t._v("Test changes")])]),t._v(" "),a("h2",{attrs:{id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" Next")]),t._v(" "),a("p",[t._v("Now you can "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("join the mainnet")]),t._v(", "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-testnet.html"}},[t._v("the public testnet")]),t._v(" or "),a("RouterLink",{attrs:{to:"/hub-tutorials/deploy-testnet.html"}},[t._v("create you own testnet")])],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);