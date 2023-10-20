/*
 * Copyright (c) 2023 Frenify
 * Author: Frenify
 * This file is made for CURRENT THEME
 */

/*

	@Author: Frenify
	@URL: https://frenify.com/


	This file contains the jquery functions for the actual theme, this
	is the file you need to edit to change the structure of the
	theme.

	This files contents are outlined below.

*/

jQuery.fn.isInViewportByFrenify = function () {
  "use strict";
  var element = jQuery(this),
    windoww = jQuery(window);
  var elementTop = element.offset().top;
  var elementBottom = elementTop + element.outerHeight();

  var viewportTop = windoww.scrollTop();
  var viewportBottom = viewportTop; // + windoww.height();
  var percentage = ((viewportTop - elementTop) / element.outerHeight()) * 100;
  return [
    elementBottom > viewportTop && elementTop < viewportBottom,
    percentage,
  ];
};

jQuery.fn.isInViewportByFrenifyBottom = function () {
  "use strict";
  var element = jQuery(this),
    windoww = jQuery(window);
  var elementTop = element.offset().top;
  var elementBottom = elementTop + element.outerHeight();

  var viewportTop = windoww.scrollTop();
  var viewportBottom = viewportTop + windoww.height();
  var percentage = ((viewportTop - elementTop) / element.outerHeight()) * 100;
  return [
    elementBottom > viewportTop && elementTop < viewportBottom,
    percentage,
  ];
};

var SpideAjax = SpideAjaxObject;
var SpideBody = jQuery("body");
var SpideWrapper = jQuery(".spide-fn-wrapper");
var SpideVoteWait = false;
var SpideReactionWait = false;
var SpideNextPostWait = false;
var SpideQuickNav = 0;
var SpideCounterAjaxPost = 1;
var SpideSearch = {
  search: "",
  text: "",
  onlyTitle: false,
  onlyPost: false,
};
var PoptioEntityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;",
};

