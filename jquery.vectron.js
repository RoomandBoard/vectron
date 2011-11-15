/*!
 * jQuery Vectron: jQuery plugin to load external SVG files into Raphael JS through declarative markup.
 * 
 * Copyright  2011 Room & Board
 * MIT Licensed
 */

(function($){
	function Vectron(src, paper){
		this.src = src;
		this.paper = paper;
		this.svgset = paper.set();
		return this;
	}
	
	Vectron.prototype.importSVG = function(){
		var self = this,
			$ajax = $.ajax({ url: self.src, type: "GET", dataType: "text" });
			
		$ajax.success(function(resp){
			if (!resp) return;
			var svgText = resp.slice(resp.indexOf('<svg'));
			if (svgText) {
				self.paper.importSVG(svgText, self.svgset);
			}
		});
		return this;
	}
	
	$.vectron = { instances: [] };
	
	$.fn.vectron = function(){
		return this.each(function(){
			var canvas = this;
				w = $(this).width(), 
				h = $(this).height(),
				src = $(this).attr('data-svg'),
				paper = Raphael(canvas, w, h);
			
			$.vectron.instances[$.vectron.instances.length] = new Vectron(src, paper).importSVG();
		});
	}
	
})(jQuery);