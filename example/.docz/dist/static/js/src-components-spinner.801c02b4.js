(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Spinner.mdx":function(A,o,e){"use strict";e.r(o);var r=e("./node_modules/react/index.js"),i=e.n(r),n=e("./node_modules/@mdx-js/tag/dist/index.js"),g=e("./node_modules/docz/dist/index.m.js"),t=e("../dist/index.es.js"),c=function(A){var o=A.size,e=void 0===o?50:o,r=A.backgroundColor,n=void 0===r?t.i.gray600:r,g=A.color,c=void 0===g?t.i.gray200:g;return i.a.createElement(t.t,{size:e,backgroundColor:n,color:c})},a=c;function E(A,o){if(null==A)return{};var e,r,i=function(A,o){if(null==A)return{};var e,r,i={},n=Object.keys(A);for(r=0;r<n.length;r++)e=n[r],o.indexOf(e)>=0||(i[e]=A[e]);return i}(A,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)e=n[r],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(i[e]=A[e])}return i}c.__docgenInfo={description:"",methods:[],displayName:"Component",props:{size:{defaultValue:{value:"50",computed:!1},required:!1,flowType:{name:"number"},description:"\ud06c\uae30"},backgroundColor:{defaultValue:{value:"Colors.gray600",computed:!0},required:!1,flowType:{name:"string"},description:"\uc6d0\uc758 \ubc30\uacbd \uc0c9\uc0c1"},color:{defaultValue:{value:"Colors.gray200",computed:!0},required:!1,flowType:{name:"string"},description:"\ub3cc\uc544\uac00\ub294 \uc120\uc758 \uc0c9\uc0c1"}}};o.default=function(A){var o=A.components,e=E(A,["components"]);return i.a.createElement(n.MDXTag,{name:"wrapper",components:o},i.a.createElement(n.MDXTag,{name:"h1",components:o,props:{id:"spinner"}},"Spinner"),i.a.createElement(n.MDXTag,{name:"p",components:o},"\uc9c4\ud589 \uc911\uc778 \uc0ac\ud56d\uc774 \uc788\uc74c\uc744 \uc54c\ub9ac\uae30\uc5d0 \uc720\uc6a9\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),i.a.createElement(n.MDXTag,{name:"h2",components:o,props:{id:"props"}},"Props"),i.a.createElement(g.PropsTable,{of:a}),i.a.createElement(n.MDXTag,{name:"h2",components:o,props:{id:"basic-usage"}},"Basic usage"),i.a.createElement(g.Playground,{__position:1,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmcGY0BdI5jTldpPTgARyEBJ1qH0OBJBguCMkDAV7U1c03RNBVzUDMxdFRY5TgAL2cAhEmxdhuHYYB1iiARnlQK52gABnYVMZiwdpDzrGZuxYed-IAFlE9gADZRPE9YwFAgAxH1oESfj-GcQ5EUdTB2AABSEfgliIahKDgKTETUusNJoZwIHoy52AARjkiT5FVINUBoqYAEE5jY9ho2ADZoHQSN2HkTk2LESK4xkdhURYmBuGAY9GOY7F5F3etgHIGwoDi4IADIqvGRJ5koZoyti-LuDa-UwFCIK-1Qdp2AAfhiirI2jJKrma4a6HkON91kMxPzMWENWOGAwDCKAplG5LUrrRgwrXOtkzw1B4PYHcZv22tOV_EBUPQz4txoHDjvgoCsDIHRQP0QxJHYAABMAoFGO1lpDKUyKQs0lQCojluil6MiWRwgYEOx5Ah-VyCgfw4C8gSvItUIIComh6u6CzKBHdjOLrYwjHYQAbBcABjr2F5dZ8g8_qrlQUIiECAQJPWOn2EABbHAA1x9hAAYewBemvYQBJgcAQYHWb5OsPElbYUiELr0GR4UuYytECkF2mTHYQAZ5sAEVHAAAawAUpvYQACQYlxXlfWKgUf11E5xSPyAuo6haM3LCc3YqL2fc7p2IAVgEiSLDVnZNbaDBdaOdiU7gc9MkSJSBJj13KBRiL08z1xEgAJlzvyrgpu4ku4FLY12hGjg57LotbhL2HjjWteTgvhRyrv1cT7WU87t2B-iiejnR86v19l0sGIla1tCDbHSzfQApuhztlcNIgOoD7dDAgwIJpix-FQH0mSQdh-CBYkqm8DILX_clb9j--QFYDJ8mofgVx-ACRwCAgSVl1j8HKOQfoMweqAO_iFDKRFYAwiwD6D-K1ySUESAWPIBRpxagtI_EEL8BAQLrPwKIaAEH8FUNgICFDL4gEwPMKMQUIDwAQRfes_AoaiDvvwAAel5JSOBI44DLkw3hOhsZwFxvjQmEBaEgCgGgbYiAcA4Gkcw_hVpIgqJEWIiRUiQDrGmqgeQN0n7VA-NQSAKRD6oGPl9cCIBOIgFoL6LIgCH5mloBaPRswZj8CsfIcJQA",__code:"<Spinner />",__scope:{props:e,Spinner:a}},i.a.createElement(a,null)),i.a.createElement(n.MDXTag,{name:"h2",components:o,props:{id:"custom-example"}},"Custom example"),i.a.createElement(g.Playground,{__position:2,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmcGY0BdI5jTldpPTgARyEBJ1qH0OBJBguCMkDAV7U1c03RNBVzUDMxdFRY5TgAL2cAhEmxdhuHYYB1iiARnlQK52gABnYVMZiwdpDzrGZuxYed-IAFlE9gADZRPE9YwFAgAxH1oESfj-GcQ5EUdTB2AABSEfgliIahKDgKTETUusNJoZwIHoy52AARjkiT5FVINUBoqYAEE5jY9ho2ADZoHQSN2HkTk2LESK4xkdhURYmBuGAY9GOY7F5F3etgHIGwoDi4IADIqvGRJ5koZoyti-LuDa-UwFCIK-1Qdp2AAfhiirI2jJKrma4a6HkON91kMxPzMWENWOGAwDCKAplG5LUrrRgwrXOtkzw1B4Iy9zsuALyBIE-R2A8SVthSIQuvQRwoGFPhBGyfgS3egRPtg1Bth-ncZv22tOV_EBUPQz4txoHDjvgoCsDIHRQP0QxJHYAABMB3pGO1lpDKUyKQs0lQCojluipGMiWN7hTsW7EPlcgoH8OArq8i1QggKiaHq7oLMoEd2M4utjCMdhABsFwAGOvYXl1nyDz-quVBQiIQIBAk9YpfYQAFscADXH2EABh7AF6a9hAEmBwBBgcVvk63unYnraDBGYENWMrRApdclkx2EAGebABFRwAAGsAFKb2EAAkGTdt-31ioP7PdROcUj8gLqOoWjNywnN2Ki5XzoigBWASJIsJ3Huet3KD-iL3bgc9MkSJTrrL37hTrmumcb1xEgAJlbsx5CuEW7iS7gUtjXa6aOFWLrOjyEruh6XZe92cuX52q9erujluhOPuig-9_YUGv3Tl0sGIla1tCDbHSzfQAqhhztlcNIgOoNHdDAgwIIliw_BUA-iZEgdg_AgTEiqN4DIFp_zklAW3fgrAMj5GoPwK4_ABI4GwQJKy6x-DlHIP0GYPUMHgJACFM6AEYRYB9Agla5JKCJALHkAo04tQWkgSCGBAh8F1n4FENA5D-CqGwEBfhgCQCYHmFGIKEB4DkIAfWfgFNRBgP4AAPS8kpHARccB90kSonQHM4BcwEjzPmIiQBQDQNsRAOAcBGKkWoq0kRrHaN0fowxIB1jTVQPIKGUDqgfGoJAFIn9UDfwxuBEAnEQC0F9FkDBECzS0AtK42YMx-CBPkHkoAA",__code:'<Spinner size={100} backgroundColor="red" color="pink" />',__scope:{props:e,Spinner:a}},i.a.createElement(a,{size:100,backgroundColor:"red",color:"pink"})))}}}]);