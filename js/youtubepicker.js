!function(e){var n="https://www.googleapis.com/youtube/v3/",t={prefix:"youtubepicker",minChar:3,searchDelay:2,preview:!0,cloneField:!0,offset:{x:0,y:0},nanoScroller:{preventPageScrolling:!0},language:{buttons:{preview:"Preview",select:"Select",close:"&times;"},labels:{views:"Views",noRecords:"No records",loading:"Loading..."}}},i={channelId:"",channelType:"",eventType:"",location:"",locationRadius:"",maxResults:50,order:"relevance",publishedAfter:"",publishedBefore:"",regionCode:"",relatedVideoId:"",relevanceLanguage:"",safeSearch:"none",topicId:"",type:"video",videoCaption:"any",videoCategoryId:"",videoDefinition:"any",videoDimension:"any",videoDuration:"any",videoEmbeddable:"any",videoLicense:"any",videoSyndicated:"any",videoType:"any"},o=function(t,o){var a,r,s,l=this,c=function(e){return e=e||"API_KEY","object"==typeof t&&t.hasOwnProperty(e)?t[e]:!1},d=function(){var e,n={key:c(),part:"snippet",pageToken:r||"",q:s&&s.hasOwnProperty("query")?s.query:""};for(e in i)i.hasOwnProperty(e)&&o.hasOwnProperty(e)&&o[e].toString().length&&(n[e]=o[e]);return o=n};this.doSearch=function(){if(arguments.length&&(s=e.extend({},{query:"",onLoadInit:!1,onLoadComplete:!1,onLoadError:!1},arguments[0]),s.query.length&&c())){var t=this,i=n+"search";a=!1,d(),e.isFunction(s.onLoadInit)&&s.onLoadInit.call(this,{params:o,url:i}),console.log(i,o),e.getJSON(i,o,function(n){a=n,e.isFunction(s.onLoadComplete)&&s.onLoadComplete.call(t,n)}).fail(function(n){e.isFunction(s.onLoadError)&&s.onLoadError.call(t,n)})}return this};var u=function(e){return a&&a.hasOwnProperty(e)?(r=a[e],l.doSearch(s)):!1};return this.nextPage=function(){return u("nextPageToken")},this.prevPage=function(){return u("prevPageToken")},this},a=function(n,t){var i=this,o=t.prefix,a=t.language;return this.template=function(e,t){var i="";switch(e){case"panel":i='<div id="'+o+"-"+n+'" class="'+o+" "+o+'-panel"><div class="'+o+'-wrap"><div class="'+o+'-results nano"><div class="'+o+'-content nano-content"></div><div class="'+o+'-loader">'+a.labels.loading+'</div><div class="'+o+'-no-records">'+a.labels.noRecords+"</div></div></div></div>";break;case"item":i='<div class="'+o+'-item"><div class="'+o+'-thumbnail"><img src="'+t.thumb+'"/></div><div class="'+o+'-info"><p class="'+o+'-title">'+t.title+'</p><p class="'+o+'-description">'+t.description+'</p></div><div class="'+o+'-actions"><a class="'+o+'-select-btn" href="javascript:;">'+a.buttons.select+"</a></div></div>"}return i},this.populate=function(a){var r=e("#"+t.prefix+"-"+n),s=r.find("."+t.prefix+"-content"),l=r.find("."+t.prefix+"-no-records");if(a.hasItems){l.hide();var c,d;for(c in a.items)a.items.hasOwnProperty(c)&&(d=a.items[c],d={vid:d.id.videoId,title:d.snippet.title,description:d.snippet.description,thumb:d.snippet.thumbnails.default.url},s.append(i.template("item",d)),e.data(r.find("."+o+"-item:last")[0],"YPItemData",d))}else l.show();r.find(".nano").nanoScroller()},this.select=function(n,i,a){n.find("."+o+"-select-btn").off().on("click",function(){var r=e(this).closest("."+o+"-item").data("YPItemData");t.cloneField&&(a.val(r.vid),r=e.extend({},r,{clone:a,term:i.val()})),i.trigger("itemSelected",r),n.hide()})},this};e.fn.youtubepicker=function(n,i){var r=e.extend({},t,i),s=new o(n,r);return n&&n.hasOwnProperty("API_KEY")?this.each(function(){var n=null,t=null,i=e(this),o=(new Date).getTime(),l="",c=new a(o,r);r.cloneField&&(t=i.clone(!0),i.removeAttr("name"),t.insertAfter(i),t.hide().removeAttr("class").removeAttr("id"));var d=c.template("panel");e(d).insertAfter(i),d=e("#"+r.prefix+"-"+o);var u=i.offset().left-d.parent().offset().left;r.offset.x&&(u+=parseInt(r.offset.x,10)),d.css("margin-left",u),u=0,r.offset.y&&(u+=parseInt(s.offset.y,10)),d.css("margin-top",u),e.isFunction(d.find(".nano").nanoScroller)&&d.find(".nano").nanoScroller(setTimeout.nanoScroller).on("scrollend",function(){s.nextPage()}),i.on("keyup",function(){var o=e(this).val(),a=d.find("."+r.prefix+"-content");clearTimeout(n),o.length?o.length>=r.minChar&&l!==o&&(n=setTimeout(function(){l=o,a.empty(),s.doSearch({query:o,onLoadInit:function(){d.addClass("loading"),i.trigger("loadInit",{term:o})},onLoadComplete:function(n){n=e.extend({},n,{hasItems:Boolean(n.items)}),c.populate(n),i.trigger("loadComplete",n),c.select(d,i,t),d.removeClass("loading")},onLoadError:function(e){i.trigger("loadError",e)}})},1e3*parseInt(r.searchDelay,10))):a.empty()}).on("focus",function(){e("."+r.prefix+".panel").hide(),d.is(":visible")||d.show()}).on("blur",function(){d.is(":hover")||d.hide()})}):void 0}}(jQuery);