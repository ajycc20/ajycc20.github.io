(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3ff80c"],{8230:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"a",function(){return i});var n=a("b775");function s(t){return Object(n["a"])({url:"/torrent/list",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/torrent/details",method:"get",params:{id:t}})}},8377:function(t,e,a){"use strict";var n=a("db00"),s=a.n(n);s.a},a358:function(t,e,a){"use strict";var n=a("bc3a"),s=a.n(n),i=s.a.create({timeout:5e3});i.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),i.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)});var o=i;a.d(e,"a",function(){return u}),a.d(e,"b",function(){return l});var r=["0df993c66c0c636e29ecbb5344252a4a","0dad551ec0f84ed02907ff5c42e8ec70","02646d3fb69a52ff072d47bf23cef8fd","0b2bdeda43b5688921839c8ecb20399b"],c="b54df738",d=r[Math.floor(Math.random()*r.length)];function u(t){return o({url:"/douban/"+t,method:"get",params:{apikey:d}})}function l(t){return o({url:"/omdb",method:"get",params:{i:"tt"+t,apikey:c,plot:"full"}})}},cf94:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("h1",[t._v(t._s(t.torrentDetail[0].title))]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:16,offset:1}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("IMDB / DouBan / TMDB Information")]),t._v(" "),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[a("router-link",{attrs:{to:"/torrent/edit/"+t.torrentDetail[0].id}},[a("el-button",{attrs:{type:"text"}},[t._v("Edit")])],1),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:t.handleDelete}},[t._v("Delete")])],1)]),t._v(" "),a("div",{staticClass:"info-container"},[a("el-image",{attrs:{src:t.doubanImg,fit:"contain"}}),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"douban-title"},[t._v(t._s(t.doubanInfo.title)+"\n              "),a("a",{staticClass:"douban-icon",attrs:{target:"_blank",href:"https://movie.douban.com/subject/"+t.doubanId}},[a("svg-icon",{attrs:{"icon-class":"douban",title:t.doubanInfo.title}})],1)]),t._v(" "),a("div",{staticClass:"sub-title"},[a("p",[t._v(t._s(t.doubanInfo.alt_title))])]),t._v(" "),a("dl",[a("dt",[t._v("Rating")]),t._v(" "),a("dd",[a("div",{staticClass:"rating"},[a("el-rate",{attrs:{max:t.ratingMax,disabled:"","text-color":"#ff9900"},model:{value:t.doubanRating,callback:function(e){t.doubanRating=e},expression:"doubanRating"}}),t._v(" "),a("div",{staticClass:"rating-text"},[t._v("\n                    "+t._s(t.doubanRating)+" / 10 ("+t._s(t.doubanInfo.rating.numRaters)+" votes)\n                  ")])],1)]),t._v(" "),a("dt",[t._v("Year")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-year"},[t._v("\n                  "+t._s(t.doubanMovieYear)+"\n                ")])]),t._v(" "),a("dt",[t._v("Place")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-country"},[t._v("\n                  "+t._s(t.doubanMovieCountry)+"\n                ")])]),t._v(" "),a("dt",[t._v("Genres")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-type"},[t._v("\n                  "+t._s(t.doubanMovieType)+"\n                ")])]),t._v(" "),a("dt",[t._v("Director")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-directors"},[t._v("\n                  "+t._s(t.doubanMovieDirectors)+"\n                ")])]),t._v(" "),a("dt",[t._v("Language")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-language"},[t._v("\n                  "+t._s(t.doubanMovieLanguage)+"\n                ")])]),t._v(" "),a("dt",[t._v("PubDate")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-pubdate"},[t._v("\n                  "+t._s(t.doubanMoviePubDate)+"\n                ")])]),t._v(" "),a("dt",[t._v("Duration")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-duration"},[t._v("\n                  "+t._s(t.doubanMovieDuration)+"\n                ")])]),t._v(" "),t.doubanInfo.attrs.episodes?a("dt",[t._v("Episodes")]):t._e(),t._v(" "),t.doubanInfo.attrs.episodes?a("dd",[a("div",{staticClass:"movie-episode"},[t._v("\n                  "+t._s(t.doubanMovieEpisode)+"\n                ")])]):t._e(),t._v(" "),a("dt",[t._v("Starring")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-cast"},[t._v("\n                  "+t._s(t.doubanMovieStarring)+"\n                ")])]),t._v(" "),a("dt",[t._v("Tags")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-tags"},[t._v("\n                  "+t._s(t.doubanMovieTags)+"\n                ")])]),t._v(" "),a("dt",[t._v("Plot")]),t._v(" "),a("dd",[a("div",{staticClass:"movie-plot"},[t._v("\n                  "+t._s(t.doubanInfo.summary)+"\n                ")])])])])],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("General")])]),t._v(" "),a("div",{staticClass:"main-torrent-info"},[a("table",[a("tbody",[a("tr",[a("td",[a("strong",[t._v("Title")])]),t._v(" "),a("td",[t._v(t._s(t.torrentDetail[0].title))])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Staff Tools")])]),t._v(" "),a("td",[a("el-button",{attrs:{type:"primary",size:"mini"}},[a("svg-icon",{attrs:{"icon-class":"star-pick",title:"free"}}),t._v("Free\n                  ")],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("2x Free")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("Half")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("2x Half")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("30%")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[a("svg-icon",{attrs:{"icon-class":"sticky",title:"free"}}),t._v("Sticky\n                  ")],1)],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Uploader")])]),t._v(" "),a("td",[a("router-link",{attrs:{to:"#"}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[a("svg-icon",{attrs:{"icon-class":"user",title:"user"}}),t._v(t._s(t.torrentDetail[0].created_by)+"\n                    ")],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"}},[a("svg-icon",{staticStyle:{color:"red"},attrs:{"icon-class":"heart",title:"heart"}}),t._v("Thanks\n                    ")],1)],1)],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Uploaded")])]),t._v(" "),a("td",[t._v(t._s(t.torrentDetail[0].created_at)+"("+t._s(t._f("formatLocalTime")(t.torrentDetail[0].created_at,t.torrentDetail[0].created_at))+")")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Size")])]),t._v(" "),a("td",[t._v(t._s(t._f("fileSize")(t.torrentDetail[0].size,t.torrentDetail[0].size)))])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Category")])]),t._v(" "),a("td",[t._v("Movie")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Peers")])]),t._v(" "),a("td",[a("el-button",{attrs:{type:"primary",size:"mini",round:""}},[a("svg-icon",{attrs:{"icon-class":"card-up"}}),t._v(t._s(t.torrentDetail[0].seeder_count)+"\n                  ")],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",round:""}},[a("svg-icon",{staticClass:"icon-download",attrs:{"icon-class":"card-up"}}),t._v(t._s(t.torrentDetail[0].leecher_count)+"\n                  ")],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",round:""}},[a("svg-icon",{attrs:{"icon-class":"card-snatch"}}),t._v(t._s(t.torrentDetail[0].snatcher_count)+"\n                  ")],1),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v("\n                    View Peers\n                  ")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",round:""}},[t._v("\n                    View Snatchers\n                  ")])],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Tip Amount")])]),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",trigger:"click"}},[a("el-row",{staticStyle:{display:"flex"}},[a("el-button",{attrs:{type:"success"}},[t._v("10")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("50")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("100")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("500")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("1000")]),t._v(" "),a("el-button",{attrs:{type:"success"}},[t._v("2000")]),t._v(" "),a("el-input",{staticStyle:{"margin-left":"5px"},attrs:{placeholder:"Enter a num for tip amount"},model:{value:t.tipCount,callback:function(e){t.tipCount=e},expression:"tipCount"}},[a("template",{slot:"append"},[a("el-button",{attrs:{type:"success"}},[t._v("Leave tip")])],1)],2)],1),t._v(" "),a("el-button",{attrs:{slot:"reference",type:"primary",size:"mini"},slot:"reference"},[t._v("Send")])],1)],1)])])])])]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Screenshots Info")])])]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Comments")])]),t._v("\n        list the comments just like forum details list\n      ")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"card-item"},[a("el-card",{staticClass:"box-card-front",class:{front:t.front2Back}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("UserImg")]),t._v(" "),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[a("svg-icon",{attrs:{"icon-class":"change"},on:{click:t.changeClick}})],1)]),t._v(" "),a("div",{staticClass:"user-info"},[t._v("\n            aaaaa\n          ")])]),t._v(" "),a("el-card",{staticClass:"box-card-back",class:{back:t.front2Back}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("UserInfo")]),t._v(" "),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[a("svg-icon",{attrs:{"icon-class":"change"},on:{click:t.changeClick}})],1)]),t._v(" "),a("div",{staticClass:"user-info"},[t._v("\n            user info\n          ")])])],1)])],1)],1)},s=[],i=(a("7f7f"),a("a481"),a("a358")),o=a("8230"),r=a("ed08"),c={filters:{fileSize:function(t){return Object(r["a"])(t)},formatLocalTime:function(t){return Object(r["b"])(Object(r["d"])(t))}},data:function(){return{torrentDetail:[],doubanInfo:{},imdbPoster:"",doubanPoster:"",doubanId:26931786,doubanRating:0,ratingMax:10,imdbId:6320628,width:38,showHeader:!1,front2Back:!1,tipCount:0}},computed:{imdbImg:function(){return this.imdbPoster.replace(/SX300/g,"SX1000")},doubanImg:function(){return this.doubanPoster.replace(/img3/g,"img1").replace(/s_ratio_poster/g,"l_ratio_poster")},doubanMovieType:function(){return this.doubanInfo.attrs.movie_type.join(" / ")},doubanMovieDirectors:function(){return this.doubanInfo.attrs.director.join(" / ")},doubanMovieLanguage:function(){return this.doubanInfo.attrs.language.join(" / ")},doubanMovieCountry:function(){return this.doubanInfo.attrs.country.join(" / ")},doubanMovieYear:function(){return this.doubanInfo.attrs.year.join(" / ")},doubanMoviePubDate:function(){return this.doubanInfo.attrs.pubdate.join(" / ")},doubanMovieTags:function(){for(var t=[],e=0;e<this.doubanInfo.tags.length;e++)t.push(this.doubanInfo.tags[e].name);return t.join(" | ")},doubanMovieStarring:function(){return this.doubanInfo.attrs.cast.slice(0,10).join(" / ")},doubanMovieDuration:function(){return this.doubanInfo.attrs.movie_duration.join(" / ")},doubanMovieEpisode:function(){return this.doubanInfo.attrs.episodes.join(" / ")}},created:function(){this.getDouban(),this.getOMDB();var t=this.$route.params&&this.$route.params.id;this.getDetails(t)},methods:{getDetails:function(t){var e=this;Object(o["a"])(t).then(function(t){e.torrentDetail.push(t.data),e.setPageTitle()}).catch(function(t){console.log(t)})},getOMDB:function(){var t=this;Object(i["b"])(this.imdbId).then(function(e){t.imdbPoster=e.data.Poster}).catch(function(t){console.log(t)})},getDouban:function(){var t=this;Object(i["a"])(this.doubanId).then(function(e){t.doubanInfo=e.data,t.doubanPoster=e.data.image,t.doubanRating=+e.data.rating.average}).catch(function(t){console.log(t)})},setPageTitle:function(){var t="Torrent Details";document.title="".concat(t," - ").concat(this.torrentDetail[0].title)},handleDelete:function(){alert("Sure to delete")},searchSubTitles:function(){alert("This is subtitles search")},changeClick:function(){this.front2Back=!this.front2Back}}},d=c,u=(a("8377"),a("2877")),l=Object(u["a"])(d,n,s,!1,null,"80bfc068",null);e["default"]=l.exports},db00:function(t,e,a){}}]);