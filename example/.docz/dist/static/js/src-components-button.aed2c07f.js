(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/Button.mdx":function(A,e,o){"use strict";o.r(e);var B=o("./node_modules/react/index.js"),g=o.n(B),n=o("./node_modules/@mdx-js/tag/dist/index.js"),t=o("./node_modules/docz/dist/index.m.js"),i=o("../dist/index.es.js");function c(A,e){if(null==A)return{};var o,B,g=function(A,e){if(null==A)return{};var o,B,g={},n=Object.keys(A);for(B=0;B<n.length;B++)o=n[B],e.indexOf(o)>=0||(g[o]=A[o]);return g}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(B=0;B<n.length;B++)o=n[B],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(g[o]=A[o])}return g}var E=function(A){var e=A.block,o=void 0!==e&&e,B=A.size,n=void 0===B?"md":B,t=A.color,E=void 0===t?i.i.gray800:t,r=A.backgroundColor,a=void 0===r?i.i.orange600:r,s=A.textAlign,l=void 0===s?"center":s,Y=A.borderRadius,d=void 0===Y?1:Y,C=A.loading,I=void 0!==C&&C,u=A.children,M=c(A,["block","size","color","backgroundColor","textAlign","borderRadius","loading","children"]);return g.a.createElement(i.e,Object.assign({style:{marginRight:o?0:12,marginBottom:o?12:0},block:o,size:n,color:E,backgroundColor:a,textAlign:l,borderRadius:d,loading:I},M),u)},r=E;function a(A,e){if(null==A)return{};var o,B,g=function(A,e){if(null==A)return{};var o,B,g={},n=Object.keys(A);for(B=0;B<n.length;B++)o=n[B],e.indexOf(o)>=0||(g[o]=A[o]);return g}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(B=0;B<n.length;B++)o=n[B],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(g[o]=A[o])}return g}E.__docgenInfo={description:"",methods:[],displayName:"Component",props:{block:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"\uac00\ub85c\ub97c \ubaa8\ub450 \ucc44\uc6b8\uc9c0 \uc5ec\ubd80"},size:{defaultValue:{value:"'md'",computed:!1},required:!1,flowType:{name:"union",raw:"'lg' | 'md' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"}]},description:"\ud06c\uae30"},color:{defaultValue:{value:"Colors.gray800",computed:!0},required:!1,flowType:{name:"string"},description:"\uae00\uc758 \uc0c9\uc0c1"},backgroundColor:{defaultValue:{value:"Colors.orange600",computed:!0},required:!1,flowType:{name:"string"},description:"\ubc30\uacbd\uc758 \uc0c9\uc0c1"},textAlign:{defaultValue:{value:"'center'",computed:!1},required:!1,flowType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"\uae00\uc758 \uc815\ub82c"},borderRadius:{defaultValue:{value:"1",computed:!1},required:!1,flowType:{name:"number"},description:"\ubc84\ud2bc\uc758 \ub465\uadfc \uc815\ub3c4"},loading:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"\uc9c4\ud589 \uc5ec\ubd80"},leftIconSrc:{required:!1,flowType:{name:"string"},description:"\uc67c\ucabd \uc544\uc774\ucf58"},rightIconSrc:{required:!1,flowType:{name:"string"},description:"\uc624\ub978\ucabd \uc544\uc774\ucf58"},to:{required:!1,flowType:{name:"string"},description:"Link(React Router Dom)\uc5d0 \uc4f8 URL"},href:{required:!1,flowType:{name:"string"},description:"A Tag\uc5d0 \uc4f8 URL"},children:{required:!0,flowType:{name:"Node"},description:""}}};e.default=function(A){var e=A.components,o=a(A,["components"]);return g.a.createElement(n.MDXTag,{name:"wrapper",components:e},g.a.createElement(n.MDXTag,{name:"h1",components:e,props:{id:"button"}},"Button"),g.a.createElement(n.MDXTag,{name:"p",components:e},"\ub20c\ub7ec\uc11c \uc81c\uc5b4\ud558\ub294 \uae30\ub2a5\uc744 \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"props"}},"Props"),g.a.createElement(t.PropsTable,{of:r}),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"basic-usage"}},"Basic usage"),g.a.createElement(t.Playground,{__position:1,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLgjMoFiXZTykI7qCKqQ9trTlfxAFC0M-LcaGwq7UCArAyB0UD9EMSR2AAATAKBRjtJaQylUjELNJV_MIpaos-pZHHBgQ7HkWH5XIKB_DgTz-M8i1QggSiaDq7pzMoEc2I4utjCMdhAAAawAdDsAH072EACq7AAUW9hABEZwAOscAAcn2EAG9HAADe9heXWDxwZ2Pqri8SgKVQcT1iZ9hABsFwAGOplvk63ydylflKAUl6gAfeUiHQK35TgG0NcZkx2EAADrAA1x9hAEmBwBBgYN9YqAx03UTnFJnYsLXAAYewBemq9v2A7rDxJW2FIhE69B0eFEO0QKCP2C1wAfMcAXqn2EAEVHABdxwANecTixYDAAgGl0ZxUJzsP861wASMcAD07S8rmvZbrfoUkIJvqBb8g27z8EXeZz32EAVAnABoO2vxmwAhgtOlJUFN9p6_fdhrfaRE9AEe3OggEf3w713ABCewAepa9wBTFsAH9rF8AEebV68ARZ1FbsIDyKbVAoQiCBAEDfZmgARycAJGrEtpaDzrpQf-85TYqzVhA9gAAZNA2xozQzFPsDI7BtSRE5IABdH2CAA-R9gABVUUmDV4RCnvODBwUrCuBSBQ6hdCGEIN8F0MAzDw4zwsONCqvF2AADlSy-X8lRagNFNyYRzGxSKcsFa7DYqtKAcAYDiQsMbbobF2i20cqI1WwpwpZ0xueTIiQAAc_F-L6PYMnHYac2gYGsVYixNjhTuDSIpJxLjaBYA3lvcwxiT60DPi47-v9_55HCp5Fx4NkELi0fEXRLixGRhcTgApXRUQ0zuGYeQVwSlwEStwZKsYdqfXXBlWA2UopcR4qKS-hBlYaP6uwQSVxPIACYrKuG4mgO8IgIhEG6acXYA0hnsCuIJeQU0DquI0dldZsz4qNLcllKKhidlrKDsKTZJyjirPrK4lOHiM7WM2W41O6cvG-KOVc0J4TL6oE2R8zeXy3n1niRkP-LA8gPOFAk0FWN1xpOkikTZsKCgAosFFApEZ4AEEqQCoqKLBriIBZdWC105pyJdFgIiy1VqhHWo6LM-h_KPXstsDhgFNDUF-roMCBgIIMwsPwVAPomRIHYPwIExIqjeAyBaf85IhUuP4KwDI-RqD8CuPwfiOANX8Ususfg5RyD9BmN1VVIqQBsPyABGEWAfSyuWuSSgiQCx5CRfDS0YqQSSoEDqus_AohoBNfwVQ2AgLer5SATA8woyBQgPAE1vL6z8FdQGkAAA9TyikcAAFYcCDNDQmnQ-M4CE2JqTCAybTqoG2IgApeaw2uqtJEZNaaM3ZtzSAdYqz5CPXFdUD41BIApCAuy7QnKAY8v4LQX0WRVWirNLQC09bZgzH4F2lZ8ggA",__code:"<Button>Click me</Button>",__scope:{props:o,Button:r}},g.a.createElement(r,null,"Click me")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"with-different-sizes"}},"With different sizes"),g.a.createElement(t.Playground,{__position:2,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLg9K3Ky_goEKEAMygWJdlPKQjuoIrDtgll8ncvgQCIdBxHsG6dnYe6cNe1BnobR7zHes6QDgIhfv-u6YAekGwcYCGTo-_gsDgeHbsBpHgbw0Hpr22tOV_GHUPQrMsMJuCgKwMgdFA_RDEkdgAAEwCgUY7SWkMpVIxCzSVfzCKWqKIaWRweYEOx5CF-VyCgfw4E8_jPItUIIEomg6u6czKBHNiOLrYwjHYQAAGsAHQ7AB9O9hAAquwAFFvYQARGcADrHAAHJ9hABvRwAA3vYXl1g8Hmdj6q4vEoClUHE9ZzfYQAbBcABjrA75OsofD-ULt6gAfeVvtz-VYccuOTHYQAAOsADXH2EASYHAEGB1P1ioWXM9ROcUljs2y8ABh7AF6a6v68busPElbYUiETr0Bl4VW7RApO4sePAB8xwBeqfYQARUcAF3HAA15oeLFgMACAaXRnFQ2f24X9h48AEjHAA9Otet93oO636FJCGP6hT_Ic_5_BLuLaruwQAqBOABoOve4xsAEGCjdFIqBM7tAPu-dged2iIj0AIQunQIBv3fJfeOgAQnsAD1L1dACmLYAH9rgGABHm8BXgBCzlFN2CAeRM6oFCEQQIAg8Fl0ACOTgBI1d9gHZ--9KCMPnJnSO0cuEWwADJoG2NGAWYp9gZHYNqSInJAALo-wQAHyPsAAKqimkeAiIP95xSPYMFKwrgUhaN0QYoxQjfBdDAKYjuf8LDjQqrxdgAA5Usvl_JUWoDRTcmEcxsUisHUOuw2KrSgHAGA4kLBQ3Cu0AuSSSyy3CtPOW55MiJAABz8X4hkkeOxx5tAwDk7JUdhRwBwMKdwaRFLFIybQLAUCYHmDYqg_QGRHIWFofQxheRwqeQyTzURC5YnxASRkzxkYMk4GWV0VEhs7hmHkFcdZcBErcGSrGHaEN1wZVgNlKKXEeKimwYQCO0T-rsEElcTyAAmKyrhuJoDvCICIRA7mnF2ANV57AriCXkFNA67AQ4AuylC-5EL6wYyylFFJCL6zN2FLCjFRw0WDNHhUyeOTYVlLHhPKptScXrnaZ07BqBYXUugbS-K64hkZAYSwPIxLhTDI5fLdckzpIpFhQKgozLIVRWWRGeABAdliosGDKKCzghouRkTMmgSXRYCIstVaoR1qOhpjQfyFN7LbGsYBTQ1Ama6DAgYCCpsLD8FQD6JkSB2D8CBMSKo3gMgWn_OSV1GT-CsAyPkag_Arj8H4jgaN_FLLrH4OUcg_QZjdQje6kAlj8gARhFgH0AblrkkoIkAseRRUi0tJ6kEPqBDxrrPwKIaB038FUNgICdbHUgEwPMKMgUIDwHTQ6-s_AK3NpAAAPU8opHAABWHALyO3Dp0CrOAasNZawgGOm6qBtiIGWYuztFarSRDHZO6dc6F0gHWBC-QFMvXVA-NQSAKQgJWu0Da1m9r-C0F9FkCNHqzS0AtEe2YMx-C3vBfIIAA",__code:'<Button size="lg">Click me</Button>\n<Button size="md">Click me</Button>\n<Button size="sm">Click me</Button>\n<Button size="xs">Click me</Button>',__scope:{props:o,Button:r}},g.a.createElement(r,{size:"lg"},"Click me"),g.a.createElement(r,{size:"md"},"Click me"),g.a.createElement(r,{size:"sm"},"Click me"),g.a.createElement(r,{size:"xs"},"Click me")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"with-different-colors"}},"With different colors"),g.a.createElement(t.Playground,{__position:3,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLgksoGFPgQA8KBJW2fh2A8a6UiETr0EcU6BHOmY0BukAivrdg7wAGWC-wAGlTIaAA5EH1ykI7qF-hs4fMKg3o-r7bvunZHraDBXrO_hLuu8R1wsQHgbByHoYOhscNg-Hpr22tOV_EAULQz4txobCkaArAyB0UD9EMSR2AAATAU6RjtJaQylUjELNJV_MIpaoqRpY8YEOx5Hl-VyCuuA4E8_jPItUIIEomg6u6czKBHNiOLrYwjHYQAAGsAHQ7AB9O9hAAquwAFFvYQARGcADrHAAHJ9hABvRwAA3vYXl1ku05tj6q4vEoClUHE9ZnfYQAbBcABjrY75Ot8nc5P5SgFJeoAH3lIh0Gr-U4BtTOnZMdhAAA6wANcfYQBJgcAQYHC_WFHhTL1E5xSFuLGzwAGHsAXpru_7we60x7ZseezXR7RApJ_YbPAB8xwBeqfYQARUcAF3HAA15peLFgMACAaXRnFQzfx537PABIxwAPTqPs_L7jut-hSIQe-1BH7kGftvcErcXZd3YIAVAnAA0HVfcY2ACDBSgBAFIqAy7tBvu-dgNd2iIj0AIBunQMGEEclnNugAQnsAD1L3dACmLYAH9q4GABHmpBXgBCzlFN2CAeQy6oFCEQQIAhX5t0ACOTgBI1cjjHP-19KC8PnGXVO6cxEuwBl9aMssxT7AyOwbUkROSAAXR9ggAPkfYAAVVFADJBERwHzjUewYKVhXApBMeYqxNi5G-C6GAexE9IEWHGhVXi7AIall8v5Ki1AaKbkwjmNikV46nR2OFVaUA4AwHEhYEu3Q2LtDro5IJadhThU1nAc8mREgAA5-L8WyXdB6T1cYlKOGxcpOBhTuDSIpOpDTaBYFQegzB4VCH6AyEUu6wpuG8LyOFTyDTTqKIXGxdJmSGnBMjA0nAOyuioltncMw8grgHLgIlbgyVYw7SRuuDKsBspRS4jxUU5CCApxSbsAagkrieQAExWVcNxNAd4RARCIO8xO_UvK_PYFcQS8gprUwTjsbKd0PnxVuW5LKUVckYupsPd6UUCV4r-ivNeLTUZRTJc0l6rSSX1gGUMjBqBUWMrQcy-lFhOEzJYHkVF3KMg8N5drdcSzpIpFRWKgonL2LsB2RGeABBTn0oRkSsqIT6WwzpqgJmUSXRYCIstVaoR1qOizPofyLN7LbFcYBTQ1B-a6DAgYCCjsLD8FQD6JkSB2D8CBMSKo3gMgWn_OSb1DT-CsAyPkag_Arj8H4jgRN_FLLrH4OUcg_QZjdTjb6kAzj8gARhFgH0YblrkkoIkAseRpWK0tP6kEQaBCprrPwKIaBc38FUNgICLb3UgEwPMKMgUIDwFzW6-s_A62dpAAAPU8opHAABWHAvy-2Tp0AbI2JszYQBneg1A2xEA7PXf2utVpIgzvnYulda6QDrERfIFmAbqgfGoJAFIQEHXaCdULV1_BaC-iyHGv1ZpaAWnPbMGY_An0IvkEAA",__code:'<Button color="black" backgroundColor="pink">\n  BLACKPINK\n</Button>\n<Button color="pink" backgroundColor="black">\n  BLACKPINK\n</Button>',__scope:{props:o,Button:r}},g.a.createElement(r,{color:"black",backgroundColor:"pink"},"BLACKPINK"),g.a.createElement(r,{color:"pink",backgroundColor:"black"},"BLACKPINK")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"with-different-icons"}},"With different icons"),g.a.createElement(t.Playground,{__position:4,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLg9hYDAAgGl0ZxUL4EBCFue5HjgVMcFmC0fhFTZ_EtAAmF6ojo_sRjgD5IkBKB_DgTz-M8i1QggSQBVcNJsNiC1yTyC0PHBnYcBmedxHXCx7CgWJdlPdcpCO6gisO2CWX6FJCAu6grvIG67ruB5JCel6ZjejVPtRC1fp9VwAdQVwgZBr5yHBuBIeh2H4cR5GEfINGoAxrHJW2XH8ZAGn62J0n2HJg6GxwunUCKqQ9trTlfxAFC0M-LcaGwqnUCArAyB0UD9EMSR2AAATAKBRjtJaQylUjELNJV_MIpaos9pZHHDgQ7HkWP5VliGoZhuHKJoOrunMygRzYji62MIx2EAABrAB0OwAfTvYQAKrsABRb2EAERnAA6xwAByfYQAb0cAAN72F5dYsdObY-quLxKApVBxPWWv2EAGwXAAY68e-TrfJ3Nn-UoBSXqAB95SIdBT_lOAbWXmuTHYQAAOsADXH2EASYHAEGB7f1ioDOD9ROcKQ74WFXoABh7AC9Na_T-386weB1ikIQnV0Dp2FP_NEBRgHsFXoAHzHAC9U-wQAIqOABdxwAGvMwIsKdc6l1UJoMAZg1egASMcAB6d-DiFkInnWBmTNqHkFoRg8E9864v3YIAVAnAA0HeQ8Y2ACDBRJikVAB92iUKvu0REegBAqK4e-ehD9AAhPYAHqXX6AFMWwAP7WiMACPNkivACFnKKbsEA8gH1QKEIggQBA6LroAEcnACRq8PMeHCKGUHsfOA-89F4ePYAAGTQNsaM0cxT7AyOwbUkROSAAXR9ggAPkfYAAVVFJEyREQ-HzgicFKwSMMnZLyQUgJvguhgGKUAgRFhxoVV4uwAAcqWXy_kqLUBopuTCOY2KRUnuHHY4VVpQDgDAcSFg97dDYu0C-jkWkL2FOFFBmdzyZESAADn4vxOZ7A4E7AQW0DAWzNnrO2cKdwaRFKHOObQLAMi5HmCWWo2gGjjnWNsfYvI4VPLHPDsEhcbEpkzOOa0yMxycDwq6KicudwzDyCuMiuAiVuDJVjDtT264MqwGylFLiPFRQQEZgQOe4zdgDUElcTy30rKuG4mgO8IgIhEGpdPfqXlvrsCuIJeQU1zZTx2NlE5NL4oErcllKKCzpXm1_sKCVyqjgivrCc-BiDLk3Ilac7Y5ykFXI1fWF5byKWoAlea2RlrFWar-RkOxLA8j6uFP8l1Wd1ygukikCVPqCj2uKuweFEZ4AEAxUGw2UUYXBFNZTK29tekuiwERZaq1QjrUdFmfQ_lHb2W2EjQCmhqC-10GBAwEFq4WH4BLcmSB2D8CBMSKo3gMgWn_OSJkIBjn8FYBkfI1B-BXH4PxHAY7-KWXWPwco5B-gzG6sOxtIAyn5AAjCLAPou3LXJJQRIBY8iBvjpaZtII20CCnXWfgUQ0BLv4KobAQFL01pAJgeYUZAoQHgEu6t9Z-DHrvSAAAep5RSOAACsOBvrPr_ToOWCtC4QEAyTVA2xEDwpgy-49VpIiAZA2ByD0GQDrBFfIR2Lbqgg1QJAFIQFS3aHLQHKt_BaC-iyMOptZpaAWmw7MGY_AyPCvkEAA",__code:'<Button leftIconSrc="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-plus-black.png">\n  Click me\n</Button>\n<Button rightIconSrc="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-plus-black.png">\n  Click me\n</Button>',__scope:{props:o,Button:r}},g.a.createElement(r,{leftIconSrc:"https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-plus-black.png"},"Click me"),g.a.createElement(r,{rightIconSrc:"https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-plus-black.png"},"Click me")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"with-different-alignsonly-block"}},"With different aligns(Only block)"),g.a.createElement(t.Playground,{__position:5,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLg8ZsAIYKoAgFJUD4EBYDAUQQHYDwoFObYivrBwLp2dhT3XKQjuod6GwB8xaCwM6Lqum7ET0AR-Cel6diBix7C-3ZfoOhscNgwG_pBk7wfOy7rv4foUkIeHnte5HPtidGmUx_6cdQIqpD22tOV_EAULQz4txobCQaArAyB0UD9EMSR2AAATAF6RjtJaQylUjELNJV_MIpaopBpZHBegQ7HkVX5XIKB_DgTz-M8i1QggSiaDq7pzMoEc2I4utjCMdhAAAawAdDsAH072EACq7AAUW9hABEZwAOscAAcn2EAG9HAADe9heXWKmdj6q4vEoClUHE9YvfYQAbBcABjqU75Ot8nczP5SgFJeoAH3lIh0Eb-U4BtfPPZMdhAAA6wANcfYQBJgcAQYHy_WKgDZr1E5xSLuLELwAGHsAXprB9H8e6w8SVthSIROvQfXhWntECnn9hC8AHzHAF6p9hABFRwAXccADXmN4sO6CAaXRnFQ4_Z7PwvABIxwAHp03wfs_VOdYyaEA_tQL-5Af6n3BN3b2A92CAFQJwANB0vwJhDYmNd2hvzbu0GGtABCEMge-P-PdAAhPYAHqXB6AFMWwAP7VoMACPNWCvACFnKKbsEA8g11QKEIggQBCUO9oAEcnACRqwnZO4DX6UB4fOGu2dc6iPYAAGTQNsaMysxT7AyOwbUkROSAAXR9ggAPkfYAAVVFGorBER4HzlUcFKwrgUimIsdY2xsjfBdDAA4ueiCLDjQqrxdgAA5Usvl_JUWoDRTcmEcxsUimnRGuw2KrSgHAGA4kLBV26GxdoLdHJBJzsKcKh9DbnkyIkAAHPxfiOSnrb13m0DAFTymlMqcKdwaRFL1MaWDHBV1wpEP0BkYpT1hRcJ4XkcKnlGkvQUQudJ8QsmNOCZGRpOBtldFRC7O4Zh5BXH2XARK3Bkqxh2iDdcGVYDZSilxHiopLqECzqk_q7BBJXE8gAJisq4biaA7wiAiEQN5r0Pm_PYFcQS8gpqY3TtsbKCMIXwo-nk5FeT4rrknsKZFuKjhovrFvHYLT94VORSSnee82mdOxZjQZRMoZRUZZDcwRKLAcOmSwPIlKpkZG4Tyo265FnSRSMi0VBR6UfSitsiM8ACAnOlewIGUUNnBCJUzPCLM5rRJdFgIiy1VqhHWo6LM-h_Jc3stsVxgFNDUFFroMCBgIIewsPwVAPomRIHYPwIExIqjeAyBaf85JvWNP4KwDI-RqD8CuPwfiOBE38Ususfg5RyD9BmN1ONvqQDOPyABGEWAfRhuWuSSgiQCx5ClerS0_qQRBrhiACNIAohoFzfwVQ2AgKprrOmmA8woyBQgPAXNbr6yky1J2kAAA9TyikcAAFYcA_L7R9P15s4CW2trbCAM6LqoG2IgbZ67J2CC1FaSIM752LpXWukA6x4XyC5gG6oHxqCQBSEBB12gnUS1dfwWgvoshxr9WaWgFo60WlmDMfgL64XyCAA",__code:'<Button textAlign="left" block>\n  Click me\n</Button>\n<Button textAlign="center" block>\n  Click me\n</Button>\n<Button textAlign="right" block>\n  Click me\n</Button>',__scope:{props:o,Button:r}},g.a.createElement(r,{textAlign:"left",block:!0},"Click me"),g.a.createElement(r,{textAlign:"center",block:!0},"Click me"),g.a.createElement(r,{textAlign:"right",block:!0},"Click me")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"disabled-button"}},"Disabled button"),g.a.createElement(t.Playground,{__position:6,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLg45bFcDxYHQDMoFiXZTykI7qCKqQ9trTlfxAFC0M-LcaGwh7UCArAyB0UD9EMSR2AAATAKBRjtJaQylUjELNJV_MIpaov-pZHFhgQ7HkZH5XIKB_DgTz-M8i1QggSiaDq7pzMoEc2I4utjCMdhAAAawAdDsAH072EACq7AAUW9hABEZwAOscAAcn2EAG9HAADe9heXWc7Tm2Pqri8SgKVQcT1g59hABsFwAGOqVvk63ydyNflKAUl6gAfeUiHQB35TgG09fZkx2EAADrAA1x9hAEmBwBBgbN9YqDx63UTnFJPYsA3AAYewBemoDkOw7rDxJW2FIhE69BceFKO0QKOP2ANwAfMcAXqn2EAEVHABdxwANefTixYDAAgGl0ZxUKLmPS4NwASMcAD07q_rpvlbrfoUkIDvqC78ge5L8Evc5_32EAVAnABoO5vxmwAhguulJUGt9pW_fdhHfaRE9AEV3OggKf3z773ABCewAepYDwBTFsAH9r18AEebt68AIWcopuwQDyNbVAoQiCBAEE_TmgARycAJGrctFbjxbpQUB85rZax1nA9gAAZNA2xoyIzFPsDI7BtSRE5IABdH2CAA-R9gABVUU-Dt4RAXvOPBwUrCuBSHQxhLC2FoN8F0MAnDY5LwsONCqvF2AADlSy-X8lRagNFNyYRzGxSKKtYY7HCqtKAcAYDiQsJbbobF2jO0ctI7WwpwoF3xueTIiQAAc_F-KmPYJnHYOc2gYEcQ4uxTjhTuDSIpDxXjaBYD3gfcwlir60Bvl4wBwDQF5HCp5LxsNMELjYoY4xXiZGRi8TgMpXRURMzuGYeQVwqlwEStwZKsYdr_XXBlWA2UopcR4qKe-hBNZ6N2ANQSVxPIACYrKuG4mgO8IgIhEEGWrfqXlxnsCuIJeQU0DreKGdlXZyztn1nSm5LKUVzHxXXBHYU-zrlHCOfWHx2dc4BOCfsp5fi86BIeRYaJsT76oH2X8_eALLk7NSRkEBLA8jvOFGk6FBN1w5OkikfZyKChguOVFMpEZ4AEHqZi9gRULBRWKcEB591YKPTmiol0WAiLLVWqEdajosz6H8u9ey2w-GAU0NQYGugwIGAgmzCw_BUA-iZEgdg_AgTEiqN4DIFp_zkilV4_grAMj5GoPwK4_B-I4ANfxSy6x-DlHIP0GY3VdUypADw_IAEYRYB9Kq5a5JKCJALHkDFqNLRypBIqgQJq6z8CiGgG1_BVDYCAsGsVIBMDzCjIFCA8AbWivrPwX1EaQAAD1PKKRwAAVhwOM2NGadCkzgOTSm1MIDZuuqgbYiAyllrjb6q0kRs15oLcW0tIB1jbPkO9eV1QPjUEgCkIC_LtCCrBiK_gtBfRZF1bKs0tALTttmDMfgQ6tnyCAA",__code:"<Button disabled>Click me</Button>",__scope:{props:o,Button:r}},g.a.createElement(r,{disabled:!0},"Click me")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"loading-button"}},"Loading button"),g.a.createElement(t.Playground,{__position:7,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLg9goEobsCgzKBYl2U8pCO6giqkPba05X8QBQtDPi3GhsPu1AgKwMgdFA_RDEkdgAAEwFOkY7SWkMpVIxCzSVfzCKWqK_qWRxToEOx5CR-VyCgfw4E8_jPItUIIEomg6u6czKBHNiOLrYwjHYQAAGsAHQ7AB9O9hAAquwAFFvYQARGcADrHAAHJ9hABvRwAA3vYXl1g8U6dj6q4vEoClUHE9Z2fYQAbBcABjrFb5Ot8nc9X5SgFJeoAH3lIh0Ht-U4BtXW2ZMdhAAA6wANcfYQBJgcAQYHTfWKhcat1E5xSD2LH1wAGHsAXpr_eD0O6w8SVthSIROvQHHhUjtEClj9h9cAHzHAF6p9hABFRwAXccADXm04sWAwAIBpdGcVDC-jkv9cAEjHAA9Oqu68bpW636FJCHb6hO_Ibvi_BT2Ob99hAFQJwAaDqb8ZsAIYKrpSVArfaFv33YB32kRPQBBdzoIEn99e69wAQnsAHqX_cAUxbAB_atfABHmrevAELOUU508hW1QKEIggQBCPw5oAEcnACRq7LBWY9m5nWkikK2mttYwPYAAGTQNsaMCMxT7AyOwbUkROSAAXR9ggAPkfYAAVVFLgreER57zhwcFKwrgUg0PoUwlhKDfBdDAOwmOi8LDjQqrxdgAA5Usvl_JUWoDRTcmEcxsUisrVWuw2KrSgHAGA4kLAW26GxdoTtHKSK1sKcK-c8bnkyIkAAHPxfixj2AZx2NnNoGB7F2JsQ44U7g0iKTcR42gWBd773MOYy-tBr4eIAUAkBdg2KeQ8adc685wr6MMR4qRkYPE4BKV0VEjM7hmHkFcCpcBErcGSrGHaf11wZVgNlKKXEeKijvoQDWOj-rsEElcTyAAmKyrhuJoDvCICIRB-mnF2ANMZ7AriCXkFNA6nidHZW2Ys-KrS3JZSiqYg5Wzw7Cl2Rco4mz6yeMzj43O9jdleKzjnPxgSzl3MidEu-qBdk_L3n8r59ZkkZGASwPILzhQpMhfjdcWT0G7MRQUEFFgoolIjPAAgtSQVFXRYNaRIK7qwQenNJRLosBEWWqtUI61HRZn0P5N69ltg8MApoagQNdBgQMBBVmFh-CoB9EyJA7B-BAmJFUbwGQLT_nJKKjx_BWAZHyNQfgVx-D8RwNq_ill1j8HKOQfoMxuoavFSALh-QAIwiwD6BVy1ySUESAWPIqKUaWklSCGVAh9V1n4FENA5r-CqGwEBP1gqQCYHmFGQKEB4DmoFfWfgHrg0gAAHqeUUjgAArDgUZEbk06BJnAMmFMqYQDTVdVA2xEAlMLZGj1VpIhpszdmvNBaQDrE2fIN6UrqgfGoJAFIQEuXaB5aDfl_BaC-iyBqiVZpaAWibbMGY_Be0bPkEAA",__code:"<Button loading>Click me</Button>",__scope:{props:o,Button:r}},g.a.createElement(r,{loading:!0},"Click me")),g.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"anchor-buttons"}},"Anchor buttons"),g.a.createElement(n.MDXTag,{name:"p",components:e},"\ubc84\ud2bc\uacfc \ub611\uac19\uc774 \uc0dd\uacbc\uc9c0\ub9cc HTML a \ud0dc\uadf8\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),g.a.createElement(t.Playground,{__position:8,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpjvcIInMY05XaT04AEchASdah9DgSQYJuahAwFe1NXNN0TQVc1AzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2FTGYsHaQ86xmbsWHnPiABYRPYAA2ESxPWMBQIAMR9aBEj4_hnEORFHUwdgAAUhH4JYiGoSg4EkxFVLrdSaGcCA6MudgAEZZPE-RVSDVBqKmABBOZWPYaNgA2aB0Ejdh5E5VixAiuMZHYVFmJgbhgGPBimOxeRd3rYByBsKBYuCAAySrxkSeZKGaUqYri7hWvlMBQkCvtUHadgAH5ovKyNo0Sq4mqGuh5DjfdZDMT8zFhDVjhgMAwigKYRqSlK60YUK1zrZNcLg3wujAPgQD5EBxlcbiJ3OgB9DwoHcbZ-GnJdzp-Sh5hdI4flOjIugEcR1wsAA5aI2G6YKrFcQoDobHDYOoIrDuR8wInOy7rtuggHqel63q6KBPuEH6MnYf6VsBsEQFR-sABk0F2Br2BDKU2f2CntUidcpCOlHpr22tOV_EAULQz4txobCBdQICsDIHRQP0QxJHYAABMAoFGO0lvZ6V3XIpV_MIpaorlpZHB1gQ7HkUjEPIZ64DgTz-M8i1QggSiaDq7pzO-uw2I4utjCMdhAAAawAdDsAH072EACq7AAUW9hABEZwAOscAAcn2EAG9HAADe9heXWJ7Tm2Pqri8SgKVQcT1jD9hABsFwAGOoLvk63ydyy_lKAUl6gAfeUiHQPv5TgG0a9Dkx2EAADrAA1x9hAEmBwBBgZb9YqBtzvUTnFJx4sOvAAYewBemrnpeV7rDxJW2FIhE69BreFDe0QKHf2DrwAfMcAXqn2EAEVHABdxwANedPhYWAYACANF0M4VCD8t7PzroAEjHAAenZ_X-ADC51n6CkQgYDqAQPIFAp-4IJ7h1nuwQAqBOABoOwB4xsAEGClACAKRUCd3aMA987B-7tERHoAQw9Oj0MII5Wuk9AAhPYAHqW56AFMWwAP7WkMACPNlCvACFnKKbsEA8id1QKEIggQBAwMnoAEcnACRqznfOqCgGUBUfOTuFcq66PDkzVA2xowG05uEbmkROSAAXR9ggAPkfYAAVVFAzShEQ8HzlsewGGlg4ZeN8QEoJpiTorVCdvAhFhxoVV4uwMGpZfL-SotQGim5MI5jYpFIuOsdjhVWlAOAMBxIWHbt0Ni7RB6OTSZXYU4U7623PJkRIAAOfi_F6nsHPjsK-bQMDdK6R0npwp3BpEUkMkZtAsA0LoQw8KHD9AZDaaM4USiVF5HCp5EZOsLELjYtU2pIz0mRhGTgR5XRUQBzuGYeQVxXlwEStwZKsYdpy3XBlWA2UopcR4qKPhBBy4VN2ANQSVxPIACYrI3R4neEQEQiAwpLv1LySL2BXEEvIKaCNi47GyqM2F8UgVuSylFRpNKEZr2FJSllRxSX1lGRfCZN9umUrGZfa-UzZlMq5as9Z9DUCUolbQqVYr6wKMOSwPIAqDkZGUSqu265znSRSJS3VBQFUWCio8iM8ACBfIVfTKKdzgicsRnLEWeSXRYCIstVaoR1qOizPofyYt7LbDhoBTQ1Ala6DAgYCCIcLD8FQD6JkSB2D8CBMSKo3gMgWn_OSRNIz-CsAyPkag_Arj8H4jgct_FLLrH4OUcg_QZjdRLcmkAMN8gARhFgH0OblrkkoIkAseQjVmilBaVNIIM3AxAHmkAUQ0DNv4KobAQFq11lrTAH6mBAoQHgM2mN9Z-AjtEEm_gAA9TyikcAAFYcBItXVylNztXbu09hABdIA6EOMQI8-9B7BBaitLzE9IBz2XpvXekA6xSXyDFmm6oHxqCQBSEBMN2gI2q2jfwWgvosglpTWaWgFoj0WlmDMfgMGSXyCAA",__code:'<Button href="/" target="_blank" rel="noopener noreferrer">\n  Native A Tag\n</Button>\n<Button to="/" target="_blank" rel="noopener noreferrer">\n  Link of React Router Dom\n</Button>',__scope:{props:o,Button:r}},g.a.createElement(r,{href:"/",target:"_blank",rel:"noopener noreferrer"},"Native A Tag"),g.a.createElement(r,{to:"/",target:"_blank",rel:"noopener noreferrer"},"Link of React Router Dom")))}}}]);