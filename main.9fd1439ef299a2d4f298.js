(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"//yd":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var i,r,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="moviesList-item moviesList-item-js" data-movieId="'+u(typeof(r=null!=(r=d(n,"id")||(null!=t?d(t,"id"):t))?r:s)===c?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:3,column:65},end:{line:3,column:71}}}):r)+'">\r\n        <img src="https://image.tmdb.org/t/p/w300'+u(typeof(r=null!=(r=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?r:s)===c?r.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:49},end:{line:4,column:64}}}):r)+'" alt="It seems the poster is missing"\r\n            onerror="this.onerror=null;this.src=\'https://i.pinimg.com/564x/12/61/84/126184dfb0f0c766bfd35206dae35b37.jpg\';"\r\n            class="moviesList-poster" data-movieId="'+u(typeof(r=null!=(r=d(n,"id")||(null!=t?d(t,"id"):t))?r:s)===c?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:6,column:52},end:{line:6,column:58}}}):r)+'" />\r\n        <a class="moviesList-movieName moviesList-movieName-js">'+u(typeof(r=null!=(r=d(n,"title")||(null!=t?d(t,"title"):t))?r:s)===c?r.call(l,{name:"title",hash:{},data:o,loc:{start:{line:7,column:64},end:{line:7,column:73}}}):r)+'</a>\r\n        <p class="moviesList-movieGenreAndYear moviesList-movieGenreAndYear-js"> '+(null!=(i=d(n,"each").call(l,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o,loc:{start:{line:8,column:81},end:{line:8,column:116}}}))?i:"")+" |\r\n            "+u(typeof(r=null!=(r=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?r:s)===c?r.call(l,{name:"release_date",hash:{},data:o,loc:{start:{line:9,column:12},end:{line:9,column:28}}}):r)+' <span class="modal-movie-description-vote">'+u(typeof(r=null!=(r=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?r:s)===c?r.call(l,{name:"vote_average",hash:{},data:o,loc:{start:{line:9,column:72},end:{line:9,column:88}}}):r)+"</span></p>\r\n\r\n    </li>\r\n"},2:function(e,t,n,a,o){var i,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression("function"==typeof(i=null!=(i=r(n,"name")||(null!=t?r(t,"name"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:o,loc:{start:{line:8,column:97},end:{line:8,column:105}}}):i)+", "},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var i;return'<ul class="moviesList moviesList-js lib-movie-list">\r\n'+(null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:2,column:4},end:{line:12,column:13}}}))?i:"")+"</ul>"},useData:!0})},"2mXJ":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var i,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'                    <span class="modal-movie-genre-name">'+e.escapeExpression("function"==typeof(i=null!=(i=r(n,"name")||(null!=t?r(t,"name"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:o,loc:{start:{line:39,column:57},end:{line:39,column:65}}}):i)+" </span>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var i,r,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<article class="modal-movie-wrapper" id="'+u(typeof(r=null!=(r=d(n,"id")||(null!=t?d(t,"id"):t))?r:s)===c?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:1,column:41},end:{line:1,column:47}}}):r)+'">\r\n    <button class="close-button" type="button">\r\n        <svg class="icon-close" width="24px" height="24px" fill="#000000" viewbox="0 0 32 32"\r\n            xmlns="http://www.w3.org/2000/svg">\r\n            <path stroke="black" stroke-width="2.5" d="M8.533 8.533l14.933 14.933m-14.933.001L23.466 8.534" />\r\n        </svg>\r\n    </button>\r\n    <img src="https://image.tmdb.org/t/p/w500'+u(typeof(r=null!=(r=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?r:s)===c?r.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:10,column:45},end:{line:10,column:60}}}):r)+'" class="modal-movie-poster" loading="lazy"\r\n        onerror="this.onerror=null;this.src=\'https://i.pinimg.com/564x/12/61/84/126184dfb0f0c766bfd35206dae35b37.jpg\';" />\r\n    <div class="modal-movie-information">\r\n        <h2 class="modal-movie-title">'+u(typeof(r=null!=(r=d(n,"title")||(null!=t?d(t,"title"):t))?r:s)===c?r.call(l,{name:"title",hash:{},data:o,loc:{start:{line:17,column:38},end:{line:17,column:47}}}):r)+'</h2>\r\n        <ul class="modal-movie-data">\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Vote / Votes</p>\r\n                <p class="modal-movie-description">\r\n                    <span class="modal-movie-description-vote">'+u(typeof(r=null!=(r=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?r:s)===c?r.call(l,{name:"vote_average",hash:{},data:o,loc:{start:{line:22,column:63},end:{line:22,column:79}}}):r)+'</span>\r\n                    <span class="modal-movie-data-slash">/</span>\r\n                    <span class="modal-movie-description-votes">'+u(typeof(r=null!=(r=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?r:s)===c?r.call(l,{name:"vote_count",hash:{},data:o,loc:{start:{line:24,column:64},end:{line:24,column:78}}}):r)+'</span>\r\n                </p>\r\n            </li>\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Popularity</p>\r\n                <p class="modal-movie-description">'+u(typeof(r=null!=(r=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?r:s)===c?r.call(l,{name:"popularity",hash:{},data:o,loc:{start:{line:29,column:51},end:{line:29,column:65}}}):r)+'</p>\r\n            </li>\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Original Title</p>\r\n                <p class="modal-movie-description-title">'+u(typeof(r=null!=(r=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?r:s)===c?r.call(l,{name:"original_title",hash:{},data:o,loc:{start:{line:33,column:57},end:{line:33,column:75}}}):r)+'</p>\r\n            </li>\r\n            <li class="modal-movie-item">\r\n                <p class="modal-movie-data-name">Genre</p>\r\n                <p class="modal-movie-description">\r\n'+(null!=(i=d(n,"each").call(l,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:38,column:20},end:{line:40,column:29}}}))?i:"")+'                </p>\r\n            </li>\r\n        </ul>\r\n        <p class="modal-movie-about">About</p>\r\n        <p class="modal-movie-descript">'+u(typeof(r=null!=(r=d(n,"overview")||(null!=t?d(t,"overview"):t))?r:s)===c?r.call(l,{name:"overview",hash:{},data:o,loc:{start:{line:45,column:40},end:{line:45,column:52}}}):r)+'</p>\r\n        <div class="buttons-wrapper movie-button">\r\n            <input type="checkbox" class="visuallyhidden watched-checkbox">\r\n            <span class="button add-watched-button" data-movieId="'+u(typeof(r=null!=(r=d(n,"id")||(null!=t?d(t,"id"):t))?r:s)===c?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:48,column:66},end:{line:48,column:72}}}):r)+'">add to watched</span>\r\n            <input type="checkbox" class="visuallyhidden queue-checkbox ">\r\n            <span class="button add-queue-button" data-movieId="'+u(typeof(r=null!=(r=d(n,"id")||(null!=t?d(t,"id"):t))?r:s)===c?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:50,column:64},end:{line:50,column:70}}}):r)+'">add to queue</span>\r\n        </div>\r\n\r\n    </div>\r\n</article>'},useData:!0})},"Dv/5":function(e,t,n){},KHso:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var i,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="moviesList-item moviesList-item-js" data-movieId="'+c(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:l)===s?i.call(r,{name:"id",hash:{},data:o,loc:{start:{line:3,column:65},end:{line:3,column:71}}}):i)+'">\r\n        <img src="https://image.tmdb.org/t/p/w300'+c(typeof(i=null!=(i=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:l)===s?i.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:49},end:{line:4,column:64}}}):i)+'" alt="It seems the poster is missing"\r\n            onerror="this.onerror=null;this.src=\'https://i.pinimg.com/564x/12/61/84/126184dfb0f0c766bfd35206dae35b37.jpg\';"\r\n            class="moviesList-poster" data-movieId="'+c(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:l)===s?i.call(r,{name:"id",hash:{},data:o,loc:{start:{line:6,column:52},end:{line:6,column:58}}}):i)+'" />\r\n        <a class="moviesList-movieName moviesList-movieName-js">'+c(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:l)===s?i.call(r,{name:"title",hash:{},data:o,loc:{start:{line:7,column:64},end:{line:7,column:73}}}):i)+'</a>\r\n        <p class="moviesList-movieGenreAndYear moviesList-movieGenreAndYear-js">'+c(typeof(i=null!=(i=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?i:l)===s?i.call(r,{name:"genre_ids",hash:{},data:o,loc:{start:{line:8,column:80},end:{line:8,column:93}}}):i)+" | "+c(typeof(i=null!=(i=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?i:l)===s?i.call(r,{name:"release_date",hash:{},data:o,loc:{start:{line:8,column:96},end:{line:8,column:112}}}):i)+"</p>\r\n\r\n    </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var i;return'<ul class="moviesList moviesList-js">\r\n'+(null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:2,column:4},end:{line:11,column:13}}}))?i:"")+"</ul>\r\n\r\n\r\n\r\n"},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("wcNg"),n("FdtR"),n("JBxO"),n("WB5j"),n("lmye"),n("IlJM"),n("D/wG");var a,o=n("2c84"),i=n.n(o),r=n("KHso"),l=n.n(r),s=((a={home:document.querySelector(".home-link"),library:document.querySelector(".lib-link"),header:document.querySelector(".header"),search:document.querySelector(".form-search"),buttonHeader:document.querySelector(".button-header"),hits:document.querySelector("movie-searchTag"),logo:document.querySelector(".logo-icon"),headerTitle:document.querySelector(".link-title"),backgroundHome:document.querySelector(".header-home"),gallery:document.querySelector(".movies-container"),pagination:document.querySelector(".pagination"),footer:document.querySelector("footer"),myLibraryBtn:document.querySelector(".lib-link"),inputForm:document.querySelector(".form-search"),homeBtn:document.querySelector(".home-link"),watchedBtn:document.querySelector(".button-watched"),queueBtn:document.querySelector(".button-queque"),body:document.querySelector("body"),errorContainerRef:document.querySelector(".error-container-js"),movieInputRef:document.querySelector(".movie-searchTag-js"),myLibraryButton:document.querySelector(".lib-link"),filmCard:document.querySelector(".film-card"),movieModal:document.querySelector(".movie-modal"),backdrop:document.querySelector(".backdrop"),movieContainer:document.querySelector(".movies-container-js"),openModalHeaderBtn:document.querySelector("[data-modal-header-open]"),modalHeader:document.querySelector(".js-lightbox-header"),closeModalHeaderBtn:document.querySelector(".lightbox-button-header"),overlayHeader:document.querySelector(".lightbox-overlay-header"),openModalFooterBtn:document.querySelector("[data-modal-footer-open]"),modalFooter:document.querySelector(".js-lightbox"),closeModalFooterBtn:document.querySelector(".lightbox-button"),overlayFooter:document.querySelector(".lightbox-overlay"),ourTeamRefs:document.querySelector(".footer-team-link")}).pagination=document.getElementById("pagination"),a.themeInputRef=document.querySelector(".theme-switch__toggle"),a),c=function(){document.querySelector(".spinner").classList.remove("is-hidden"),s.gallery.innerHTML=""},u=function(){document.querySelector(".spinner").classList.add("is-hidden")};function d(e,t,n){u(),t.innerHTML="",s.errorContainerRef.innerHTML="";var a=n(e);s.pagination.classList.remove("is-hidden"),t.insertAdjacentHTML("beforeend",a)}function m(e,t,n,a,o,i,r){try{var l=e[i](r),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function r(e){m(i,a,o,r,l,"next",e)}function l(e){m(i,a,o,r,l,"throw",e)}r(void 0)}))}}var p="1690d1319b4e719ac3308f10c68ac649",v={moviesSearchActive:!1,searchTag:"",page:1,itemsPerPage:9,adult:"false",language:"en-US",validTimeWindow:"day",validMediaType:"movie",genresArray:[],errorHandler:function(e){s.pagination.classList.add("is-hidden"),s.errorContainerRef.innerHTML=e+". It is a server error , Pls just try again!"},fetchGenres:function(){var e=this,t="https://api.themoviedb.org/3/genre/movie/list?api_key="+p+"&language="+this.language;fetch(t).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.genres})).catch(this.errorHandler).then((function(t){e.genresArray=t.slice()}))},getMoviesWithGenreNames:function(e){var t=this;e.results.map((function(e){if(0===e.genre_ids.length)e.genre_ids.push("Genre");else{var n=e.genre_ids.map((function(e){return" "+t.genresArray.find((function(t){return t.id===e})).name}));e.genre_ids=n.slice()}return e}))},trimmMovieYear:function(e){e.results.map((function(e){return""===e.release_date?e.release_date="Year":e.release_date=e.release_date.substring(0,4),e}))},resetPageToFirst:function(){this.page=1},get movieName(){return this.searchTag},set movieName(e){this.searchTag=e},searchMoviesbyTag:function(e){var t=this;void 0===e&&(e=1),this.moviesSearchActive=!0;var n="https://api.themoviedb.org/3/search/movie?api_key="+p+"&language="+this.language+"&query="+this.searchTag+"&page="+e+"&per_page="+this.itemsPerPage+"&include_adult="+this.adult;return this.fetchGenres(),fetch(n).then((function(e){if(e.ok)return e.json()})).then((function(e){return 0===e.results.length?(s.errorContainerRef.innerHTML="Search result not successful. Enter the correct movie name and try again",s.pagination.classList.add("is-hidden"),void(s.gallery.innerHTML="Search result not successful. Enter the correct movie name and try again")):(t.getMoviesWithGenreNames(e),t.trimmMovieYear(e),e)})).catch(this.errorHandler)},getTrendingMovies:function(e){var t=this;void 0===e&&(e=1),this.moviesSearchActive=!1,s.movieInputRef.value="";var n="https://api.themoviedb.org/3/trending/"+this.validMediaType+"/"+this.validTimeWindow+"?api_key="+p+"&language="+this.language+"&page="+e+"&per_page="+this.itemsPerPage;return this.fetchGenres(),fetch(n).then((function(e){if(e.ok)return e.json()})).then((function(e){return t.getMoviesWithGenreNames(e),t.trimmMovieYear(e),t.page+=1,e})).catch(this.errorHandler)},getFullMovieInfo:function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key="+p+"&language=en-US").then((function(e){if(e.ok)return e.json()})).then((function(e){return""===e.release_date?e.release_date="Year":e.release_date=e.release_date.substring(0,4),e})).catch(this.errorHandler)},searchMovies:function(e){var t=this;return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return void 0===e&&(e=1),s.pagination.classList.remove("is-hidden"),n.abrupt("return",t.searchMoviesbyTag(e).then((function(e){if(u(),void 0!==e)return d(e.results,s.gallery,l.a),e})).catch(t.errorHandler));case 3:case"end":return n.stop()}}),n)})))()},showMoviesInTrend:function(e){var t=this;return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return void 0===e&&(e=1),s.pagination.classList.remove("is-hidden"),n.abrupt("return",t.getTrendingMovies(e).then((function(e){return d(e.results,s.gallery,l.a),e})).catch(t.errorHandler));case 3:case"end":return n.stop()}}),n)})))()}},g=n("jffb"),f=n.n(g);function y(e){new i.a("pagination",{totalItems:e,itemsPerPage:20,visiblePages:5,template:{page:'<a href="#" class="tui-page-btn btn-page1 btn">{{page}}</a>',currentPage:'<a href="#" class="tui-page-btn btn-page1 active btn">{{page}}</a>',moveButton:'<a href ="#" class=" {{type}} custom-class-{{type}}"></a>',disabledMoveButton:'<a href ="#" class="{{type}} custom-class-{{type}}"></a>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",(function(e){console.log("poisk ili net",v.moviesSearchActive),!1===v.moviesSearchActive?v.showMoviesInTrend(e.page):!0===v.moviesSearchActive&&v.searchMovies(e.page)}))}function b(e,t,n,a,o,i,r){try{var l=e[i](r),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,o)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function r(e){b(i,a,o,r,l,"next",e)}function l(e){b(i,a,o,r,l,"throw",e)}r(void 0)}))}}function k(){return w.apply(this,arguments)}function w(){return(w=L(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(),!1!==v.moviesSearchActive){e.next=7;break}return e.next=4,v.showMoviesInTrend();case 4:t=e.sent,e.next=11;break;case 7:if(!0!==v.moviesSearchActive){e.next=11;break}return e.next=10,v.searchMovies();case 10:t=e.sent;case 11:if(void 0!==t){e.next=13;break}return e.abrupt("return");case 13:y(t.total_results);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(),s.movieInputRef.addEventListener("input",f()((function(e){var t=e.target.value;if(""==t)return v.moviesSearchActive=!1,void k();v.movieName=t,v.moviesSearchActive=!0,k()}),500)),k();n("Dv/5"),n("uQK7");var S=n("2mXJ"),q=n.n(S),M=(n("Xlt+"),{getFilms:function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):[]},putFilms:function(e,t){var n=this.getFilms(e),a=!1,o=n.indexOf(t);return-1===o?(n.unshift(t),a=!0):n.splice(o,1),localStorage.setItem(e,JSON.stringify(n)),{pushFilm:a,films:n}}}),x=n("jffb");function _(e){"Escape"===e.code&&j()}function j(){s.movieModal.classList.add("is-hidden"),s.body.classList.remove("modal-overflow"),window.removeEventListener("keydown",_),s.filmCard.innerHTML=""}function P(e,t,n,a,o){-1===e.indexOf(JSON.stringify(t.id))?(n.checked=!1,a.classList.remove("active"),a.textContent="ADD TO "+o):(n.checked=!0,a.classList.add("active"),a.textContent="REMOVE FROM "+o)}function E(e,t){var n=document.querySelector(".lib-movie-list [data-movieid='"+e.target.dataset.movieid+"']"),a=M.putFilms(t,e.target.dataset.movieid),o=a.pushFilm;a.films;o?(e.target.textContent="REMOVE FROM "+t,e.target.classList.add("active"),(null!==n&&s.watchedBtn.classList.contains("active")&&"watched"===t||null!==n&&s.queueBtn.classList.contains("active")&&"queue"===t)&&n.classList.remove("display-none")):(e.target.textContent="ADD TO "+t,e.target.classList.remove("active"),(null!==n&&s.watchedBtn.classList.contains("active")&&"watched"===t||null!==n&&s.queueBtn.classList.contains("active")&&"queue"===t)&&n.classList.add("display-none"))}s.movieContainer.addEventListener("click",x((function(e){if("IMG"!==e.target.nodeName)return;s.movieModal.classList.remove("is-hidden"),s.body.classList.add("modal-overflow"),window.addEventListener("keydown",_),s.backdrop.addEventListener("click",j),v.getFullMovieInfo(e.target.dataset.movieid).then((function(e){var t=M.getFilms("watched"),n=M.getFilms("queue");s.filmCard.insertAdjacentHTML("beforeend",q()(e)),document.querySelector(".close-button").addEventListener("click",j);var a=document.querySelector(".watched-checkbox"),o=document.querySelector(".add-watched-button"),i=document.querySelector(".queue-checkbox"),r=document.querySelector(".add-queue-button");P(t,e,a,o,"watched"),P(n,e,i,r,"queue"),o.onclick=function(e){return E(e,"watched")},r.onclick=function(e){return E(e,"queue")}}))}),100));var T=n("yv2V"),I=n.n(T);function H(){window.removeEventListener("keydown",O),s.modalHeader.classList.remove("is-open")}function O(e){"Escape"===e.code&&H()}function B(e){e.target===e.currentTarget&&H()}function F(e){window.removeEventListener("keydown",A),s.body.classList.remove("modal-overflow"),s.modalFooter.classList.remove("is-open")}function A(e){"Escape"===e.code&&F()}function R(e){e.target===e.currentTarget&&F()}s.openModalHeaderBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",O),s.modalHeader.classList.add("is-open"),s.overlayHeader.addEventListener("click",B)})),s.closeModalHeaderBtn.addEventListener("click",H),s.openModalFooterBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",A),s.body.classList.add("modal-overflow"),s.modalFooter.classList.add("is-open"),s.overlayFooter.addEventListener("click",R)})),s.closeModalFooterBtn.addEventListener("click",F);var C=I()([{photo:"https://avatars.githubusercontent.com/u/65783550?s=460&u=f03097692fcd208c83152edfe456583d97108396&v=4",name:"Marchenko Yaroslava",github:"https://github.com/FortuneFame",email:"fortunefame1710@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68250515?s=400&u=0c939accab5c3af28e5ad7f1f1348333169ffe9f&v=4",name:"Bondar Volodymyr",github:"https://github.com/vova0737",email:"vova0737@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68153529?s=400&v=4",name:"Kmetyuk Alexander",github:"https://github.com/AlexKmetyuk",email:"kmetyuk.sasha@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68988546?s=400&v=4",name:"Vyshnevetska Yuliana",github:"https://github.com/Yuliana-vish",email:"yuliana.vish@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68770490?s=460&u=708516edefb80d6e3e30c71b35388cb888563cc4&v=4",name:"Alchynska Iryna",github:"https://github.com/ira-alchynska",email:"iren0988@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68867876?s=400&v=4",name:"Yatskov Danyil",github:"https://github.com/DanyilYatskov",email:"danila0502@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/57599658?s=400&v=4",name:"Bogdan Lyopa",github:"https://github.com/BogdanLyopa",email:"bogdanlyopa@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68517079?s=400&v=4",name:"Sergey Boiarskii",github:"https://github.com/sergvinn1",email:"sergvinn2008@gmail.com"},{photo:"https://avatars.githubusercontent.com/u/68437095?s=400&u=7d7845438d2d1440e9f9b5b99500090adcce613b&v=4",name:"Diana Kuzmina",github:"https://github.com/Di-ua",email:"di.ua@mail.ru"}]);s.ourTeamRefs.insertAdjacentHTML("beforeend",C);n("y89P"),n("Muwe"),n("X5mX");s.home.addEventListener("click",(function(e){e.preventDefault(),s.header.classList.replace("header-lib","header-home"),s.search.classList.remove("is-hidden"),s.buttonHeader.classList.add("is-hidden"),s.library.classList.remove("is-active"),s.home.classList.add("is-active")})),s.home.addEventListener("click",k),s.library.addEventListener("click",(function(e){e.preventDefault(),s.header.classList.replace("header-home","header-lib"),s.buttonHeader.classList.remove("is-hidden"),s.search.classList.add("is-hidden"),s.home.classList.remove("is-active"),s.library.classList.add("is-active"),s.pagination.classList.add("is-hidden")}));var D=n("//yd"),G=n.n(D),N=document.querySelector(".button-queque"),Y=document.querySelector(".button-watched"),J=document.querySelector(".movies-container-js");function V(e){var t=M.getFilms(e),n=[];c(),0===t.length&&(s.pagination.innerHTML="",J.innerHTML="<p>Movie list is empty</p>",u()),"watched"===e?(N.classList.remove("active"),Y.classList.add("active")):(N.classList.add("active"),Y.classList.remove("active")),t.map((function(t){v.getFullMovieInfo(t).then((function(t){n.push(t),function(e,t){new i.a("pagination",{totalItems:e.length,itemsPerPage:20,visiblePages:5,template:{page:'<a href="#" class="tui-page-btn btn-page1 btn">{{page}}</a>',currentPage:'<a href="#" class="tui-page-btn btn-page1 active btn">{{page}}</a>',moveButton:'<a href ="#" class=" {{type}} custom-class-{{type}}"></a>',disabledMoveButton:'<a href ="#" class="{{type}} custom-class-{{type}}"></a>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",(function(e){console.log(e.page);var n=M.getFilms(t),a=[];n.map((function(t){v.getFullMovieInfo(t).then((function(t){a.push(t),d(W(a,e.page),J,G.a)}))}))}))}(n,e),d(W(n,1),J,G.a)}))}))}function W(e,t){for(var n=[],a=20*(t-1);a<20*t;a++){if(null==e[a])return n;n.push(e[a])}return n}document.querySelector(".lib-link").addEventListener("click",(function(){return V("watched")})),Y.addEventListener("click",(function(){return V("watched")})),N.addEventListener("click",(function(){return V("queue")}));var K=function(){"light-theme"!==localStorage.getItem("theme")&&localStorage.getItem("theme")||(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")),"dark-theme"===localStorage.getItem("theme")&&(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),s.themeInputRef.checked=!0)};K(),s.themeInputRef.addEventListener("input",(function(e){e.target.checked?localStorage.setItem("theme","dark-theme"):localStorage.setItem("theme","light-theme"),K()}))},yv2V:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var i,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="team">\r\n    <img src="'+s("function"==typeof(i=null!=(i=c(n,"photo")||(null!=t?c(t,"photo"):t))?i:l)?i.call(r,{name:"photo",hash:{},data:o,loc:{start:{line:3,column:14},end:{line:3,column:23}}}):i)+'" alt="team-photo" class="team-photo">\r\n    <h3 class="team-name">'+s("function"==typeof(i=null!=(i=c(n,"name")||(null!=t?c(t,"name"):t))?i:l)?i.call(r,{name:"name",hash:{},data:o,loc:{start:{line:4,column:26},end:{line:4,column:34}}}):i)+'</h3>\r\n    <ul class="team-social-links">\r\n        <li class="social-links">\r\n            <a href="'+s("function"==typeof(i=null!=(i=c(n,"github")||(null!=t?c(t,"github"):t))?i:l)?i.call(r,{name:"github",hash:{},data:o,loc:{start:{line:7,column:21},end:{line:7,column:31}}}):i)+'" target="_blank" aria-label="Github" class="social-link">\r\n                <svg class="" width="24" height="24">\r\n                    <use href="./images/symbol-defs.svg#icon-github"></use>\r\n                </svg>\r\n            </a>\r\n        </li>\r\n        <li class="social-links">\r\n            <a href="mailto:'+s("function"==typeof(i=null!=(i=c(n,"gmail")||(null!=t?c(t,"gmail"):t))?i:l)?i.call(r,{name:"gmail",hash:{},data:o,loc:{start:{line:14,column:28},end:{line:14,column:37}}}):i)+'" target="_blank" aria-label="mail" class="social-link">\r\n                <svg class="icon-gmail" width="24" height="24">\r\n                    <use href="./images/symbol-defs.svg#icon-gmail"></use>\r\n                </svg>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</li>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:22,column:9}}}))?i:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9fd1439ef299a2d4f298.js.map