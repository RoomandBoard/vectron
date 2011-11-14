/*!
 * jQuery Vectron: jQuery plugin to load external SVG files into Raphael JS through declarative markup.
 * 
 * Copyright  2011 Room & Board
 * MIT Licensed
 */

(function($){
	$.fn.vectron = function(){
		return this.each(function(){
			var canvas = this;
				w = $(this).width(), 
				h = $(this).height(),
				src = $(this).attr('data-svg'),
				paper = Raphael(canvas, w, h),
			
			$.ajax({ url: src, type: "GET", dataType: "text" })
				.success(function(resp){
				    if (!resp) return;
					var svgText = resp.slice(resp.indexOf('<svg'));
					if (svgText) {
				   		paper.importSVG(svgText);
				    	// var set = paper.set(); paper.importSVG(svgText, set);
				    }
				});
		});
	}
})(jQuery);