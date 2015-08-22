﻿/**
 * jQuery Fileinput Plugin v3.0.0
 *
 * Copyright 2013, Hannu Leinonen <hleinone@gmail.com>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function (e) {
    e.support.cssPseudoClasses = function () {
        try {
            var t = e("<input type='checkbox' checked/>").appendTo("body"),
                i = e('<style type="text/css" />').appendTo("head");
            i.text("input:checked {width: 200px; display: none}");
            var n = "200px" === t.css("width");
            return t.remove(),
                i.remove(),
                n;
        } catch (s) {
            return false;
        }
    }(),
        e.fn.fileinput = function (t) {
            var i = this,
                n = '<button class="fileinput">Browse...</button>';
            return t && (n = t instanceof jQuery ? e(t).wrap("<div />").parent().html() : t),
                i.each(function () {
                    var t = e(this);
                    t.wrap('<div class="fileinput-wrapper" style="overflow:hidden; position: relative; display: inline-block;" />'),
                        t.parent().mousemove(function () {
                        }), t.attr("tabindex", "-1").css({
                            filter: "alpha(opacity=0)",
                            "-moz-opacity": 0,
                            opacity: 0,
                            position: "absolute",
                            "z-index": -1
                        }),
                        t.before(n),
                        t.prev().addClass("fileinput"),
                        e.support.cssPseudoClasses ? (t.prev(".fileinput").click(function () {
                            t.click();
                        }),
                            t.prev(":submit.fileinput").click(function (e) {
                                e.preventDefault();
                            })) : (t.css({
                                "z-index": "auto",
                                cursor: "pointer"
                            }),
                            t.prev(".fileinput").css("z-index", -1),
                            t.removeAttr("tabindex"),
                            t.prev(".fileinput").attr("tabindex", "-1"),
                            t.hover(function () {
                                e(this).prev(".fileinput").addClass("hover");
                            }, function () {
                                e(this).prev(".fileinput").removeClass("hover");
                            }).focusin(function () {
                                e(this).prev(".fileinput").addClass("focus");
                            }).focusout(function () {
                                e(this).prev(".fileinput").removeClass("focus");
                            }).mousedown(function () {
                                e(this).prev(".fileinput").addClass("active");
                            }).mouseup(function () {
                                e(this).prev(".fileinput").removeClass("active");
                            }));
                }), i;
        }
})(jQuery);