// All other theme functions
(function ($) {
  "use strict";

  var SpideInit = {
    pageNumber: 1,

    init: function () {
      this.cursor();
      this.fixShareAvoidAccidentalClick();
      this.blog_info();
      this.url_fixer();
      this.hamburgerOpener__Mobile();
      this.submenu__Mobile();
      this.imgToSVG();
      this.isotopeMasonry();
      this.dataFnBgImg();
      this.widget__pages();
      this.widget__archives();
      this.inputCheckBoxInComment();

      this.totopWinScroll();
      this.widgetTitle();
      this.fixAdminBar();
      this.minHeightPages();

      // since spide
      this.ready();
      this.totopScroll();
      this.seachSomething();
      this.reversedMenu();
      this.commentOpener();
      this.voteOpener();
      this.reaction();
      this.ajaxNextPost();
      this.nowReading();
      this.transformReading();
      this.stickyHeader();
      this.stickyTopBar();
      this.mobile__Menu();
      this.getSidePopupPost();
      this.embedOpener();
      this.topQuickNav();
      this.blogPageFeatured();
      this.removePaddingFromWidgetsIfNoTitle();
    },

    infiniteScrollBlogList: function () {
      var e = $("#spide_fn_footer");
      $(window).on("resize scroll", function () {
        var f = e.isInViewportByFrenifyBottom();
        if (f[0]) {
          console.log("asd");
        }
      });
    },

    fixShareAvoidAccidentalClick: function () {
      $(".icon_bar__share > a")
        .off()
        .on("click", function () {
          return false;
        });
    },

    removePaddingFromWidgetsIfNoTitle: function () {
      $(".spide_fn_hassidebar .widget_block").each(function () {
        if (!$(this).find(".wid-title .text").length) {
          $(this).addClass("widget-no-title");
        }
      });
      if ($(".spide_fn_hassidebar").length) {
        SpideBody.addClass("spide-has-sidebar");
      }
    },

    blogPageFeatured: function () {
      var rtl = false;
      if ($("body").hasClass("rtl")) {
        rtl = true;
      }
      $(".fn__bp_slider .owl-carousel").each(function () {
        var owl = $(this);
        var parent = owl.closest(".fn__bp_slider");
        owl.owlCarousel({
          items: 1,
          loop: true,
          rtl: rtl,
          margin: 10,
          autoplay: true,
          dots: false,
          smartSpeed: 1500,
          autoplayTimeout: 7000,
          autoplayHoverPause: true,
        });
        SpideInit.imgToSVG();
        parent
          .find(".slider_nav.prev")
          .off()
          .on("click", function () {
            owl.trigger("prev.owl.carousel", [1500]);
            return false;
          });
        parent
          .find(".slider_nav.next")
          .off()
          .on("click", function () {
            owl.trigger("next.owl.carousel");
            return false;
          });
      });
      $(".fn__gallery_format .owl-carousel").each(function () {
        var owl = $(this);
        var parent = owl.closest(".fn__gallery_format");
        owl.owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          rtl: rtl,
          autoplay: true,
          dots: false,
          smartSpeed: 1500,
          autoplayTimeout: 7000,
          autoplayHoverPause: true,
        });
        SpideInit.imgToSVG();
        parent
          .find(".slider_nav.prev")
          .off()
          .on("click", function () {
            owl.trigger("prev.owl.carousel", [1500]);
            return false;
          });
        parent
          .find(".slider_nav.next")
          .off()
          .on("click", function () {
            owl.trigger("next.owl.carousel");
            return false;
          });
      });
      $(".fn__cat_slider .owl-carousel").each(function () {
        var owl = $(this);

        owl.owlCarousel({
          items: 4,
          loop: true,
          rtl: rtl,
          margin: 60,
          autoplay: true,
          dots: false,
          smartSpeed: 1500,
          autoplayTimeout: 7000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            480: {
              items: 2,
              margin: 30,
            },
            1041: {
              items: 3,
            },
            1201: {
              items: 4,
              margin: 60,
            },
          },
        });
        SpideInit.dataFnBgImg();
      });
    },

    quickNavResize: function () {
      $(".fn__blog_anchor").css({ top: "100%", left: "100%" });
    },

    handle_mousedown: function (e) {
      var my_dragging = {};
      my_dragging.pageX0 = e.pageX;
      my_dragging.pageY0 = e.pageY;
      my_dragging.elem = this;
      my_dragging.offset0 = $(this).offset();

      function handle_dragging(e) {
        var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
        var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
        $(my_dragging.elem).offset({ top: top, left: left });
      }

      function handle_mouseup() {
        $("body")
          .off("mousemove", handle_dragging)
          .off("mouseup", handle_mouseup);
      }

      $("body").on("mouseup", handle_mouseup).on("mousemove", handle_dragging);
    },

    topQuickNav: function () {
      $(".fn__blog_anchor").mousedown(SpideInit.handle_mousedown);
      $(".fn__blog_anchor .closer")
        .off()
        .on("click", function () {
          $(".fn__blog_anchor").removeClass("active").css({ left: "100%" });
          SpideBody.removeClass("blog-anchor-active");
          SpideQuickNav = 0;
          return false;
        });

      var stickyH = 0;
      if ($(".spide_fn_stickynav").length) {
        stickyH = $(".spide_fn_stickynav").outerHeight();
      }

      $(".fn__blog_anchor .ba_item")
        .off()
        .on("click", function () {
          var id = $(this).data("id");
          $([document.documentElement, document.body]).animate(
            {
              scrollTop:
                $('.spide_fn_blog_single[data-post-id="' + id + '"]').offset()
                  .top -
                80 -
                stickyH,
            },
            600
          );
        });
    },

    embedOpener: function () {
      var box = $(".fn__popupbox_iframe");
      var content = box.find(".iframe_content");
      $(".fn__video_popup,.fn__audio_popup")
        .off()
        .on("click", function () {
          var embed = $(this).siblings(".embed_code").html();
          content.html("").html(embed);
          box.addClass("active");
          return false;
        });
      box
        .find(".iframe_closer")
        .off()
        .on("click", function () {
          box.removeClass("active");
          setTimeout(function () {
            content.html("");
          }, 400);
          return false;
        });
    },

    mobile__Menu: function () {
      var mobNav = $(".spide_fn_mobnav");
      var trigger = mobNav.find(".mobmenu_opener");
      var featured = mobNav.find(".item_featured a");
      var mobBottom = mobNav.find(".mob_bot");
      var featuredBar = mobNav.find(".mob_featured_bar");
      trigger.off().on("click", function () {
        if (mobNav.hasClass("menu_opened")) {
          mobNav.removeClass("menu_opened");
          mobBottom.slideUp();
        } else {
          mobNav.addClass("menu_opened").removeClass("featured_bar_opened");
          featuredBar.slideUp();
          mobBottom.slideDown();
        }
        return false;
      });
      featured.off().on("click", function () {
        if (mobNav.hasClass("featured_bar_opened")) {
          mobNav.removeClass("featured_bar_opened");
          featuredBar.slideUp();
        } else {
          mobNav.addClass("featured_bar_opened").removeClass("menu_opened");
          mobBottom.slideUp();
          featuredBar.slideDown();
        }
        return false;
      });
    },

    stickyTopBar: function () {
      var stickyHeader = $(".spide_fn_stickynav");
      if (stickyHeader.length) {
        stickyHeader
          .on("mouseenter", function () {
            stickyHeader.addClass("hover");
          })
          .on("mouseleave", function () {
            stickyHeader.removeClass("hover");
          });
      }
    },

    stickyHeader: function () {
      var stickyHeader = $(".spide_fn_stickynav");
      if (stickyHeader.length) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > $(".spide_fn_header").outerHeight() + 50) {
          SpideBody.addClass("sticky-active");
        } else {
          SpideBody.removeClass("sticky-active");
        }
      }
    },

    transformReading: function () {
      var stickyHeader = $(".spide_fn_stickynav.ajax_enable");
      if (stickyHeader.length && SpideBody.hasClass("single-post")) {
        var lastScrollTop = 0;
        $(window).scroll(function () {
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
            // downscroll
            stickyHeader.addClass("active");
          }
          lastScrollTop = st;
        });
      }
    },

    nowReading: function () {
      var title = $(".header_post_reading .reading_post .title");
      // var progress = $(".spide_fn_stickynav .progress");
      // $(window).on("resize scroll", function () {
      //   var bs = $(".spide_fn_blog_single");
      //   bs.each(function () {
      //     var e = $(this);
      //     var f = e.isInViewportByFrenify();
      //     var p = f[1];
      //     // if (f[0]) {
      //     //   var newPostTitle = e.data("post-title");
      //     //   if (title.html() !== newPostTitle) {
      //     //     title.html(e.data("post-title"));
      //     //   }
      //     //   var currentURL = window.location.href;
      //     //   var newURL = e.data("post-url");
      //     //   if (currentURL !== newURL) {
      //     //     window.history.pushState("", newPostTitle, newURL);
      //     //   }
      //     // }
      //     // if (p >= 0 && p <= 100) {
      //     //   progress.css({ width: p + "%" });
      //     // }
      //   });
      // });
    },
    

    getSidePopupPost: function () {
      var sidepp = $(".fn__fixed_bottom_post");
      if (sidepp.length) {
        $(document).scroll(function () {
          var footerHeight =
            $("#spide_fn_footer").length > 1
              ? $("#spide_fn_footer").outerHeight()
              : 0;
          if (
            window.innerHeight + window.scrollY + 400 >=
              document.body.offsetHeight - footerHeight &&
            !sidepp.hasClass("remove")
          ) {
            sidepp.addClass("active");
          }
        });
        sidepp
          .find(".fbp_closer a")
          .off()
          .on("click", function () {
            sidepp.removeClass("active").delay(500).addClass("remove");
            return false;
          });
      }
    },

    ajaxNextPost: function () {
      var singlePost = $(".spide_fn_singleajax");
      if ($(".spide_fn_singleajax").length && !SpideNextPostWait) {
        $(document).scroll(function () {
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - $("#spide_fn_footer").outerHeight()
          ) {
            if (!SpideNextPostWait) {
              var single = $(".spide_fn_blog_single");
              var ID = single.last().data("get-post-id");
              if (ID === "") {
                SpideNextPostWait = true;
                SpideBody.addClass("no-prev-post");
                return false;
              }
              SpideBody.addClass("prev-post-loading");
              SpideNextPostWait = true;
              var requestData = {
                action: "spide_fn_get_prev_post",
                ID: ID,
                security: SpideAjax.nonce,
              };

              $.ajax({
                type: "POST",
                url: SpideAjax.ajax_url,
                cache: false,
                data: requestData,
                success: function (data) {
                  SpideQuickNav++;
                  if (SpideQuickNav === 1) {
                    $(".fn__blog_anchor").addClass("active");
                    SpideBody.addClass("blog-anchor-active");
                  }
                  var fnQueriedObj = $.parseJSON(data); //get the data object
                  singlePost.append(fnQueriedObj.output);
                  SpideInit.init();
                  SpideBody.removeClass("prev-post-loading");

                  SpideCounterAjaxPost++;
                  var appendedElement = singlePost.children().last();
                  $(".fn__blog_anchor ul").append(
                    '<li><div class="ba_item" data-id="' +
                      appendedElement.data("post-id") +
                      '"><span class="ba_count"><span>' +
                      SpideCounterAjaxPost +
                      "</span></span><h4><span>" +
                      appendedElement.data("post-title") +
                      "</span></h4></div></li>"
                  );
                  $(".fn__blog_anchor li").addClass("ready");
                  SpideInit.topQuickNav();
                  setTimeout(function () {
                    SpideNextPostWait = false;
                  }, 800);
                },
                error: function (MLHttpRequest, textStatus, errorThrown) {
                  console.log(MLHttpRequest);
                  console.log(textStatus);
                  console.log(errorThrown);
                },
              });
            }
          }
        });
      }
    },

    voteOpener: function () {
      $(".spide_fn_votes")
        .off()
        .on("click", function () {
          var e = $(this);
          var b = e.find(".vote_info");
          if (e.hasClass("opened")) {
            e.removeClass("opened");
            b.slideUp(300);
          } else {
            e.addClass("opened");
            b.slideDown(300);
          }
        });

      $(".spide_fn_vote_up")
        .off()
        .on("click", function (e) {
          e.preventDefault();
          var element = $(this);
          if (element.closest(".spide_fn_votes").hasClass("up_action")) {
            return false;
          }
          SpideInit.vote(element, "up");
          return false;
        });

      $(".spide_fn_vote_down")
        .off()
        .on("click", function (e) {
          e.preventDefault();
          var element = $(this);
          if (element.closest(".spide_fn_votes").hasClass("down_action")) {
            return false;
          }
          SpideInit.vote(element, "down");

          return false;
        });
    },

    vote: function (element, action) {
      if (SpideVoteWait === true) {
        return false;
      }
      var parent = element.closest(".spide_fn_votes");
      parent.addClass("loading");
      SpideVoteWait = true;
      var ID = parent.data("id");
      var requestData = {
        action: "spide_fn_vote",
        ID: ID,
        voteAction: action,
        security: SpideAjax.nonce,
      };

      $.ajax({
        type: "POST",
        url: SpideAjax.ajax_url,
        cache: false,
        data: requestData,
        success: function (data) {
          var fnQueriedObj = $.parseJSON(data); //get the data object
          parent.find(".result_vote .count").text(fnQueriedObj.count__result);
          parent.find(".vote_info").html(fnQueriedObj.result__text);
          parent.removeClass("loading");
          parent.find(".result_vote .action").text(fnQueriedObj.difference);
          parent
            .removeClass("up_action down_action")
            .addClass(action + "_action");
          SpideVoteWait = false;
        },
        error: function (MLHttpRequest, textStatus, errorThrown) {
          console.log(MLHttpRequest);
          console.log(textStatus);
          console.log(errorThrown);
        },
      });
    },

    escapeHTML: function (string) {
      return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return PoptioEntityMap[s];
      });
    },

    reaction: function () {
      $(".spide_fn_reaction_btn")
        .off()
        .on("click", function () {
          var element = $(this);
          if (SpideReactionWait === true) {
            return false;
          }
          var parent = element.closest(".spide_fn_reactions");
          parent.addClass("loading");
          SpideReactionWait = true;
          var ID = element.data("id");
          var requestData = {
            action: "spide_fn_reactions",
            ID: parseInt(ID),
            ajax_action: SpideInit.escapeHTML(element.data("action")),
            security: SpideAjax.nonce,
          };

          $.ajax({
            type: "POST",
            url: SpideAjax.ajax_url,
            cache: false,
            data: requestData,
            success: function (data) {
              var fnQueriedObj = $.parseJSON(data); //get the data object
              var newReaction = fnQueriedObj.reaction;
              var ajaxAction = fnQueriedObj.ajax_action;
              element = $(
                '.spide_fn_reaction_btn[data-id="' +
                  ID +
                  '"][data-action="' +
                  newReaction +
                  '"]'
              );
              element.find(".count").html(fnQueriedObj.count);
              if (ajaxAction === "add") {
                element.addClass("active");
              } else {
                element.removeClass("active");
              }
              SpideReactionWait = false;
            },
            error: function (MLHttpRequest, textStatus, errorThrown) {
              console.log(MLHttpRequest);
              console.log(textStatus);
              console.log(errorThrown);
            },
          });

          return false;
        });
    },

    commentOpener: function () {
      $(".spide_fn_comments .comment_opener a")
        .off()
        .on("click", function () {
          var element = $(this);
          var parent = element.closest(".spide_fn_comments");
          var comment = parent.find(".fn__comments");
          if (parent.hasClass("comment-active")) {
            parent.removeClass("comment-active");
            comment.slideUp();
          } else {
            parent.addClass("comment-active");
            comment.slideDown();
          }
          return false;
        });
    },

    moreMenu: function () {
      $(".spide_fn_nav").each(function () {
        var nav = $(this);
        var menu = nav.find(".menu");
        var more = menu.find(".more");
        var moreBtn = more.find("a");
        var moreBtnWidth = moreBtn.width();
        var w = 0,
          a = 0,
          html = "",
          padding = 60;
        if (nav.parent().hasClass("bottom_fixer")) {
          menu = $(".spide_fn_header .bottom_fixer");
          padding = 120;
        }
        nav.find(".spide_fn_main_nav > li").each(function () {
          var e = $(this);
          a += parseInt(e.outerWidth(true));
          a += moreBtnWidth;
          if (w + a > menu.width() - padding) {
            e.addClass("disabled");
            html += '<li class="' + e.attr("class") + '">' + e.html() + "</li>";
          } else {
            e.removeClass("disabled");
          }
          a -= moreBtnWidth;
          w += a;
          a = 0;
        });
        if (html !== "") {
          more.addClass("active");
          more.find(".sub-menu").html(html);
        } else {
          more.removeClass("active");
        }
        $(".spide_fn_header .spide_fn_nav").addClass("ready");
      });
    },

    reversedMenu: function () {
      $(".spide_fn_main_nav ul").each(function () {
        var e = $(this),
          w = e.offset().left + 240,
          W = $("body").width();
        if (w > W) {
          e.addClass("reverse");
        }
      });
    },

    seachSomething: function () {
      var searchOpener = $(
        ".spide_fn_header .search_opener a,.spide_fn_mobnav .mobsearch_opener, .icon_bar__search a"
      );
      var searchbox = $(".spide_fn_searchbox");
      var input = searchbox.find('form input[type="text"]');
      var resultBox = searchbox.find(".resultbox");
      var infoBox = resultBox.find(".result_info");
      var resultList = resultBox.find(".result_list ul");

      searchOpener.off().on("click", function () {
        if (SpideBody.hasClass("search-active")) {
          SpideBody.removeClass("search-active");
        } else {
          SpideBody.addClass("search-active");
          input.val("");
          setTimeout(function () {
            input[0].focus();
          }, 100);
        }
        return false;
      });

      searchbox
        .find(".search_closer")
        .off()
        .on("click", function () {
          SpideBody.removeClass("search-active");
          resultList.html("");
          searchbox.removeClass("ajax_result");
          infoBox.html("<p>" + infoBox.data("info") + "</p>");
          return false;
        });
      input.on("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          $('.spide_fn_searchbox form input[type="submit"]').trigger("click");
        }
      });

      // filter search
      var timeout = null;
      input.on("keyup", function () {
        var field = $(this);
        var text = field.val();

        clearTimeout(timeout);

        timeout = setTimeout(function () {
          SpideSearch.search = text;
          if (text === SpideSearch.text) {
            return false;
          }
          SpideSearch.text = text;
          SpideInit.filterAjaxSearch();
        }, 700);
      });

      searchbox.find('input[type="checkbox"]').change(function () {
        SpideInit.filterAjaxSearch();
      });
    },

    filterAjaxSearch: function () {
      var searchBox = $(".spide_fn_searchbox");
      var resultBox = searchBox.find(".resultbox");
      var infoBox = resultBox.find(".result_info");
      var resultList = resultBox.find(".result_list ul");
      if (SpideSearch.text === "") {
        resultList.html("");
        searchBox.removeClass("ajax_result");
        infoBox.html("<p>" + infoBox.data("info") + "</p>");
        return false;
      }
      searchBox.addClass("loading ajax_result");
      var titleFilter = searchBox.find(".title_filter input").prop("checked")
        ? 1
        : 0;
      var postFilter = searchBox.find(".post_filter input").prop("checked")
        ? 1
        : 0;

      var requestData = {
        action: "spide_fn_ajax_search",
        security: SpideAjax.nonce,
        text: SpideSearch.text,
        titleFilter: titleFilter,
        postFilter: postFilter,
      };

      $.ajax({
        type: "POST",
        url: SpideAjax.ajax_url,
        cache: false,
        data: requestData,
        success: function (data) {
          var fnQueriedObj = $.parseJSON(data);

          // append new items into grid
          resultList.html(fnQueriedObj.list);
          infoBox.html(fnQueriedObj.info);

          // recall some functions
          SpideInit.dataFnBgImg();
          SpideInit.imgToSVG();

          searchBox.removeClass("loading");
        },
        error: function (xhr, textStatus, errorThrown) {
          console.log(errorThrown);
          console.log(textStatus);
          console.log(xhr);
        },
      });
    },

    totopScroll: function () {
      var minSpeed = 500;
      var maxSpeed = 1500;
      $(".spide_fn_totop")
        .off()
        .on("click", function (e) {
          e.preventDefault();
          var speed = ($(window).scrollTop() - $(window).height()) / 2;
          if (speed < minSpeed) {
            speed = minSpeed;
          }
          if (speed > maxSpeed) {
            speed = maxSpeed;
          }
          $("html, body").animate({ scrollTop: 0 }, speed);
          return false;
        });
    },

    ready: function () {
      $(
        ".spide_fn_walletbox, .spide_fn_wallet_closer, .spide_fn_leftnav, .spide_fn_leftnav_closer"
      ).removeClass("ready");
    },

    minHeightPages: function () {
      var adminBar = $("#wpadminbar");
      var adminBarHeight = 0;
      var footer = $("#spide_fn_footer");
      var header = $("#spide_fn_header");
      var footerHeight = 0;
      var headerHeight = 0;
      if (adminBar.length) {
        adminBarHeight = adminBar.height();
      }
      if (window.matchMedia("(max-width: 600px)").matches) {
        adminBarHeight = 0;
      }
      if (header.length) {
        headerHeight = header.outerHeight();
      }
      if (footer.length) {
        footerHeight = footer.outerHeight();
      }
      $(".spide_fn_page_ajax").css({
        minHeight:
          $(window).height() -
          adminBarHeight -
          footerHeight -
          headerHeight +
          "px",
      });
    },

    fixAdminBar: function () {
      if (SpideBody.hasClass("admin-bar")) {
        $("html").addClass("frenify-html");
      }
      if ($(".spide_fn_author_info .info_img img").length) {
        $(".spide_fn_author_info .info_in").css({ marginTop: 0 });
      }
    },

    preloader: function () {
      $(".spide_fn_preloader").addClass("ready");
    },

    widgetTitle: function () {
      $(
        ".wp-block-group__inner-container > h1,.wp-block-group__inner-container > h2,.wp-block-group__inner-container > h3,.wp-block-group__inner-container > h4,.wp-block-group__inner-container > h5,.wp-block-group__inner-container > h6"
      ).each(function () {
        var e = $(this);
        e.after(
          '<div class="wid-title"><span class="tl_wing"></span><span class="tr_wing"></span><span class="text"><span>' +
            e.text() +
            "</span></span></div>"
        );
        e.remove();
      });
    },

    totopWinScroll: function () {
      var WinOffset = $(window).scrollTop();
      var totop = $("a.spide_fn_totop");
      if (totop.length) {
        if (WinOffset > 300) {
          totop.addClass("active");
        } else {
          totop.removeClass("active");
        }
      }
    },

    // ************************************************************************
    // ************************************************************************
    // ************************************************************************
    blog_info: function () {
      if ($(".blog_info").height() === 0) {
        $(".spide_fn_comment").addClass("margin-no-top");
      }
      if ($(".wp-calendar-nav").length) {
        $(".wp-calendar-nav").each(function () {
          var e = $(this);
          if (!e.find("a").length) {
            e.remove();
          }
        });
      }
    },

    projectPopup: function () {
      $(".spide_popup_gallery").each(function () {
        // the containers for all your galleries
        $(this).magnificPopup({
          delegate: "a.zoom", // the selector for gallery item
          type: "image",
          gallery: {
            enabled: true,
          },
          removalDelay: 300,
          mainClass: "mfp-fade",
        });
      });
      $(".spide_popup_youtube, .spide_popup_vimeo").each(function () {
        // the containers for all your galleries
        $(this).magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      });

      $(".spide_popup_soundcloude").each(function () {
        $(this).magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    },

    inputCheckBoxInComment: function () {
      if ($("p.comment-form-cookies-consent input[type=checkbox]").length) {
        $("p.comment-form-cookies-consent input[type=checkbox]")
          .wrap('<label class="fn_checkbox"></label>')
          .after("<span></span>");
      }
    },

    url_fixer: function () {
      $('a[href*="fn_ex_link"]').each(function () {
        var oldUrl = $(this).attr("href"),
          array = oldUrl.split("fn_ex_link/"),
          newUrl = SpideAjax.siteurl + "/" + array[1];
        $(this).attr("href", newUrl);
      });
      if ($(".spide-fn-protected").length) {
        $(".spide_fn_pagein").css({ paddingTop: 0 });
      }
    },

    cursor: function () {
      var myCursor = $(".frenify-cursor");
      if (myCursor.length) {
        if ($("body").length) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          var n,
            i = 0,
            W = 0,
            intro = 0,
            o = !1;
          if ($(".spide_fn_intro").length) {
            intro = 1;
          }

          var buttons =
            ".fn__blog_anchor .closer,.fn__blog_anchor .ba_item,.modal_ux_closer, .spide_fn_nav .trigger,.spide_fn_header .trigger,.fn_cs_intro_testimonials .prev, .fn_cs_intro_testimonials .next, .fn_cs_swiper_nav_next, .fn_cs_swiper_nav_prev, .fn_dots, .swiper-button-prev, .swiper-button-next, .fn_cs_accordion .acc_head, .spide_fn_popupshare .share_closer, .spide_fn_header .fn_finder, .spide_fn_header .fn_trigger, a, input[type='submit'], .cursor-link, button";
          var sliders = ".owl-carousel, .swiper-container, .cursor-link";
          // link mouse enter + move
          (window.onmousemove = function (s) {
            o ||
              (t.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (e.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (n = s.clientY),
              (i = s.clientX);
          }),
            $("body").on("mouseenter", buttons, function () {
              e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
            }),
            $("body").on("mouseleave", buttons, function () {
              ($(this).is("a") && $(this).closest(".cursor-link").length) ||
                (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
            }),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");

          // slider mouse enter
          SpideBody.on("mouseenter", sliders, function () {
            e.classList.add("cursor-slider");
            t.classList.add("cursor-slider");
          }).on("mouseleave", sliders, function () {
            e.classList.remove("cursor-slider");
            t.classList.remove("cursor-slider");
          });

          // slider mouse hold
          SpideBody.on("mousedown", sliders, function () {
            e.classList.add("mouse-down");
            t.classList.add("mouse-down");
          }).on("mouseup", sliders, function () {
            e.classList.remove("mouse-down");
            t.classList.remove("mouse-down");
          });
        }
      }
    },

    widget__archives: function () {
      $(".widget_archive li").each(function () {
        var e = $(this);
        var a = e.find("a").clone();
        SpideBody.append('<div class="frenify_hidden_item"></div>');
        $(".frenify_hidden_item").html(e.html());
        $(".frenify_hidden_item").find("a").remove();
        var suffix = $(".frenify_hidden_item").html().match(/\d+/); // 123456
        $(".frenify_hidden_item").remove();
        suffix = parseInt(suffix);
        if (isNaN(suffix)) {
          return false;
        }
        suffix = '<span class="count">' + suffix + "</span>";
        e.html(a);
        e.append(suffix);
      });
    },

    widget__pages: function () {
      var nav = $(".widget_pages ul");
      nav.each(function () {
        $(this)
          .find("a")
          .off()
          .on("click", function (e) {
            var element = $(this);
            var parentItem = element.parent("li");
            var parentItems = element.parents("li");
            var parentUls = parentItem.parents("ul.children");
            var subMenu = element.next();
            var allSubMenusParents = nav.find("li");

            allSubMenusParents.removeClass("opened");

            if (subMenu.length) {
              e.preventDefault();

              if (!subMenu.parent("li").hasClass("active")) {
                if (!parentItems.hasClass("opened")) {
                  parentItems.addClass("opened");
                }

                allSubMenusParents.each(function () {
                  var el = $(this);
                  if (!el.hasClass("opened")) {
                    el.find("ul.children").slideUp();
                  }
                });

                allSubMenusParents.removeClass("active");
                parentUls.parent("li").addClass("active");
                subMenu.parent("li").addClass("active");
                subMenu.slideDown();
              } else {
                subMenu.parent("li").removeClass("active");
                subMenu.slideUp();
              }
              return false;
            }
          });
      });
    },

    submenu__Mobile: function () {
      var nav = $(
        ".wp-block-page-list, ul.vert_menu_list, .widget_nav_menu ul.menu, .spide_fn_mobnav .mob_bot .mobile_menu"
      );
      var mobileAutoCollapse = SpideWrapper.data("mobile-autocollapse");
      nav.each(function () {
        $(this)
          .find("a")
          .off()
          .on("click", function (e) {
            var element = $(this);
            var parentItem = element.parent("li");
            var parentItems = element.parents("li");
            var parentUls = parentItem.parents("ul.sub-menu");
            var subMenu = element.next();
            var allSubMenusParents = nav.find("li");

            allSubMenusParents.removeClass("opened");

            if (subMenu.length) {
              e.preventDefault();

              if (!subMenu.parent("li").hasClass("active")) {
                if (!parentItems.hasClass("opened")) {
                  parentItems.addClass("opened");
                }

                allSubMenusParents.each(function () {
                  var el = $(this);
                  if (!el.hasClass("opened")) {
                    el.find("ul.sub-menu").slideUp();
                  }
                });

                allSubMenusParents.removeClass("active");
                parentUls.parent("li").addClass("active");
                subMenu.parent("li").addClass("active");
                subMenu.slideDown();
              } else {
                subMenu.parent("li").removeClass("active");
                subMenu.slideUp();
              }
              return false;
            }
            if (mobileAutoCollapse === "enable") {
              if (nav.parent().parent().hasClass("opened")) {
                nav.parent().parent().removeClass("opened").slideUp();
                $(".spide_fn_mobilemenu_wrap .hamburger").removeClass(
                  "is-active"
                );
              }
            }
          });
      });
    },

    hamburgerOpener__Mobile: function () {
      var hamburger = $(".spide_fn_mobilemenu_wrap .hamburger");
      hamburger.off().on("click", function () {
        var element = $(this);
        var menupart = $(".spide_fn_mobilemenu_wrap .mobilemenu");
        if (element.hasClass("is-active")) {
          element.removeClass("is-active");
          menupart.removeClass("opened");
          menupart.slideUp(500);
        } else {
          element.addClass("is-active");
          menupart.addClass("opened");
          menupart.slideDown(500);
        }
        return false;
      });
    },

    imgToSVG: function () {
      $("img.fn__svg").each(function () {
        var img = $(this);
        var imgClass = img.attr("class");
        var imgURL = img.attr("src");

        $.get(
          imgURL,
          function (data) {
            var svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
              svg = svg.attr("class", imgClass + " replaced-svg");
            }
            img.replaceWith(svg);
          },
          "xml"
        );
      });
    },

    dataFnBgImg: function () {
      $("*[data-fn-bg-img], *[data-bg-img]").each(function () {
        var element = $(this);
        var attrBg =
          element.attr("data-fn-bg-img") || element.attr("data-bg-img");
        var bgImg = element.data("fn-bg-img") || element.data("bg-img");

        if (typeof attrBg !== "undefined" && bgImg !== "") {
          element
            .addClass("frenify-ready")
            .css({ backgroundImage: "url(" + bgImg + ")" });
        }
      });
    },

    isotopeMasonry: function () {
      var masonry = $(".fn__masonry");
      if ($().isotope) {
        masonry.each(function () {
          $(this).isotope({
            itemSelector: ".mas__in",
            masonry: {},
          });
        });
      }
      var masonry2 = $(
        ".fn__blog_list_layout_masonry, .fn__blog_list_layout_list"
      );
      if ($().isotope) {
        masonry2.each(function () {
          $(this).isotope({
            itemSelector: ".post_item",
            masonry: {},
          });
        });
      }
    },
  };

  // ready functions
  $(document).ready(function () {
    SpideInit.init();
  });

  // resize functions
  $(window).on("resize", function (e) {
    e.preventDefault();
    SpideInit.isotopeMasonry();
    SpideInit.minHeightPages();
    SpideInit.moreMenu();
    SpideInit.quickNavResize();
    SpideInit.blogPageFeatured();
  });

  // scroll functions
  $(window).on("scroll", function (e) {
    e.preventDefault();
    SpideInit.totopWinScroll();
    SpideInit.stickyHeader();
  });

  // load functions
  $(window).on("load", function (e) {
    e.preventDefault();
    SpideInit.preloader();
    SpideInit.isotopeMasonry();
    setTimeout(function () {
      SpideInit.isotopeMasonry();
      SpideInit.blogPageFeatured();
    }, 200);
  });

  window.addEventListener("load", function () {
    SpideInit.preloader();
    SpideInit.moreMenu();
  });

  $(window).on("elementor/frontend/init", SpideInit.rippleEffect);
})(jQuery);

/* <![CDATA[ */
var SpideAjaxObject = {
  ajax_url:
    "https://frenify.com/work/envato/frenify/wp/spide/1/wp-admin/admin-ajax.php",
  siteurl: "https://frenify.com/work/envato/frenify/wp/spide/1",
  nonce: "6749dddc15",
};
/* ]]> */
