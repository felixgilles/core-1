(function(){tinymce.PluginManager.requireLangPack("noslink");tinymce.create("tinymce.plugins.NosLinkPlugin",{init:function(b,c){var a=this,d={};a.editor=b;b.addCommand("mceNosLink",function(g,e,f){a._nosLink(g,e,f)});b.onNodeChange.add(function(g,e,l,j,f){var i,k;function h(n){var o,m=f.parents,p=n;if(typeof(n)=="string"){p=function(q){return q.nodeName==n}}for(o=0;o<m.length;o++){if(p(m[o])){return m[o]}}}i=h("A");if(k=e.get("noslink")){k.setDisabled(!i&&j);k.setActive(!!i)}})},createControl:function(e,a){var b=this,d;if(e==="noslink"){d=a.createSplitButton("noslink",{title:"noslink.link_title",label:"noslink.link_label",onclick:function(){b.editor.execCommand("mceNosLink",true,"")},"class":"mce_link"},tinymce.ui.NosSplitButton);d.onRenderMenu.add(function(g,f){f.add({title:"noslink.link_title","class":"mceMenuItemTitle"}).setDisabled(1);f.add({title:"noslink.link_title",icon:"link",onclick:function(){b.editor.execCommand("mceNosLink",true,"")},id:"link"});f.add({title:"noslink.unlink_desc",icon:"unlink",onclick:function(){b.editor.execCommand("unlink",false,"")},id:"unlink"});f.onShowMenu.add(function(c){var k=b.editor.selection.getNode(),j,i,h;j=tinymce.DOM.getParent(k,"A");i=!!j;h=i&&(j.name||(j.id&&!j.href));c.items.link.setDisabled(h);c.items.link.setActive(i&&!h);c.items.unlink.setDisabled(!i)})});return d}return null},_nosLink:function(d,g){var a=this.editor,f=a.dom.getParent(a.selection.getNode(),"A");var c=a.selection.getBookmark(1);var b=null;b=$nos(a.getElement()).nosDialog({contentUrl:"admin/nos/wysiwyg/link"+(f?"/edit":""),title:f?a.getLang("nos.link_edit"):a.getLang("nos.link_insert"),ajax:true,open:function(e){$(e.target).data("tinymce",a)}});b.bind("insert.link",function(h,e){b.nosDialog("close");if(tinymce.isIE){a.selection.moveToBookmark(c)}if(f==null){a.getDoc().execCommand("unlink",false,null);a.execCommand("mceInsertLink",false,"#mce_temp_url#",{skip_undo:1});tinymce.each(a.dom.select("a"),function(i){if(a.dom.getAttrib(i,"href")=="#mce_temp_url#"){f=i;a.dom.setAttribs(f,{href:e.href,title:e.title,target:e.target})}})}else{a.dom.setAttribs(f,{href:e.href,title:e.title,target:e.target})}if(f.childNodes.length!=1||f.firstChild.nodeName!="IMG"){a.focus();a.selection.select(f);a.selection.collapse(0);a.windowManager.bookmark=a.selection.getBookmark(1)}a.execCommand("mceEndUndoLevel")})}});tinymce.PluginManager.add("noslink",tinymce.plugins.NosLinkPlugin)})();